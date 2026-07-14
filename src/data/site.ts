export const REPO_URL = 'https://github.com/foxletters-hq/BaiShou-Next';
export const CONTRIBUTORS_URL = 'https://github.com/foxletters-hq/BaiShou-Next/graphs/contributors';
export const BILIBILI_URL = 'https://space.bilibili.com/18187585';

/** CI 发版后更新的各端最新下载清单（须用 raw.githubusercontent.com，github.com/raw 无 CORS） */
export const RELEASE_CHANNEL_MANIFEST_URL =
  'https://raw.githubusercontent.com/foxletters-hq/BaiShou-Next/main/releases/channel.json';

/** 拉取 channel.json 失败时的兜底：跳转到 Releases 列表 */
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

export async function resolveReleaseDownloads(
  manifestUrl: string = RELEASE_CHANNEL_MANIFEST_URL,
): Promise<ResolvedDownloads> {
  try {
    const res = await fetch(manifestUrl, { cache: 'no-store' });
    if (!res.ok) {
      return {
        android: { url: DOWNLOAD_URLS.android },
        windows: { url: DOWNLOAD_URLS.windows },
      };
    }
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
    return {
      android: { url: DOWNLOAD_URLS.android },
      windows: { url: DOWNLOAD_URLS.windows },
    };
  }
}

export const QQ_GROUPS = [
  {
    id: 'group1' as const,
    number: '234030411',
    qrImage: '/assets/images/community/qq-group-1.png',
  },
  {
    id: 'group2' as const,
    number: '618635637',
    qrImage: '/assets/images/community/qq-group-2.png',
  },
] as const;

export const FOUNDER = {
  name: 'Anson',
  github: 'https://github.com/Anson-Trio',
  avatar: 'https://avatars.githubusercontent.com/u/107763915?v=4',
  badge: '🦊',
};

export const COLLABORATORS = [
  {
    id: 'ratman' as const,
    name: 'Ratman',
    github: 'https://github.com/Ratman463',
    avatar: 'https://avatars.githubusercontent.com/u/187963490?v=4',
    badge: '🧀',
  },
  {
    id: 'ctnilpp' as const,
    name: 'ctnilpp',
    github: 'https://github.com/ctnilpp',
    avatar: 'https://avatars.githubusercontent.com/u/49940531?v=4',
    badge: '👑',
  },
];

export const FEATURE_IDS = [
  'diary',
  'companion',
  'knowledge',
  'rag',
  'sync',
  'local',
] as const;

export const PROBLEM_IDS = ['memory', 'notes', 'scattered', 'locale'] as const;
export const PRINCIPLE_IDS = ['local', 'open', 'ai', 'official'] as const;
export const VISION_COMPARE_IDS = ['notes', 'chat'] as const;
export const FAQ_IDS = ['free', 'privacy', 'platform', 'diff', 'model', 'migrate'] as const;

export const NAV_SECTION_IDS = [
  'problem',
  'features',
  'vision',
  'principles',
  'people',
] as const;

/** 跳转到独立二级页面（非首页锚点）的导航项 */
export const ROUTE_NAV_IDS = ['faq'] as const;

/** 首页 snap 分屏导航点（不含独立页面） */
export const SNAP_SECTION_IDS = [
  'hero',
  ...NAV_SECTION_IDS,
] as const;

/** 根据导航项 id 解析链接地址 */
export function navHref(id: string): string {
  return (ROUTE_NAV_IDS as readonly string[]).includes(id) ? `/${id}` : `/#${id}`;
}
