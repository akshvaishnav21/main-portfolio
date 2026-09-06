type Fetcher = (
  input: string,
  init?: RequestInit & { next?: { revalidate: number } },
) => Promise<Response>;
export async function fetchStarCount(
  repo: string,
  {
    fetcher = fetch,
    token,
    timeoutMs = 1500,
  }: { fetcher?: Fetcher; token?: string; timeoutMs?: number } = {},
): Promise<number | null> {
  if (!/^[a-zA-Z0-9_.-]+$/.test(repo)) return null;
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetcher(
      `https://api.github.com/repos/akshvaishnav21/${repo}`,
      {
        headers,
        signal: AbortSignal.timeout(timeoutMs),
        next: { revalidate: 3600 },
      },
    );
    if (!response.ok) return null;
    const data: unknown = await response.json();
    if (!data || typeof data !== "object" || !("stargazers_count" in data))
      return null;
    const count = data.stargazers_count;
    return typeof count === "number" &&
      Number.isSafeInteger(count) &&
      count >= 0
      ? count
      : null;
  } catch {
    return null;
  }
}
