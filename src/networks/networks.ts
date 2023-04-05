import { NetworkName } from "../types/networks";
import { InnerPage } from "../types/inner-page";
import networksJSON from "./networks.json";

const networks: Record<string, InnerPage> = {};

const LightenColor = (color: string, percent: number) => {
  const num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

networksJSON.data.forEach((item) => {
  networks[item.attributes.path] = {
    color: LightenColor(
      item.attributes.icon.data.attributes.colors.dominant,
      -10
    ),
    name: item.attributes.name,
    pageDescription: item.attributes.pageDescription,
    pageTitle: item.attributes.pageTitle,
    path: item.attributes.path as NetworkName,
    title: item.attributes.mainTitle,
    blocks: [
      {
        title: item.attributes.aboutEnkryptTitle,
        paragraph: item.attributes.aboutEnkrypt,
      },
      {
        title: item.attributes.networkInfoTitle,
        paragraph: item.attributes.networkInfo,
      },
    ],
  };
});

export default networks as Record<NetworkName, InnerPage>;
