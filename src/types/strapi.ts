export interface StrapiIconFormatType {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
export interface StrapiColorsType {
  dominant: string;
  palette: string[];
}
export interface StrapiIconType {
  data: {
    id: number;
    attributes: {
      name: string;
      width: number;
      height: number;
      url: string;
      formats: null | {
        thumbnail?: StrapiIconFormatType;
        medium?: StrapiIconFormatType;
        small?: StrapiIconFormatType;
        large?: StrapiIconFormatType;
      };
      colors: StrapiColorsType;
    };
  };
}
export interface StrapiNetworkType {
  name: string;
  path: string;
  pageTitle: string;
  pageDescription: string;
  aboutEnkrypt: string;
  networkInfo: string;
  aboutEnkryptTitle: string;
  networkInfoTitle: string;
  mainTitle: string;
  icon: StrapiIconType;
}

export interface StrapiResponseType {
  data: {
    id: number;
    attributes: StrapiNetworkType;
  }[];
}
