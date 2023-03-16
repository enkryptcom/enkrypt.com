import { NetworkName } from "@/types/networks";

const icons: {
  [key in NetworkName]: {
    pageIcon: any;
    carouselIcon: any;
  };
} = {
  [NetworkName.ethereum]: {
    pageIcon: require("./images/ethereum-large.svg"),
    carouselIcon: require("@/icons/networks/eth.svg"),
  },
  [NetworkName.polkadot]: {
    pageIcon: require("./images/polkadot-large.svg"),
    carouselIcon: require("@/icons/networks/polkadot.svg"),
  },
  [NetworkName.kusama]: {
    pageIcon: require("./images/kusama-large.svg"),
    carouselIcon: require("@/icons/networks/kusama.svg"),
  },
  [NetworkName.polygon]: {
    pageIcon: require("./images/polygon-large.svg"),
    carouselIcon: require("@/icons/networks/polygon.svg"),
  },
  [NetworkName.acala]: {
    pageIcon: require("./images/acala-large.svg"),
    carouselIcon: require("@/icons/networks/acala.svg"),
  },
  [NetworkName.moonbeam]: {
    pageIcon: require("./images/moonbeam-large.png"),
    carouselIcon: require("@/icons/networks/moonbeam.svg"),
  },
  [NetworkName.bnb]: {
    pageIcon: require("./images/bnb-large.svg"),
    carouselIcon: require("@/icons/networks/bnb.svg"),
  },
  [NetworkName.karura]: {
    pageIcon: require("./images/karura-large.svg"),
    carouselIcon: require("@/icons/networks/karura.svg"),
  },
  [NetworkName.moonriver]: {
    pageIcon: require("./images/moonriver-large.png"),
    carouselIcon: require("@/icons/networks/moonriver.svg"),
  },
  [NetworkName.astar]: {
    pageIcon: require("./images/astar-large.svg"),
    carouselIcon: require("@/icons/networks/astar.svg"),
  },
  [NetworkName.shiden]: {
    pageIcon: require("./images/shiden-large.svg"),
    carouselIcon: require("@/icons/networks/shiden.svg"),
  },
  [NetworkName.okc]: {
    pageIcon: require("./images/okc-large.svg"),
    carouselIcon: require("@/icons/networks/okx.svg"),
  },
  [NetworkName.canto]: {
    pageIcon: require("./images/canto-large.svg"),
    carouselIcon: require("@/icons/networks/canto.svg"),
  },
  [NetworkName.bifrost]: {
    pageIcon: require("./images/bifrost-large.svg"),
    carouselIcon: require("@/icons/networks/bifrost.svg"),
  },
  [NetworkName.optimism]: {
    pageIcon: require("./images/optimism-large.svg"),
    carouselIcon: require("@/icons/networks/optimism.svg"),
  },
  [NetworkName.bitcoin]: {
    pageIcon: require("./images/bitcoin-large.svg"),
    carouselIcon: require("@/icons/networks/bitcoin.svg"),
  },
  [NetworkName.edgeware]: {
    pageIcon: require("./images/edgeware-large.svg"),
    carouselIcon: require("@/icons/networks/edgeware.svg"),
  },
  [NetworkName.rootstock]: {
    pageIcon: require("./images/rootstock-large.svg"),
    carouselIcon: require("@/icons/networks/rootstock.svg"),
  },
  [NetworkName.zksync]: {
    pageIcon: require("./images/zksync-large.svg"),
    carouselIcon: require("@/icons/networks/zksync.svg"),
  },
  [NetworkName.skBlockbrawlers]: {
    pageIcon: require("./images/blockbrawlers-large.png"),
    carouselIcon: require("./images/blockbrawlers-large.png"),
  },
  [NetworkName.skCalypso]: {
    pageIcon: require("./images/calypso-large.png"),
    carouselIcon: require("./images/calypso-large.png"),
  },
  [NetworkName.skChaos]: {
    pageIcon: require("./images/skale-large.png"),
    carouselIcon: require("./images/skale-large.png"),
  },
  [NetworkName.skCryptoBlades]: {
    pageIcon: require("./images/skale-large.png"),
    carouselIcon: require("./images/skale-large.png"),
  },
  [NetworkName.skCryptoColosseum]: {
    pageIcon: require("./images/skale-large.png"),
    carouselIcon: require("./images/skale-large.png"),
  },
  [NetworkName.skEuropa]: {
    pageIcon: require("./images/europa-large.png"),
    carouselIcon: require("./images/europa-large.png"),
  },
  [NetworkName.skExorde]: {
    pageIcon: require("./images/exorde-large.png"),
    carouselIcon: require("./images/exorde-large.png"),
  },
  [NetworkName.skNebula]: {
    pageIcon: require("./images/nebula-large.png"),
    carouselIcon: require("./images/nebula-large.png"),
  },
  [NetworkName.skRezor]: {
    pageIcon: require("./images/razor-large.png"),
    carouselIcon: require("./images/razor-large.png"),
  },
  [NetworkName.skTitan]: {
    pageIcon: require("./images/razor-large.png"),
    carouselIcon: require("./images/razor-large.png"),
  },
};

export default icons;
