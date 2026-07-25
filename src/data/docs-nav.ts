import type { Locale } from '../i18n';

export type DocsLocale = Locale;

export interface DocsNavItem {
  slug: string;
  label: Record<DocsLocale, string>;
}

export interface DocsNavGroup {
  id: string;
  label: Record<DocsLocale, string>;
  items: DocsNavItem[];
}

/** slug 相对路径，不含 locale / docs 前缀，例如 getting-started/install */
export const DOCS_SIDEBAR: DocsNavGroup[] = [
  {
    id: 'getting-started',
    label: {
      'zh-CN': '入门',
      'zh-TW': '入門',
      en: 'Getting started',
      ja: 'はじめに',
    },
    items: [
      {
        slug: 'getting-started/what-is-baishou',
        label: {
          'zh-CN': '白守是什么',
          'zh-TW': '白守是什麼',
          en: 'What is BaiShou',
          ja: '白守とは',
        },
      },
      {
        slug: 'getting-started/install',
        label: {
          'zh-CN': '安装与平台',
          'zh-TW': '安裝與平台',
          en: 'Install & platforms',
          ja: 'インストールと対応環境',
        },
      },
      {
        slug: 'getting-started/first-launch',
        label: {
          'zh-CN': '首次启动',
          'zh-TW': '首次啟動',
          en: 'First launch',
          ja: '初回起動',
        },
      },
    ],
  },
  {
    id: 'basics',
    label: {
      'zh-CN': '基础使用',
      'zh-TW': '基礎使用',
      en: 'Basics',
      ja: '基本操作',
    },
    items: [
      {
        slug: 'basics/diary',
        label: {
          'zh-CN': '写日记',
          'zh-TW': '寫日記',
          en: 'Write diary',
          ja: '日記を書く',
        },
      },
      {
        slug: 'basics/memories',
        label: {
          'zh-CN': '回忆与共同回忆',
          'zh-TW': '回憶與共同回憶',
          en: 'Memories & shared recall',
          ja: '回憶と共同回憶',
        },
      },
      {
        slug: 'basics/companions',
        label: {
          'zh-CN': 'AI 伙伴与对话',
          'zh-TW': 'AI 夥伴與對話',
          en: 'AI companions & chat',
          ja: 'AI パートナーと会話',
        },
      },
      {
        slug: 'basics/latte',
        label: {
          'zh-CN': '看板娘 Latte',
          'zh-TW': '看板娘 Latte',
          en: 'Mascot Latte',
          ja: '看板娘 Latte',
        },
      },
    ],
  },
  {
    id: 'configure',
    label: {
      'zh-CN': '配置指南',
      'zh-TW': '設定指南',
      en: 'Configuration',
      ja: '設定ガイド',
    },
    items: [
      {
        slug: 'configure/ai-providers',
        label: {
          'zh-CN': '配置 AI 供应商与模型',
          'zh-TW': '設定 AI 供應商與模型',
          en: 'AI providers & models',
          ja: 'AI プロバイダーとモデル',
        },
      },
      {
        slug: 'configure/rag',
        label: {
          'zh-CN': 'RAG 记忆管理',
          'zh-TW': 'RAG 記憶管理',
          en: 'RAG memory',
          ja: 'RAG 記憶管理',
        },
      },
      {
        slug: 'configure/workspace',
        label: {
          'zh-CN': '工作区与数据位置',
          'zh-TW': '工作區與資料位置',
          en: 'Workspaces & data location',
          ja: 'ワークスペースとデータの場所',
        },
      },
    ],
  },
  {
    id: 'sync',
    label: {
      'zh-CN': '同步与备份',
      'zh-TW': '同步與備份',
      en: 'Sync & backup',
      ja: '同期とバックアップ',
    },
    items: [
      {
        slug: 'sync/overview',
        label: {
          'zh-CN': '三种方式怎么选',
          'zh-TW': '三種方式怎麼選',
          en: 'Which method to use',
          ja: 'どれを使うべきか',
        },
      },
      {
        slug: 'sync/incremental',
        label: {
          'zh-CN': '增量同步',
          'zh-TW': '增量同步',
          en: 'Incremental sync',
          ja: '増分同期',
        },
      },
      {
        slug: 'sync/backup',
        label: {
          'zh-CN': '备份与恢复',
          'zh-TW': '備份與還原',
          en: 'Backup & restore',
          ja: 'バックアップと復元',
        },
      },
    ],
  },
  {
    id: 'migrate',
    label: {
      'zh-CN': '迁移',
      'zh-TW': '遷移',
      en: 'Migration',
      ja: '移行',
    },
    items: [
      {
        slug: 'migrate/from-legacy',
        label: {
          'zh-CN': '从旧版白守迁移',
          'zh-TW': '從舊版白守遷移',
          en: 'Migrate from legacy BaiShou',
          ja: '旧版白守からの移行',
        },
      },
    ],
  },
  {
    id: 'advanced',
    label: {
      'zh-CN': '进阶',
      'zh-TW': '進階',
      en: 'Advanced',
      ja: '応用',
    },
    items: [
      {
        slug: 'advanced/tools-search',
        label: {
          'zh-CN': '网络搜索与工具',
          'zh-TW': '網路搜尋與工具',
          en: 'Web search & tools',
          ja: 'ウェブ検索とツール',
        },
      },
      {
        slug: 'advanced/mcp',
        label: {
          'zh-CN': 'MCP 服务',
          'zh-TW': 'MCP 服務',
          en: 'MCP server',
          ja: 'MCP サーバー',
        },
      },
      {
        slug: 'advanced/desktop',
        label: {
          'zh-CN': '桌面端专属',
          'zh-TW': '桌面端專屬',
          en: 'Desktop-only features',
          ja: 'デスクトップ専用機能',
        },
      },
    ],
  },
  {
    id: 'reference',
    label: {
      'zh-CN': '参考',
      'zh-TW': '參考',
      en: 'Reference',
      ja: 'リファレンス',
    },
    items: [
      {
        slug: 'reference/privacy',
        label: {
          'zh-CN': '隐私与开源',
          'zh-TW': '隱私與開源',
          en: 'Privacy & open source',
          ja: 'プライバシーとオープンソース',
        },
      },
      {
        slug: 'reference/platforms',
        label: {
          'zh-CN': '桌面与移动差异',
          'zh-TW': '桌面與行動差異',
          en: 'Desktop vs mobile',
          ja: 'デスクトップとモバイルの違い',
        },
      },
      {
        slug: 'reference/faq',
        label: {
          'zh-CN': '常见问题',
          'zh-TW': '常見問題',
          en: 'FAQ',
          ja: 'よくある質問',
        },
      },
    ],
  },
];

export const DOCS_LOCALES: DocsLocale[] = ['zh-CN', 'zh-TW', 'en', 'ja'];

export const DOCS_LOCALE_PREFIX: Record<DocsLocale, string> = {
  'zh-CN': '',
  'zh-TW': '/zh-tw',
  en: '/en',
  ja: '/ja',
};

export function docsHref(locale: DocsLocale, slug = ''): string {
  const prefix = DOCS_LOCALE_PREFIX[locale];
  if (!slug) return `${prefix}/docs/`;
  return `${prefix}/docs/${slug}/`;
}

/** content collection id，例如 docs/getting-started/install 或 en/docs/... */
export function docsEntryId(locale: DocsLocale, slug: string): string {
  if (locale === 'zh-CN') return `docs/${slug}`;
  if (locale === 'zh-TW') return `zh-tw/docs/${slug}`;
  return `${locale}/docs/${slug}`;
}

export function allDocSlugs(): string[] {
  return DOCS_SIDEBAR.flatMap((g) => g.items.map((i) => i.slug));
}

export const DOCS_UI = {
  toc: { 'zh-CN': '本页内容', 'zh-TW': '本頁內容', en: 'On this page', ja: '目次' },
  menu: { 'zh-CN': '文档目录', 'zh-TW': '文件目錄', en: 'Docs menu', ja: 'ドキュメントメニュー' },
  home: { 'zh-CN': '文档首页', 'zh-TW': '文件首頁', en: 'Docs home', ja: 'ドキュメントホーム' },
  prev: { 'zh-CN': '上一篇', 'zh-TW': '上一篇', en: 'Previous', ja: '前へ' },
  next: { 'zh-CN': '下一篇', 'zh-TW': '下一篇', en: 'Next', ja: '次へ' },
  backSite: { 'zh-CN': '返回官网', 'zh-TW': '返回官網', en: 'Website', ja: '公式サイト' },
} as const;
