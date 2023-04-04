import { NetworkName } from "@/types/networks";
import networksJSON from "./networks.json";

const icons: Record<
  string,
  {
    pageIcon: any;
    carouselIcon: any;
  }
> = {};

export const getStrapiURL = (url: string) => `https://strapi.mewapi.io${url}`;
networksJSON.data.forEach((item) => {
  icons[item.attributes.path] = {
    carouselIcon: item.attributes.icon.data.attributes.formats?.thumbnail
      ? getStrapiURL(
          item.attributes.icon.data.attributes.formats?.thumbnail.url
        )
      : getStrapiURL(item.attributes.icon.data.attributes.url),
    pageIcon: item.attributes.icon.data.attributes.formats?.large
      ? getStrapiURL(item.attributes.icon.data.attributes.formats?.large.url)
      : getStrapiURL(item.attributes.icon.data.attributes.url),
  };
});

export default icons as Record<
  NetworkName,
  {
    pageIcon: any;
    carouselIcon: any;
  }
>;
