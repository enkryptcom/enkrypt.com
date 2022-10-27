import { NetworkName } from "./networks";

export interface InnerPage {
  path: NetworkName;
  name: string;
  title: string;
  blocks: InnerPageBlock[];
  pageTitle: string;
  pageDescription: string;
}

interface InnerPageBlock {
  title: string;
  paragraps: string[];
}
