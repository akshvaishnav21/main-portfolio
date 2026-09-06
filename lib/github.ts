import "server-only";
import { fetchStarCount } from "./github-client";

export async function getAllStarCounts(
  repos: string[],
): Promise<Record<string, number | null>> {
  if (process.env.GITHUB_STARS_DISABLED === "1") return {};
  const entries = await Promise.all(
    [...new Set(repos)].map(
      async (repo) =>
        [
          repo,
          await fetchStarCount(repo, { token: process.env.GITHUB_TOKEN }),
        ] as const,
    ),
  );
  return Object.fromEntries(entries);
}
