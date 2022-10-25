import { InnerPage } from "./types/inner-page";

const networks: InnerPage[] = [
  {
    path: "polygon",
    icon: require("@/assets/internal/polygon.network.svg"),
    title: "Polygon wallet",
    pageTitle: "Enkrypt: Polygon Wallet",
    pageDescription:
      "Enkrypt is an Ethereum wallet that supports all EVM compatible chains. It currently has native wallet support for Polygon",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is an Ethereum wallet that supports all EVM compatible chains. It currently has native wallet support for Polygon",
        ],
      },
      {
        title: "What's Polygon?",
        paragraps: [
          "Polygon Network is a blockchain scalability platform that addresses the challenges (high fees, low transactions per second, etc) faced by Ethereum. Using Polygon, other decentralized networks or apps (dApps) that are EVM compatible can make use of the Ethereum ecosystem without dealing with high gas (transactional fees). The Polygon network aims to scale the Ethereum blockchain, making it usable for all. $MATIC is Polygon Network's native token.",
          '<a href="https://polygon.technology/" target="_blank" rel="nofollow">https://polygon.technology/</a>',
        ],
      },
    ],
  },
  {
    path: "ethereum",
    icon: require("@/assets/internal/polygon.network.svg"),
    title: "Ethereum wallet",
    pageTitle: "Enkrypt: Ethereum Wallet",
    pageDescription:
      "Enkrypt is an Ethereum wallet that supports all EVM compatible chains. It currently has native wallet support for Ethereum",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is an Ethereum wallet that supports all EVM compatible chains. It currently has native wallet support for Ethereum",
        ],
      },
      {
        title: "What's Ethereum?",
        paragraps: [
          "In 2012, at age 17, Vitalik Buterin was introduced to Bitcoin. By the time he was 20, he had created Ethereum, which quickly became a flourishing ecosystem of cryptocurrency enthusiasts. Ethereum is a censorship resistant and programmable blockchain-based smart contract platform, allowing users to build and deploy decentralized applications (dApps) on its network. Ethereum continues to evolve and is the home of NFTs, DeFi, and ERC 20 tokens.",
          "Ethereum aims to be the world's first decentralized super computer, introducing a more private internet, and banking for everyone on a peer to peer network. $ETH is Ethereum’s native token.",
          '<a href="https://ethereum.org/" target="_blank" rel="nofollow">https://ethereum.org</a>',
        ],
      },
    ],
  },
];

export default networks;
