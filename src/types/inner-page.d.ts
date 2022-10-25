export interface InnerPage {
  path: string;
  icon: string;
  title: string;
  blocks: InnerPageBlock[];
}

interface InnerPageBlock {
  title: string;
  paragraps: string[];
}
