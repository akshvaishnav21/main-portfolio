import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("all projects are discoverable and third-party players wait for activation", async ({
  page,
}) => {
  const thirdParty: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo/.test(request.url()))
      thirdParty.push(request.url());
  });
  await page.goto("/");
  await expect(page.locator("#projects article")).toHaveCount(11);
  await expect(
    page.getByRole("link", { name: "Read project story", exact: true }),
  ).toHaveCount(3);
  await expect(page.locator("iframe")).toHaveCount(0);
  expect(thirdParty).toEqual([]);
  const play = page.getByRole("button", {
    name: "Watch TripSync demo",
    exact: true,
  });
  // Keep external player behavior out of this deterministic interaction test.
  await page.route("https://www.youtube-nocookie.com/**", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<html><body>Video preview</body></html>",
    }),
  );
  await play.click();
  await expect(
    page.locator('iframe[title="TripSync demo video"]'),
  ).toHaveAttribute("src", /youtube-nocookie/);
  const close = page.getByRole("button", {
    name: "Close TripSync video",
    exact: true,
  });
  await expect(close).toBeFocused();
  await close.click();
  await expect(page.locator("iframe")).toHaveCount(0);
  await expect(play).toBeFocused();
});

test("mobile navigation announces its state and restores focus on Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const open = page.getByRole("button", {
    name: "Open navigation",
    exact: true,
  });
  await expect(open).toHaveAttribute("aria-expanded", "false");
  await open.click();
  const close = page.getByRole("button", {
    name: "Close navigation",
    exact: true,
  });
  await expect(close).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(open).toBeFocused();
  await expect(open).toHaveAttribute("aria-expanded", "false");
  await open.click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(open).toHaveAttribute("aria-expanded", "false");
});

for (const [slug, name] of [
  ["tripsync", "TripSync"],
  ["learntube", "LearnTube"],
  ["save-your-tokens", "SaveYourTokens"],
]) {
  test(`project story: ${name}`, async ({ page }) => {
    await page.goto(`/projects/${slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);
    await expect(page).toHaveTitle(`${name} — Aakash Vaishnav`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`/projects/${slug}$`),
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      `${name} — Aakash Vaishnav`,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /screenshots/,
    );
    await expect(
      page.getByRole("heading", { name: "Design choices & tradeoffs" }),
    ).toBeVisible();
    await page
      .getByRole("link", { name: "All selected work", exact: true })
      .click();
    await expect(page).toHaveURL(/\/#projects$/);
  });
}

test("keyboard skip link reaches the main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

test("content and case studies remain usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3101");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Section navigation" }),
  ).toBeVisible();
  await expect(page.locator("#projects article")).toHaveCount(11);
  await expect(
    page.getByRole("link", { name: "Watch TripSync on YouTube" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "TripSync", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "The problem" }),
  ).toBeVisible();
  await context.close();
});

test("reduced motion disables smooth scrolling and content is visible", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator("html")
      .evaluate((el) => getComputedStyle(el).scrollBehavior),
  ).toBe("auto");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("responsive layouts and accessibility", async ({ page }) => {
  for (const width of [390, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations, `accessibility at ${width}px`).toEqual([]);
  }
  await page.goto("/projects/learntube");
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
});

test("metadata, local media, and unknown project routes", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const images = await page
    .locator("#projects img")
    .evaluateAll((nodes) =>
      nodes.map((node) => (node as HTMLImageElement).getAttribute("src")!),
    );
  for (const src of images) expect((await request.get(src)).status()).toBe(200);
  for (const src of [
    "/og.png",
    "/icon.svg",
    "/apple-icon.png",
    "/sitemap.xml",
    "/robots.txt",
  ])
    expect((await request.get(src)).status()).toBe(200);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const slug of ["tripsync", "learntube", "save-your-tokens"])
    expect(sitemap).toContain(`/projects/${slug}`);
  const response = await page.goto("/projects/not-a-real-project");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "This page took a detour." }),
  ).toBeVisible();
});
