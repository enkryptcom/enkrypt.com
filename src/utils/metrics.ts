import { init, track, Types } from "@amplitude/analytics-browser";

class Metrics {
  constructor() {
    this.init();
  }
  private init() {
    init("apikey", {
      instanceName: import.meta.env.PROD
        ? "enkrypt-extension"
        : "enkrypt-extension-dev",
      optOut: false,
      serverUrl: import.meta.env.PROD
        ? "https://analytics-enkryptweb.mewwallet.dev/record"
        : "https://analytics-enkryptweb-dev.mewwallet.dev/record",
      trackingOptions: {
        ipAddress: false,
      },
      useBatch: true,
      identityStorage: "none",
      logLevel: Types.LogLevel.None,
      defaultTracking: {
        formInteractions: false,
        pageViews: true,
        sessions: true,
      },
    });
  }
  track(event: string, options: Record<string, unknown>) {
    track(event, options);
  }
}

const metrics = new Metrics();

const trackPageVisit = (path: string) => {
  metrics.track("page_visit", { path });
};

const trackDownloadClick = (browser: string) => {
  metrics.track("download_click", { browser });
};

export { trackDownloadClick, trackPageVisit };
