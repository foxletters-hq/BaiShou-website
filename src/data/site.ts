export const REPO_URL = 'https://github.com/foxletters-hq/BaiShou-Next';
export const CONTRIBUTORS_URL = 'https://github.com/foxletters-hq/BaiShou-Next/graphs/contributors';
export const BILIBILI_URL = 'https://space.bilibili.com/18187585';
export const GITHUB_ICON = '/assets/images/github-icon.png';
export const COMMUNITY_ICON = '/assets/images/community-icon.png';

export const DOWNLOAD_URLS = {
  windows:
    'https://github.com/foxletters-hq/BaiShou-Next/releases/download/v1.1.0/BaiShou-v1.1.8-Windows-Setup.exe',
  android:
    'https://github.com/foxletters-hq/BaiShou-Next/releases/download/v1.1.0/BaiShou-v1.1.28-Android.apk',
} as const;

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

export const NAV_SECTION_IDS = [
  'problem',
  'features',
  'vision',
  'principles',
  'people',
] as const;

export const SNAP_SECTION_IDS = [
  'hero',
  ...NAV_SECTION_IDS,
] as const;
