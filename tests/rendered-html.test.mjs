import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the IROS 2026 workshop page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Scalable Tactile Sensing for Dexterous Manipulation · IROS 2026<\/title>/i);
  assert.match(html, /September 27, 2026/);
  assert.match(html, /Call for papers/);
  assert.match(html, /Live demo submissions/);
  assert.match(html, /Invited speakers/);
  assert.match(html, /Homanga Bharadhwaj/);
  assert.match(html, /Greg Hager/);
  assert.ok(html.indexOf("Invited speakers") < html.indexOf("Four objectives"));
  assert.ok(html.indexOf("Edward Adelson") < html.indexOf("Raunaq Bhirangi"));
  assert.ok(html.indexOf("Invited speakers") < html.indexOf("Panelists"));
  assert.ok(html.indexOf("Panelists") < html.indexOf("Four objectives"));
  assert.match(html, /Krishna Murthy Jatavallabhula/);
  assert.match(html, /Moderator/);
  assert.match(html, /More names will be revealed soon\./);
  assert.match(html, /href="https:\/\/openreview\.net\/group\?id=IEEE\.org\/IROS\/2026\/Workshop\/Scalable_Tactile_Manipulation#tab-your-consoles"/);
  assert.doesNotMatch(html, /Submission information|OpenReview portal coming soon/);
  assert.doesNotMatch(html, /not a sequence of passive talks/i);
});

test("omits the workshop agenda and starter preview", async () => {
  const response = await render();
  const html = await response.text();
  const [page, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(html, />\s*Schedule\s*</i);
  assert.doesNotMatch(html, /8:30|12:30/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});
