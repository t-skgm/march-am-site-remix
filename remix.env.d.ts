/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare var process: {
  env: {
    NODE_ENV: "development" | "production";
    SESSION_SECRET: string | undefined;
  };
};
