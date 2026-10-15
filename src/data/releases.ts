export const REPO_URL = 'https://github.com/foxletters-hq/BaiShou-Next';

export const RELEASE_CHANNEL_MANIFEST_URL =
  'https://raw.githubusercontent.com/foxletters-hq/BaiShou-Next/main/releases/channel.json';

export const DOWNLOAD_URLS = {
  windows: `${REPO_URL}/releases`,
  android: `${REPO_URL}/releases`,
} as const;

export interface ReleaseChannelPlatform {
  version?: string;
  downloadUrl?: string;
}

export interface ReleaseChannelManifest {
  android?: ReleaseChannelPlatform;
  windows?: ReleaseChannelPlatform;
}

export interface ResolvedDownloadEntry {
  url: string;
  version?: string;
}

export interface ResolvedDownloads {
  android: ResolvedDownloadEntry;
  windows: ResolvedDownloadEntry;
}

export function formatReleaseVersion(version?: string): string | undefined {
  if (!version) return undefined;
  return version.startsWith('v') ? version : `v${version}`;
}

const FALLBACK_DOWNLOADS: ResolvedDownloads = {
  android: { url: DOWNLOAD_URLS.android },
  windows: { url: DOWNLOAD_URLS.windows },
};

/** Node fetch / undici 默认等响应头 300s；国内 VPS 访问 GitHub 经常踩中，构建会假死一整页 */
const MANIFEST_FETCH_TIMEOUT_MS = 8_000;

let cachedDefaultDownloads: Promise<ResolvedDownloads> | null = null;

export async function resolveReleaseDownloads(
  manifestUrl: string = RELEASE_CHANNEL_MANIFEST_URL,
): Promise<ResolvedDownloads> {
  if (manifestUrl === RELEASE_CHANNEL_MANIFEST_URL) {
    cachedDefaultDownloads ??= fetchReleaseDownloads(manifestUrl);
    return cachedDefaultDownloads;
  }
  return fetchReleaseDownloads(manifestUrl);
}

async function fetchReleaseDownloads(
  manifestUrl: string,
): Promise<ResolvedDownloads> {
  try {
    const res = await fetch(manifestUrl, {
      cache: 'no-store',
      signal: AbortSignal.timeout(MANIFEST_FETCH_TIMEOUT_MS),
    });
    if (!res.ok) return FALLBACK_DOWNLOADS;
    const data = (await res.json()) as ReleaseChannelManifest;
    return {
      android: {
        url: data.android?.downloadUrl ?? DOWNLOAD_URLS.android,
        version: data.android?.version,
      },
      windows: {
        url: data.windows?.downloadUrl ?? DOWNLOAD_URLS.windows,
        version: data.windows?.version,
      },
    };
  } catch {
    return FALLBACK_DOWNLOADS;
  }
}
