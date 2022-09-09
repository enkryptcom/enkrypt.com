import { BROWSER_NAMES } from "@/configs";

export const detect = (): string => {
  const userAgent = navigator.userAgent;

  if (userAgent.match(/Opera|OPR/i)) {
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
