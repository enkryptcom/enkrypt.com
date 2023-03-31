import { PluginOption } from "vite";
import { writeFileSync } from "fs";
import fetch from "node-fetch";
import { StrapiResponseType } from "./src/types/strapi";

const StrapiData = async (): Promise<PluginOption> => {
  const name = "StrapiDataDownloader";
  await fetch(`https://strapi.mewapi.io/api/enkrypt-networks?populate=*`)
    .then((res: any) => res.json())
    .then((json: StrapiResponseType) =>
      writeFileSync(`src/networks/networks.json`, JSON.stringify(json))
    );
  return {
    name,
  };
};

export { StrapiData };
