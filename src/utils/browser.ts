export const detect = (): string => {
  const userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "no";
  }

  return browserName;
};
