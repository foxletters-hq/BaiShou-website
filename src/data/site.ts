export const REPO_URL = "https://github.com/foxletters-hq/BaiShou-Next";
export const CONTRIBUTORS_URL =
  "https://github.com/foxletters-hq/BaiShou-Next/graphs/contributors";
export const BILIBILI_URL = "https://space.bilibili.com/18187585";

/** foxletters.com / 白守软件分享 的网站备案号，须挂工信部查询入口 */
export const ICP_FILING_NUMBER = "豫ICP备2024102539号-3";
export const ICP_FILING_URL = "https://beian.miit.gov.cn/";

/** 公安联网备案号，须挂全国互联网安全管理服务平台查询入口 */
export const MPS_FILING_NUMBER = "豫公网安备41010502007985号";
export const MPS_FILING_CODE = "41010502007985";
export const MPS_FILING_URL = `https://beian.mps.gov.cn/#/query/webSearch?code=${MPS_FILING_CODE}`;

/** CI 发版后更新的各端最新下载清单（须用 raw.githubusercontent.com，github.com/raw 无 CORS） */
export const RELEASE_CHANNEL_MANIFEST_URL =
  "https://raw.githubusercontent.com/foxletters-hq/BaiShou-Next/main/releases/channel.json";

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
  return version.startsWith("v") ? version : `v${version}`;
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
      cache: "no-store",
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

export const QQ_GROUPS = [
  {
    id: "group1" as const,
    number: "234030411",
    qrImage: "/assets/images/community/qq-group-1.png",
  },
  {
    id: "group2" as const,
    number: "618635637",
    qrImage: "/assets/images/community/qq-group-2.png",
  },
] as const;

export interface TeamMember {
  id: "anson";
  name: string;
  github: string;
  avatar: string;
  badge?: string;
}

export const FOUNDER: TeamMember = {
  id: "anson",
  name: "Anson",
  github: "https://github.com/Anson-Trio",
  avatar: "https://avatars.githubusercontent.com/u/107763915?v=4",
  badge: "🦊",
};

export const CORE_DEVELOPERS: TeamMember[] = [FOUNDER];
export const COLLABORATORS: TeamMember[] = [];

export interface Contributor {
  login: string;
  name?: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export const FALLBACK_CONTRIBUTORS: Contributor[] = [
  {
    login: "Anson-Trio",
    avatar_url: "https://avatars.githubusercontent.com/u/107763915?v=4",
    html_url: "https://github.com/Anson-Trio",
    contributions: 1866,
  },
  {
    login: "Ratman463",
    avatar_url: "https://avatars.githubusercontent.com/u/187963490?v=4",
    html_url: "https://github.com/Ratman463",
    contributions: 22,
  },
  {
    login: "ctnilpp",
    avatar_url: "https://avatars.githubusercontent.com/u/49940531?v=4",
    html_url: "https://github.com/ctnilpp",
    contributions: 2,
  },
  {
    login: "david082321",
    name: "david082321",
    avatar_url: "https://avatars.githubusercontent.com/u/7046617?v=4",
    html_url: "https://github.com/david082321",
    contributions: 1,
  },
  {
    login: "Magnemomet",
    name: "mite",
    avatar_url: "https://avatars.githubusercontent.com/u/269363200?v=4",
    html_url: "https://github.com/Magnemomet",
    contributions: 1,
  },
];

let cachedContributorsPromise: Promise<Contributor[]> | null = null;

export async function getContributors(): Promise<Contributor[]> {
  cachedContributorsPromise ??= fetchGitHubContributors();
  return cachedContributorsPromise;
}

async function fetchGitHubContributors(): Promise<Contributor[]> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const repos = [
      "https://api.github.com/repos/foxletters-hq/BaiShou-Next/contributors?per_page=100",
      "https://api.github.com/repos/foxletters-hq/BaiShou-website/contributors?per_page=100",
    ];
    const results = await Promise.allSettled(
      repos.map((url) =>
        fetch(url, {
          signal: controller.signal,
          headers: {
            "User-Agent": "BaiShou-Website-Build",
            Accept: "application/vnd.github.v3+json",
          },
        }).then((res) => (res.ok ? res.json() : [])),
      ),
    );
    clearTimeout(timer);

    const map = new Map<string, Contributor>();

    // 填入预设成员兜底
    for (const c of FALLBACK_CONTRIBUTORS) {
      map.set(c.login.toLowerCase(), { ...c });
    }

    for (const res of results) {
      if (res.status === "fulfilled" && Array.isArray(res.value)) {
        for (const item of res.value) {
          if (
            !item?.login ||
            item.login.endsWith("[bot]") ||
            item.type === "Bot" ||
            item.login.toLowerCase() === "alice"
          )
            continue;
          const key = item.login.toLowerCase();
          const existing = map.get(key);
          if (existing) {
            existing.contributions += item.contributions || 0;
            if (
              item.avatar_url &&
              !existing.avatar_url.startsWith("/assets/")
            ) {
              existing.avatar_url = item.avatar_url;
            }
          } else {
            map.set(key, {
              login: item.login,
              avatar_url:
                item.avatar_url || `https://github.com/${item.login}.png`,
              html_url: item.html_url || `https://github.com/${item.login}`,
              contributions: item.contributions || 1,
            });
          }
        }
      }
    }

    return Array.from(map.values()).sort(
      (a, b) => b.contributions - a.contributions,
    );
  } catch {
    return FALLBACK_CONTRIBUTORS;
  }
}

export const FEATURE_IDS = [
  "diary",
  "graph",
  "agent",
  "knowledge",
  "rag",
  "sync",
] as const;

export const PROBLEM_IDS = ["memory", "notes", "scattered", "locale"] as const;
export const PRINCIPLE_IDS = ["local", "open", "ai", "official"] as const;
export const VISION_COMPARE_IDS = ["notes", "chat"] as const;
export const FAQ_IDS = [
  "free",
  "privacy",
  "platform",
  "diff",
  "model",
  "migrate",
] as const;

export const NAV_SECTION_IDS = [
  "problem",
  "features",
  "vision",
  "principles",
  "people",
] as const;

/** 跳转到独立二级页面（非首页锚点）的导航项 */
export const ROUTE_NAV_IDS = [] as const;

/** 首页 snap 分屏导航点（不含独立页面） */
export const SNAP_SECTION_IDS = ["hero", ...NAV_SECTION_IDS] as const;

/** 根据导航项 id 解析链接地址 */
export function navHref(id: string): string {
  return (ROUTE_NAV_IDS as readonly string[]).includes(id)
    ? `/${id}`
    : `/#${id}`;
}
