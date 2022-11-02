export enum NetworkName {
  ethereum = "ethereum",
  polygon = "polygon",
  acala = "acala",
  moonriver = "moonriver",
  astar = "astar",
  polkadot = "polkadot",
  shiden = "shiden",
  okc = "okc",
  kusama = "kusama",
  moonbeam = "moonbeam",
  bnb = "bnb",
  karura = "karura",
  bifrost = "bifrost",
  canto = "canto",
  optimism = "optimism",
}

export interface CarouselListItem {
  name: string;
  class: NetworkName;
  image: any;
  path: string;
}
