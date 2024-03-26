import { BROWSER_NAMES, EXTENSION_LINKS } from "@/configs";

export const detect = (): string => {
  const userAgent = navigator.userAgent;

  if (userAgent.match(/^((?!chrome|android).)*safari/i)) {
    return BROWSER_NAMES.safari;
  } else if (userAgent.match(/Opera|OPR/i)) {
    return BROWSER_NAMES.opera;
  } else if (userAgent.match(/edg/i)) {
    return BROWSER_NAMES.edge;
  } else if (userAgent.match(/chrome|chromium|crios/i)) {
    return BROWSER_NAMES.chrome;
  } else if (userAgent.match(/firefox|fxios/i)) {
    return BROWSER_NAMES.firefox;
  } else {
    return "";
  }
};

export const getDownloadLink = (): string => {
  const browser = detect();
  switch (browser) {
    case BROWSER_NAMES.chrome:
      return EXTENSION_LINKS.chrome;
    case BROWSER_NAMES.edge:
      return EXTENSION_LINKS.edge;
    case BROWSER_NAMES.firefox:
      return EXTENSION_LINKS.firefox;
    case BROWSER_NAMES.opera:
      return EXTENSION_LINKS.opera;
    case BROWSER_NAMES.safari:
      return EXTENSION_LINKS.safari;
    default:
      return "#downloads";
  }
};
