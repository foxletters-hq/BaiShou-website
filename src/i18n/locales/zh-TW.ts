import type { Messages } from '../types';

const zhTW: Messages = {
  meta: {
    title: '白守 · BaiShou',
    description:
      '本地優先、圖資料庫驅動的個人知識庫、人生關係圖譜與 AI 智慧體系統。支援長程記憶、Graph RAG 檢索、MCP 生態與多端端對端加密同步。',
  },
  brand: { name: '白守', suffix: ' · Foxletters' },
  nav: {
    home: '官網',
    problem: '痛點',
    features: '能力',
    vision: '圖譜 & Agent',
    principles: '理念',
    people: '團隊',
    docsAction: '文件',
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
    positioning: '本地優先、圖資料庫驅動的個人知識庫與 AI 智慧體系統。',
    desc: '深度融合日常日記、多維檔案知識庫、人生關係圖譜與自主 Agent 智慧體。資料預設 100% 留存本地，內建圖資料庫梳理人物與事件脈絡，支援 MCP 開放協定與多端加密同步。',
    ctaGithub: '前往 GitHub',
    ctaCommunity: '加入社群',
    ctaBilibili: '哔哩哔哩',
    iconAlt: '白守應用程式圖示',
  },
  problem: {
    eyebrow: 'Problem',
    title: 'AI 時代，長期記憶與深層理解未被真正解決',
    lead: '使用者開始把日記、資料與對話交給軟體，但現有工具大多停留在扁平文本檢索，缺少深度的關係圖譜關聯與自主行動的 Agent 能力。',
    items: {
      memory: {
        title: '缺少立體圖譜與深層因果',
        desc: '單次對話受限於上下文視窗，記憶大多是斷裂孤立的片段。使用者需要的不僅是文字記錄，而是能理解人物往來、時間軸與事件因果的立體關係圖譜。',
      },
      notes: {
        title: '傳統筆記不夠 AI 原生',
        desc: 'Notion、Obsidian 等工具擅長單向整理，但 AI 往往只是後置外掛。缺少原生的圖資料庫推理能力與能夠主動幫您整理記憶的 Agent 智慧體。',
      },
      scattered: {
        title: '資料、記憶與工具割裂',
        desc: '日記在日記本、檔案在雲端硬碟、模型對話在平台。缺乏統一的本地中樞將日常記錄、知識沉澱與外部 Agent 工具無縫串聯。',
      },
      locale: {
        title: '中文場景與資料隱私門檻高',
        desc: '海外工具存在網路門檻與資料合規風險。需要一套完全本地優先、多端可用、無縫支援國產大模型與 MCP 協定的可靠解決方案。',
      },
    },
  },
  features: {
    eyebrow: 'Features',
    title: '核心能力',
    lead: '圖資料庫、自主 Agent 智慧體、多維知識庫與端對端同步現已全面上線，築牢個人第二大腦。',
    devBadge: '現已就緒',
    items: {
      diary: {
        title: '日記與長期記憶',
        desc: '記錄每日生活軌跡與隨筆，結合週記、月記與年度復盤，沉澱出可持續相伴的個人專屬回憶錄。',
      },
      graph: {
        title: '人生關係圖譜 (圖資料庫)',
        desc: '內建實體關係圖資料庫，自動抽取並梳理人物、事件與複雜脈絡，把瑣碎記憶凝結為可互動、可推理的立體網絡。',
      },
      agent: {
        title: '自主 AI Agent 智慧體',
        desc: '具備自主決策與工具呼叫能力；支援 MCP 開放協定無縫連接外部工具，深度執行記憶提煉、分析與創作。',
      },
      knowledge: {
        title: '多維檔案知識庫',
        desc: '深度解析 Markdown、PDF、Doc、圖片等多類型資料，讓書籍文獻與工作沉澱真正成為 AI 智慧體的智慧後盾。',
      },
      rag: {
        title: '混合 Graph RAG 檢索',
        desc: '結合全文檢索、高維向量語義搜尋與圖譜多跳關聯推理，跨越時間與格式精準找回所需記憶與答案。',
      },
      sync: {
        title: '本地優先與多端同步',
        desc: '核心資料與資料庫預設安全留存本地裝置；支援官方端對端加密同步，也支援自建 S3 / WebDAV 儲存。',
      },
    },
  },
  vision: {
    eyebrow: 'Vision',
    title: '構建連接圖譜、實體與行動的 AI 原生第二大腦',
    devBadge: '現已就緒',
    lead: '從最初的伴侶日記，演進至圖資料庫關聯與自主 Agent 協作——把檔案、生活記憶與智慧工具放進同一個懂你的個人中樞。',
    whyTitle: '為什麼引入圖資料庫與 Agent 架構？',
    whyP1:
      '傳統向量檢索（Vector RAG）只能按單次語義相似度「拼碎片」，無法看清人生脈絡與複雜因果。白守引入<strong>本地實體關係圖譜</strong>與 <strong>Agent 智慧體架構</strong>：讓 AI 既能一眼理清「某人某事」在時間長河中的前因後果，又能自主呼叫工具協助整理思考。',
    whyP2:
      '這不是把雲端硬碟換個皮膚，而是讓資料與記憶真正進入具備行動力的智慧體工作流程——圖譜可推演、工具可呼叫、記憶可成長。',
    compare: {
      notes: {
        title: '與傳統筆記軟體不同',
        desc: '傳統筆記解決的是「記錄與歸檔」，白守解決的是「個人資料與記憶如何被 AI 智慧體理解並深度推理」。圖資料庫、Graph RAG 檢索與 Agent 工具鏈是原生底層設計，不是後置外掛。',
      },
      chat: {
        title: '與傳統對話軟體不同',
        desc: '普通對話產品擅長即時問答，但記憶往往受限於會話視窗或留在雲端。白守把 AI 建立在使用者自己的本地圖資料庫、私有日記與可完全匯出的資料之上，是真正長久陪伴你的個人智慧體。',
      },
    },
    ambitionTitle: '我們的願景',
    ambitionP1:
      '以高標準的資料隱私與本地優先設計，讓每個人都能輕鬆擁有一個屬於自己的 AI 伴侶與智慧體系統。白守將持續深耕<strong>本地圖資料庫、Agent 工具生態與多端同步</strong>，讓你的數位化記憶與知識真正永遠屬於你自己。',
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
        title: '圖譜與 Agent 深度理解',
        desc: '不是普通雲端硬碟存檔案，而是讓圖資料庫與 AI Agent 能夠檢索、推理、總結你長期沉澱的個人記憶。',
      },
      official: {
        title: '官方服務可選',
        desc: '需要省心時，可選用官方加密同步、備份與 AI 服務；不付費也能繼續擁有與遷移自己的資料。',
      },
    },
  },
  people: {
    coreEyebrow: 'Core Team',
    coreTitle: '核心開發者',
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
    wallEyebrow: 'Contributors Wall',
    wallTitle: '開源協作者牆',
    wallLeadBefore: '程式碼、建議、設計與回饋，每一份貢獻都在讓白守變得更好。在',
    wallLeadLink: 'GitHub 貢獻程式碼',
    wallLeadAfter: '，成為白守協作者。',
    members: {
      anson: {
        role: '創辦人 / 全端架構',
        bio: '技術型獨立開發者，負責白守的產品定義、跨端工程、AI 記憶與同步底層架構。',
      },
      alice: {
        role: '核心開發者 / 架構師',
        bio: '全端核心開發者，深度主導人生關係圖譜（圖資料庫）、自主 Agent 智慧體架構、MCP 生態體系與行動端核心體驗。',
      },
      ratman: {
        role: '核心開發者 / 前端與元件',
        bio: '前端開發，對元件庫和設計有深刻理解，具備豐富的工業級開發經驗，持續輸出高品質 PR。',
      },
      ctnilpp: {
        role: '核心開發者 / 技術調研',
        bio: '充滿熱忱的理想主義者，對新技術上手極快，具備紮實的獨立調研與系統攻關能力。',
      },
    },
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
    github: 'GitHub',
  },
  faq: {
    eyebrow: 'FAQ',
    title: '常見問題',
    lead: '關於白守的問題，你想知道的都在這裡。',
    items: {
      free: {
        q: '白守是免費軟體嗎？',
        a: '白守核心能力完全免費開源。本地日記、檔案管理、自建同步與自訂模型 API 保持開放。官方加密同步、備份與 AI 服務為可選項，不付費也能繼續擁有與遷移自己的資料。',
      },
      privacy: {
        q: '白守的資料存在哪裡？隱私安全嗎？',
        a: '白守採用本地優先架構，核心資料預設儲存在你的裝置上，支援匯入匯出。你可以選擇官方加密同步、自建 S3 / WebDAV 同步，或完全離線使用，資料不會被鎖死在平台裡。',
      },
      platform: {
        q: '白守支援哪些平台？',
        a: '白守目前支援 Windows 和 Android 平台，支援多端同步。你可以從官網下載頁或 GitHub Releases 取得最新版本。',
      },
      diff: {
        q: '白守和 Notion、Obsidian 有什麼區別？',
        a: '筆記工具解決的是記錄與整理，白守解決的是個人資料如何被 AI 理解並長期使用。AI 夥伴、RAG 檢索與長期記憶是白守的底層設計，不是後裝外掛。白守讓 AI 能檢索、問答、總結你長期沉澱的個人記憶。',
      },
      model: {
        q: '白守支援自訂 AI 模型嗎？',
        a: '支援。你可以接入自訂模型 API，包括國產大模型。白守不把 AI 能力鎖死在單一供應商，保持開放與靈活。',
      },
      migrate: {
        q: '我的資料可以遷移出去嗎？',
        a: '可以。白守支援資料匯入匯出，你的日記、檔案與記憶不會被鎖死在平台裡。即使停止使用官方服務，你也能持續擁有與遷移自己的資料。',
      },
    },
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
    lead: '選擇你的平台，開始使用白守',
    windows: 'Windows 版',
    android: 'Android 版',
    closeAria: '關閉下載彈窗',
  },
};

export default zhTW;
