import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join as pathJoin, resolve as pathResolve } from "path";
import { streamToPromise, SitemapStream } from "sitemap";
import { PluginOption } from "vite";
import networkList from "./src/networks/networks";

const StaticNetworkPages = (): PluginOption => {
  const name = "StaticNetworkPages";
  const outDir = "dist";
  const subDir = "networks";
  const src = pathJoin(outDir, "index.html");
  const MAIN_INFO = {
    title: "Enkrypt: Ethereum, Polkadot and Bitcoin Wallet",
    description:
      "A multichain crypto wallet Hold, buy, send, receive, and swap tokens. Manage your NFTs. Access web3 apps across multiple blockchains.",
  };

  return {
    name,
    transformIndexHtml(html) {
      html = html.replaceAll("##TITLE##", MAIN_INFO.title);
      html = html.replaceAll("##DESCRIPTION##", MAIN_INFO.description);
      return html;
    },
    closeBundle: () => {
      const routes = Object.values(networkList);
      const sitemap = new SitemapStream({
        hostname: "https://www.enkrypt.com",
      });
      sitemap.write({
        url: ``,
        changefreq: "weekly",
        priority: 1.0,
      });
      routes.forEach((p) => {
        const finalDir = `${p.path}-wallet`;
        const dir = pathResolve(outDir, subDir, finalDir);
        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true });
        }
        const dst = pathJoin(outDir, subDir, finalDir, "index.html");
        let indexFile = readFileSync(src, "utf-8");
        indexFile = indexFile.replaceAll(MAIN_INFO.title, p.pageTitle);
        indexFile = indexFile.replaceAll(MAIN_INFO.title, p.pageTitle);
        indexFile = indexFile.replaceAll(
          MAIN_INFO.description,
          p.pageDescription
        );
        writeFileSync(dst, indexFile);
        sitemap.write({
          url: `/networks/${p.path}-wallet/`,
          changefreq: "weekly",
          priority: 1.0,
        });
        console.log(`${name}: Saved ${src} to ${dst}`);
      });
      sitemap.end();
      streamToPromise(sitemap).then((buffer) =>
        writeFileSync(
          pathResolve(outDir, "sitemap.xml"),
          new Uint8Array(buffer)
        )
      );
    },
  };
};

export { StaticNetworkPages };
