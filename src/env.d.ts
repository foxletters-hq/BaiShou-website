/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_UMAMI_SCRIPT_URL?: string;
  readonly PUBLIC_UMAMI_URL?: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
  readonly PUBLIC_UMAMI_DISABLED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
