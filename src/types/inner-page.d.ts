import { NetworkName } from "./networks";

export interface InnerPage {
  path: NetworkName;
  color: string;
  name: string;
  title: string;
  blocks: InnerPageBlock[];
  pageTitle: string;
  pageDescription: string;
}

interface InnerPageBlock {
  title: string;
  paragraph: string;
}
