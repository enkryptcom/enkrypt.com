import { sync as glob } from "fast-glob";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { join as pathJoin, resolve as pathResolve } from "path";
import { PluginOption } from "vite";

const StaticNetworkPages = (routes: string[] = []): PluginOption => {
  const name = "StaticNetworkPages";
  const outDir = "dist";
  const subDir = "networks";
  const src = pathJoin(outDir, "index.html");
  const MAIN_INFO = {
    title: "Enkrypt: Ethereum, Polkadot and OKX Wallet",
    description:
      "A multichain crypto wallet Hold, buy, send, receive, and swap tokens. Manage your NFTs. Access web3 apps across multiple blockchains.",
  };
  const networks = {
    ethereum: {
      name: "ethereum",
      description: "hello ethereum",
    },
    polygon: {
      name: "polygon",
      description: "hello polygon",
    },
  };
  return {
    name,
    transformIndexHtml(html) {
      html = html.replaceAll("##TITLE##", MAIN_INFO.title);
      html = html.replaceAll("##DESCRIPTION##", MAIN_INFO.description);
      return html;
    },
    closeBundle: () => {
      const routes = Object.values(networks).map((net) => `${net.name}`);
      routes.forEach((p) => {
        const finalDir = `${p}-wallet`;
        const dir = pathResolve(outDir, subDir, finalDir);
        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true });
        }
        const dst = pathJoin(outDir, subDir, finalDir, "index.html");
        let indexFile = readFileSync(src, "utf-8");
        indexFile = indexFile.replaceAll(
          MAIN_INFO.title,
          networks[p as keyof typeof networks].name
        );
        indexFile = indexFile.replaceAll(
          MAIN_INFO.description,
          networks[p as keyof typeof networks].description
        );
        writeFileSync(dst, indexFile);
        console.log(`${name}: Saved ${src} to ${dst}`);
      });
    },
  };
};

export { StaticNetworkPages };
