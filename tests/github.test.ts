import test from "node:test";
import assert from "node:assert/strict";
import { fetchStarCount } from "../lib/github-client";

test("preserves zero and valid GitHub counts", async () => {
  for (const count of [0, 21]) {
    assert.equal(
      await fetchStarCount("LearnTube", {
        fetcher: async () => Response.json({ stargazers_count: count }),
      }),
      count,
    );
  }
});
test("unavailable and malformed responses are not presented as zero", async () => {
  for (const status of [403, 404, 500]) {
    assert.equal(
      await fetchStarCount("LearnTube", {
        fetcher: async () => new Response("", { status }),
      }),
      null,
    );
  }
  for (const value of [
    {},
    null,
    { stargazers_count: "21" },
    { stargazers_count: -1 },
    { stargazers_count: 1.5 },
  ]) {
    assert.equal(
      await fetchStarCount("LearnTube", {
        fetcher: async () => Response.json(value),
      }),
      null,
    );
  }
  assert.equal(
    await fetchStarCount("LearnTube", {
      fetcher: async () => new Response("invalid json"),
    }),
    null,
  );
});
test("network errors and timeouts are bounded and optional", async () => {
  assert.equal(
    await fetchStarCount("LearnTube", {
      fetcher: async () => {
        throw new Error("offline");
      },
    }),
    null,
  );
  const started = Date.now();
  const keepAlive = setTimeout(() => {}, 500);
  try {
    const result = await fetchStarCount("LearnTube", {
      timeoutMs: 20,
      fetcher: async (_url, init) =>
        new Promise((_resolve, reject) => {
          init?.signal?.addEventListener(
            "abort",
            () => reject(new Error("aborted")),
            { once: true },
          );
        }),
    });
    assert.equal(result, null);
    assert.ok(Date.now() - started < 500);
  } finally {
    clearTimeout(keepAlive);
  }
});
test("only requests a repository path and keeps authorization in headers", async () => {
  let called = false;
  assert.equal(
    await fetchStarCount("../secret", {
      fetcher: async () => {
        called = true;
        return Response.json({});
      },
    }),
    null,
  );
  assert.equal(called, false);
  await fetchStarCount("LearnTube", {
    token: "test-token",
    fetcher: async (url, init) => {
      assert.equal(
        url,
        "https://api.github.com/repos/akshvaishnav21/LearnTube",
      );
      assert.equal(
        new Headers(init?.headers).get("Authorization"),
        "Bearer test-token",
      );
      assert.ok(init?.signal);
      assert.equal(init?.next?.revalidate, 3600);
      return Response.json({ stargazers_count: 21 });
    },
  });
});
