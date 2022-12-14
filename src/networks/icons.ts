import { NetworkName } from "@/types/networks";

const icons: {
  [key in NetworkName]: {
    pageIcon: any;
    carouselIcon: any;
  };
} = {
  [NetworkName.ethereum]: {
    pageIcon: require("./images/ethereum.svg"),
    carouselIcon: require("@/icons/networks/eth.svg"),
  },
  [NetworkName.polkadot]: {
    pageIcon: require("./images/polkadot.svg"),
    carouselIcon: require("@/icons/networks/polkadot.svg"),
  },
  [NetworkName.kusama]: {
    pageIcon: require("./images/kusama.svg"),
    carouselIcon: require("@/icons/networks/kusama.svg"),
  },
  [NetworkName.polygon]: {
    pageIcon: require("./images/polygon.svg"),
    carouselIcon: require("@/icons/networks/polygon.svg"),
  },
  [NetworkName.acala]: {
    pageIcon: require("./images/acala.svg"),
    carouselIcon: require("@/icons/networks/acala.svg"),
  },
  [NetworkName.moonbeam]: {
    pageIcon: require("./images/moonbeam.png"),
    carouselIcon: require("@/icons/networks/moonbeam.svg"),
  },
  [NetworkName.bnb]: {
    pageIcon: require("./images/bnb.svg"),
    carouselIcon: require("@/icons/networks/bnb.svg"),
  },
  [NetworkName.karura]: {
    pageIcon: require("./images/karura.svg"),
    carouselIcon: require("@/icons/networks/karura.svg"),
  },
  [NetworkName.moonriver]: {
    pageIcon: require("./images/moonriver.png"),
    carouselIcon: require("@/icons/networks/moonriver.svg"),
  },
  [NetworkName.astar]: {
    pageIcon: require("./images/astar.svg"),
    carouselIcon: require("@/icons/networks/astar.svg"),
  },
  [NetworkName.shiden]: {
    pageIcon: require("./images/shiden.svg"),
    carouselIcon: require("@/icons/networks/shiden.svg"),
  },
  [NetworkName.okc]: {
    pageIcon: require("./images/okc.svg"),
    carouselIcon: require("@/icons/networks/okx.svg"),
  },
  [NetworkName.canto]: {
    pageIcon: require("./images/canto.svg"),
    carouselIcon: require("@/icons/networks/canto.svg"),
  },
  [NetworkName.bifrost]: {
    pageIcon: require("./images/bifrost.svg"),
    carouselIcon: require("@/icons/networks/bifrost.svg"),
  },
  [NetworkName.optimism]: {
    pageIcon: require("./images/optimism.svg"),
    carouselIcon: require("@/icons/networks/optimism.svg"),
  },
  [NetworkName.bitcoin]: {
    pageIcon: require("./images/bitcoin.svg"),
    carouselIcon: require("@/icons/networks/bitcoin.svg"),
  },
};

export default icons;
