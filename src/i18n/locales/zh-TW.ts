import type { Messages } from '../types';

const zhTW: Messages = {
  meta: {
    title: '白守 · BaiShou',
    description:
      '本地優先、AI 原生的個人知識庫與長期記憶系統，支援 AI 夥伴、RAG 檢索與多端同步。',
  },
  brand: { name: '白守', suffix: ' · Foxletters' },
  nav: {
    problem: '問題',
    features: '功能',
    vision: '知識庫',
    principles: '理念',
    people: '成員',
  },
  a11y: {
    mainNav: '頁面導覽',
    snapNav: '頁面分屏導覽',
    footerNav: '頁尾導覽',
    themeToggle: '切換淺色 / 深色主題',
    langSelect: '選擇語言',
    avatar: '的頭像',
  },
  hero: {
    eyebrow: 'BaiShou',
    title: '白守',
    tagline: '以純白誓約，守護彼此一生',
    positioning: '本地優先、AI 原生的個人知識庫與長期記憶系統。',
    desc: '先從 AI 伴侶使用者的日記與長期記憶切入，把日記、AI 夥伴與多端同步放進同一個個人記憶空間。知識庫能力正在開發中，核心能力保持開放，資料留在你的裝置上。',
    ctaGithub: '前往 GitHub',
    ctaCommunity: '加入社群',
    ctaBilibili: '哔哩哔哩',
    iconAlt: '白守應用程式圖示',
  },
  problem: {
    eyebrow: 'Problem',
    title: 'AI 時代，長期記憶還沒有被真正解決',
    lead: '使用者開始把日記、資料與對話交給軟體，但現有工具很少把長期記憶、AI 夥伴與留在裝置上的資料放在一起統籌。',
    items: {
      memory: {
        title: 'AI 缺少可靠長期記憶',
        desc: '許多 AI 產品依賴雲端會話，記憶受限於上下文與平台策略。使用者需要的不是一次性聊天視窗，而是能長期保存生活與回憶的系統。',
      },
      notes: {
        title: '傳統筆記不夠 AI 原生',
        desc: 'Notion、Obsidian 等工具擅長整理資料，但 AI 往往不是底層設計。想讓 AI 讀懂自己的筆記與歷史，常需複雜設定與外掛維護。',
      },
      scattered: {
        title: '資料與記憶彼此分散',
        desc: '檔案在雲端硬碟、筆記在筆記軟體、日記在別處、對話又在模型平台。資料分散後，AI 難以形成完整上下文。',
      },
      locale: {
        title: '中文場景缺少合適選擇',
        desc: '海外知識庫與 AI 工具對華語使用者存在存取、付費與資料位置等門檻。需要本地優先、多端可用、可接入國產模型的方案。',
      },
    },
  },
  features: {
    eyebrow: 'Features',
    title: '核心能力',
    lead: '日記、AI 夥伴與同步能力已經可用；知識庫正在開發，將逐步與現有記憶體系打通。',
    devBadge: '開發中',
    items: {
      diary: {
        title: '日記與回憶',
        desc: '記錄每天發生的事，透過週記、月記與年度總結形成長期記憶。',
      },
      companion: {
        title: 'AI 夥伴',
        desc: '建立長期陪伴自己的 AI 夥伴，在個人記憶基礎上持續對話與理解。',
      },
      knowledge: {
        title: '檔案知識庫',
        desc: '管理 PDF、DOC、Markdown、圖片等資料，按知識庫分類整理。（正在開發）',
        badge: '開發中',
      },
      rag: {
        title: 'RAG 檢索',
        desc: '全文檢索與向量檢索結合，讓 AI 精準找到相關日記、檔案與歷史記錄。',
      },
      sync: {
        title: '多端同步',
        desc: '桌面端與行動端同步，支援官方託管，也保留自建 S3 / WebDAV 能力。',
      },
      local: {
        title: '本地優先',
        desc: '核心資料預設在本地，可匯入匯出，不把記憶鎖死在平台裡。',
      },
    },
  },
  vision: {
    eyebrow: 'Vision',
    title: '我們在構建 AI 原生的個人知識庫',
    devBadge: '開發中',
    lead: '日記與 AI 夥伴能力已經可用，知識庫是白守的下一階段——把檔案、學習資料與生活記憶放進同一個能被 AI 讀懂的空間。',
    whyTitle: '為什麼要做知識庫？',
    whyP1:
      '使用者的 PDF、課程筆記、工作文件和生活日記不該永遠分散在不同軟體裡。白守希望成為<strong>個人長期資料的統一入口</strong>：你沉澱得越久，AI 越理解你的學習軌跡、生活脈絡與思考方式。',
    whyP2:
      '這不是把雲端硬碟換個皮膚，而是讓資料真正進入 AI 的工作流——可檢索、可問答、可標註來源、可長期陪伴。',
    compare: {
      notes: {
        title: '與傳統筆記軟體不同',
        desc: '筆記工具解決的是「記錄與整理」，白守要解決的是「個人資料如何被 AI 理解並長期使用」。AI 夥伴、RAG 檢索與長期記憶是底層設計，不是後裝外掛。',
      },
      chat: {
        title: '與傳統對話軟體不同',
        desc: '對話產品擅長即時問答與陪伴，但記憶往往留在平台側。白守把 AI 建立在使用者自己的本地日記、檔案與可遷移資料之上，而不是一次性的聊天視窗。',
      },
    },
    ambitionTitle: '我們的願景',
    ambitionP1:
      '先從 AI 伴侶使用者的日記與長期記憶驗證需求，再擴展到知識工作者、學生與長期學習者。白守希望成為<strong>華語場景裡本地優先、AI 原生、可多端同步</strong>的個人知識庫——資料可匯出遷移，讓使用者能持續掌握自己的記憶與資料。',
  },
  principles: {
    eyebrow: 'Principles',
    title: '本地優先，資料開放',
    lead: '白守不是要取代所有工具，而是為重視個人資料與長期記憶的使用者，提供一個 AI 原生、可多端同步的個人知識庫。',
    items: {
      local: {
        title: '本地優先',
        desc: '核心資料預設在本地，支援匯入匯出，不把記憶鎖死在平台裡。',
      },
      open: {
        title: '核心能力開放',
        desc: '本地日記、檔案管理、自建同步與自訂模型 API 保持開放，不靠鎖資料收費。',
      },
      ai: {
        title: 'AI 理解你的資料',
        desc: '不是普通雲端硬碟存檔案，而是讓 AI 能檢索、問答、總結你長期沉澱的個人記憶。',
      },
      official: {
        title: '官方服務可選',
        desc: '需要省心時，可選用官方加密同步、備份與 AI 服務；不付費也能繼續擁有與遷移自己的資料。',
      },
    },
  },
  people: {
    founderEyebrow: 'Founder',
    founderTitle: '創辦人',
    founderRole: '創辦人',
    founderBio:
      '技術型獨立開發者，負責白守的產品定義、跨端開發、AI 記憶與同步架構，以及早期社群營運。',
    collabEyebrow: 'Collaborators',
    collabTitle: '協作者',
    collabLeadBefore: '感謝每一位參與白守構建的人。完整貢獻者列表見',
    collabLeadLink: 'GitHub Contributors',
    collabLeadAfter: '。',
    collaborators: {
      ratman: {
        bio: '前端開發，對元件庫和設計有自己的理解，有豐富的從業經驗，提交 PR 品質很高。',
      },
      ctnilpp: {
        bio: '充滿熱情的理想主義者，對新技術上手很快，有獨立鑽研能力。',
      },
    },
  },
  footer: {
    bilibili: '嗶哩嗶哩',
    joinCommunity: '加入社群',
  },
  community: {
    eyebrow: 'Community',
    title: '加入社群',
    lead: '掃一掃二維碼，加入 QQ 群聊，與白守用戶和開發者一起交流。',
    groupIdLabel: '群號',
    scanHint: '掃一掃二維碼，加入群聊',
    closeAria: '關閉社群彈窗',
    groups: {
      group1: {
        name: '白守1群 早睡早起',
        qrAlt: '白守1群 QQ 群二維碼',
      },
      group2: {
        name: '白守2群 好好吃飯',
        qrAlt: '白守2群 QQ 群二維碼',
      },
    },
  },
  download: {
    button: '下載',
    title: '下載白守',
    lead: '選擇你的平台，開始使用白守。',
    windows: 'Windows 版',
    android: 'Android 版',
    closeAria: '關閉下載彈窗',
  },
};

export default zhTW;
