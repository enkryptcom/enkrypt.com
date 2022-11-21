import { NetworkName } from "@/types/networks";
import Eth from "@/icons/networks/eth.vue";
import Polkadot from "@/icons/networks/polkadot.vue";
import Kusama from "@/icons/networks/kusama.vue";
import Polygon from "@/icons/networks/polygon.vue";
import Acala from "@/icons/networks/acala.vue";
import Moonbeam from "@/icons/networks/moonbeam.vue";
import Bnb from "@/icons/networks/bnb.vue";
import Karura from "@/icons/networks/karura.vue";
import Moonriver from "@/icons/networks/moonriver.vue";
import Astar from "@/icons/networks/astar.vue";
import Shiden from "@/icons/networks/shiden.vue";
import Okx from "@/icons/networks/okx.vue";
import Canto from "@/icons/networks/canto.vue";
import Bifrost from "@/icons/networks/bifrost.vue";
import Optimism from "@/icons/networks/optimism.vue";
import Bitcoin from "@/icons/networks/bitcoin.vue";

const icons: {
  [key in NetworkName]: {
    pageIcon: any;
    carouselIcon: any;
  };
} = {
  [NetworkName.ethereum]: {
    pageIcon: require("./images/ethereum.svg"),
    carouselIcon: Eth,
  },
  [NetworkName.polkadot]: {
    pageIcon: require("./images/polkadot.svg"),
    carouselIcon: Polkadot,
  },
  [NetworkName.kusama]: {
    pageIcon: require("./images/kusama.svg"),
    carouselIcon: Kusama,
  },
  [NetworkName.polygon]: {
    pageIcon: require("./images/polygon.svg"),
    carouselIcon: Polygon,
  },
  [NetworkName.acala]: {
    pageIcon: require("./images/acala.svg"),
    carouselIcon: Acala,
  },
  [NetworkName.moonbeam]: {
    pageIcon: require("./images/moonbeam.png"),
    carouselIcon: Moonbeam,
  },
  [NetworkName.bnb]: {
    pageIcon: require("./images/bnb.svg"),
    carouselIcon: Bnb,
  },
  [NetworkName.karura]: {
    pageIcon: require("./images/karura.svg"),
    carouselIcon: Karura,
  },
  [NetworkName.moonriver]: {
    pageIcon: require("./images/moonriver.png"),
    carouselIcon: Moonriver,
  },
  [NetworkName.astar]: {
    pageIcon: require("./images/astar.svg"),
    carouselIcon: Astar,
  },
  [NetworkName.shiden]: {
    pageIcon: require("./images/shiden.svg"),
    carouselIcon: Shiden,
  },
  [NetworkName.okc]: {
    pageIcon: require("./images/okc.svg"),
    carouselIcon: Okx,
  },
  [NetworkName.canto]: {
    pageIcon: require("./images/canto.svg"),
    carouselIcon: Canto,
  },
  [NetworkName.bifrost]: {
    pageIcon: require("./images/bifrost.svg"),
    carouselIcon: Bifrost,
  },
  [NetworkName.optimism]: {
    pageIcon: require("./images/optimism.svg"),
    carouselIcon: Optimism,
  },
  [NetworkName.bitcoin]: {
    pageIcon: require("./images/bitcoin.svg"),
    carouselIcon: Bitcoin,
  },
};

export default icons;
