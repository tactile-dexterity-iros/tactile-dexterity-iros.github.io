import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const clientDirectory = new URL("dist/client/", projectRoot);
const outputDirectory = new URL("out/", projectRoot);
const workerUrl = new URL("dist/server/index.js", projectRoot);
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://tactile-dexterity-iros.github.io/", {
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

if (!response.ok) {
  throw new Error(`Static render failed with HTTP ${response.status}`);
}

const staticHtml = (await response.text())
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
  .replace(/\sdata-rsc-css-href="[^"]*"/g, "")
  .replace(/\sdata-precedence="[^"]*"/g, "");

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });
await Promise.all([
  writeFile(new URL("index.html", outputDirectory), staticHtml),
  writeFile(new URL("404.html", outputDirectory), staticHtml),
  writeFile(new URL(".nojekyll", outputDirectory), ""),
]);

console.log("Static GitHub Pages site exported to out/");
