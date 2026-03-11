const GITHUB_USERNAME = "akshvaishnav21";

export async function getStarCount(repo: string): Promise<number> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count ?? 0;
  } catch {
    return 0;
  }
}

export async function getAllStarCounts(
  repos: string[]
): Promise<Record<string, number>> {
  const counts = await Promise.all(
    repos.map(async (repo) => [repo, await getStarCount(repo)] as const)
  );
  return Object.fromEntries(counts);
}
