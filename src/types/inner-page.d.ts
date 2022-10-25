export interface InnerPage {
  path: string;
  title: string;
  blocks: InnerPageBlock[];
  pageTitle: string;
  pageDescription: string;
}

interface InnerPageBlock {
  title: string;
  paragraps: string[];
}
