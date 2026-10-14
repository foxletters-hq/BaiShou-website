import type { Messages } from '../types';

const zhCN: Messages = {
  meta: {
    title: '白守 · BaiShou',
    description:
      '本地优先、图数据库驱动的个人知识库、人生关系图谱与 AI 智能体系统。支持长程记忆、Graph RAG 检索、MCP 生态与多端端到端加密同步。',
  },
  brand: { name: '白守', suffix: ' · Foxletters' },
  nav: {
    home: '官网',
    problem: '痛点',
    features: '能力',
    vision: '图谱 & Agent',
    principles: '理念',
    people: '团队',
    docsAction: '文档',
  },
  a11y: {
    mainNav: '页面导航',
    snapNav: '页面分屏导航',
    footerNav: '页脚导航',
    themeToggle: '切换浅色 / 深色主题',
    langSelect: '选择语言',
    avatar: '的头像',
  },
  hero: {
    eyebrow: 'BaiShou',
    title: '白守',
    tagline: '以纯白誓约，守护彼此一生',
    positioning: '本地优先、图数据库驱动的个人知识库与 AI 智能体系统。',
    desc: '深度融合日常日记、多维文件知识库、人生关系图谱与自主 Agent 智能体。数据默认 100% 留存本地，内置图数据库梳理人物与事件脉络，支持 MCP 开放协议与多端加密同步。',
    ctaGithub: '前往 GitHub',
    ctaCommunity: '加入社群',
    ctaBilibili: '哔哩哔哩',
    iconAlt: '白守应用图标',
  },
  problem: {
    eyebrow: 'Problem',
    title: 'AI 时代，长期记忆与深层理解未被真正解决',
    lead: '用户开始把日记、资料与对话交给软件，但现有工具大多停留在扁平文本检索，缺少深度的关系图谱关联与自主行动的 Agent 能力。',
    items: {
      memory: {
        title: '缺少立体图谱与深层因果',
        desc: '单次对话受限于上下文窗口，记忆大多是断裂孤立的片段。用户需要的不仅是文字记录，而是能理解人物往来、时间线与事件因果的立体关系图谱。',
      },
      notes: {
        title: '传统笔记不够 AI 原生',
        desc: 'Notion、Obsidian 等工具擅长单向整理，但 AI 往往只是后置外挂。缺少原生的图数据库推理能力与能够主动帮您整理记忆的 Agent 智能体。',
      },
      scattered: {
        title: '资料、记忆与工具割裂',
        desc: '日记在日记本、文件在网盘、模型对话在平台。缺乏统一的本地中枢将日常记录、知识沉淀与外部 Agent 工具无缝串联。',
      },
      locale: {
        title: '中文场景与数据隐私门槛高',
        desc: '海外工具存在网络门槛与数据合规风险。需要一套完全本地优先、多端可用、无缝支持国产大模型与 MCP 协议的可靠解决方案。',
      },
    },
  },
  features: {
    eyebrow: 'Features',
    title: '核心能力',
    lead: '图数据库、自主 Agent 智能体、多维知识库与端到端同步现已全面上线，筑牢个人第二大脑。',
    devBadge: '现已就绪',
    items: {
      diary: {
        title: '日记与长期记忆',
        desc: '记录每日生活轨迹与随笔，结合周记、月记与年度复盘，沉淀出可持续相伴的个人专属回忆录。',
      },
      graph: {
        title: '人生关系图谱 (图数据库)',
        desc: '内置实体关系图数据库，自动抽取并梳理人物、事件与复杂脉络，把琐碎记忆凝结为可交互、可推理的立体网络。',
      },
      agent: {
        title: '自主 AI Agent 智能体',
        desc: '具备自主决策与工具调用能力；支持 MCP 开放协议无缝连接外部工具，深度执行记忆提炼、分析与创作。',
      },
      knowledge: {
        title: '多维文件知识库',
        desc: '深度解析 Markdown、PDF、Doc、图片等多类型资料，让书籍文献与工作沉淀真正成为 AI 智能体的智慧后盾。',
      },
      rag: {
        title: '混合 Graph RAG 检索',
        desc: '结合全文检索、高维向量语义搜索与图谱多跳关联推理，跨越时间与格式精准找回所需记忆与答案。',
      },
      sync: {
        title: '本地优先与多端同步',
        desc: '核心数据与数据库默认安全留存本地设备；支持官方端到端加密同步，也支持自建 S3 / WebDAV 存储。',
      },
    },
  },
  vision: {
    eyebrow: 'Vision',
    title: '构建连接图谱、实体与行动的 AI 原生第二大脑',
    devBadge: '现已就绪',
    lead: '从最初的伴侣日记，演进至图数据库关联与自主 Agent 协作——把文件、生活记忆与智能工具放进同一个懂你的个人中枢。',
    whyTitle: '为什么引入图数据库与 Agent 架构？',
    whyP1:
      '传统向量检索（Vector RAG）只能按单次语义相似度“拼碎片”，无法看清人生脉络与复杂因果。白守引入<strong>本地实体关系图谱</strong>与 <strong>Agent 智能体架构</strong>：让 AI 既能一眼理清“某人某事”在时间长河中的前因后果，又能自主调用工具协助整理思考。',
    whyP2:
      '这不是把网盘换个皮肤，而是让资料与记忆真正进入具备行动力的智能体工作流——图谱可推演、工具可调用、记忆可成长。',
    compare: {
      notes: {
        title: '与传统笔记软件不同',
        desc: '传统笔记解决的是“记录与归档”，白守解决的是“个人资料与记忆如何被 AI 智能体理解并深度推理”。图数据库、Graph RAG 检索与 Agent 工具链是原生底层设计，不是后置插件。',
      },
      chat: {
        title: '与传统对话软件不同',
        desc: '普通对话产品擅长即时问答，但记忆往往受限于会话窗口或留在云端。白守把 AI 建立在用户自己的本地图数据库、私有日记与可完全导出的数据之上，是真正长久陪伴你的个人智能体。',
      },
    },
    ambitionTitle: '我们的愿景',
    ambitionP1:
      '以高标准的数据隐私与本地优先设计，让每个人都能轻松拥有一个属于自己的 AI 伴侣与智能体系统。白守将持续深耕<strong>本地图数据库、Agent 工具生态与多端同步</strong>，让你的数字化记忆与知识真正永远属于你自己。',
  },
  principles: {
    eyebrow: 'Principles',
    title: '本地优先，数据开放',
    lead: '白守不是要替代所有工具，而是为重视个人数据与长期记忆的用户，提供一个 AI 原生、可多端同步的个人知识库。',
    items: {
      local: {
        title: '本地优先',
        desc: '核心数据默认在本地，支持导入导出，不把记忆锁死在平台里。',
      },
      open: {
        title: '核心能力开放',
        desc: '本地日记、文件管理、自建同步与自定义模型 API 保持开放，不靠锁数据收费。',
      },
      ai: {
        title: '图谱与 Agent 深度理解',
        desc: '不是普通云盘存文件，而是让图数据库与 AI Agent 能够检索、推理、总结你长期沉淀的个人记忆。',
      },
      official: {
        title: '官方服务可选',
        desc: '需要省心时，可选用官方加密同步、备份与 AI 服务；不付费也能继续拥有与迁移自己的数据。',
      },
    },
  },
  people: {
    coreEyebrow: 'Core Team',
    coreTitle: '核心开发者',
    founderEyebrow: 'Founder',
    founderTitle: '创始人',
    founderRole: '创始人',
    founderBio:
      '技术型独立开发者，负责白守的产品定义、跨端开发、AI 记忆与同步架构，以及早期社区运营。',
    collabEyebrow: 'Collaborators',
    collabTitle: '协作者',
    collabLeadBefore: '感谢每一位参与白守构建的人。完整贡献者列表见',
    collabLeadLink: 'GitHub Contributors',
    collabLeadAfter: '。',
    wallEyebrow: 'Contributors Wall',
    wallTitle: '开源协作者墙',
    wallLeadBefore: '代码、建议、设计与反馈，每一份贡献都在让白守变得更好。在',
    wallLeadLink: 'GitHub 贡献代码',
    wallLeadAfter: '，成为白守协作者。',
    members: {
      anson: {
        role: '创始人 / 全栈架构',
        bio: '技术型独立开发者，负责白守的产品定义、跨端工程、AI 记忆与同步底层架构。',
      },
      alice: {
        role: '核心开发者 / 架构师',
        bio: '全栈核心开发者，深度主导人生关系图谱（图数据库）、自主 Agent 智能体架构、MCP 生态体系与移动端核心体验。',
      },
      ratman: {
        role: '核心开发者 / 前端与组件',
        bio: '前端开发，对组件库和设计有深刻理解，具备丰富的工业级开发经验，持续输出高质量 PR。',
      },
      ctnilpp: {
        role: '核心开发者 / 技术调研',
        bio: '充满热忱的理想主义者，对新技术上手极快，具备扎实的独立调研与系统攻关能力。',
      },
    },
    collaborators: {
      ratman: {
        bio: '前端开发，对组件库和设计有自己的理解，有丰富的从业经验，提交 PR 质量很高。',
      },
      ctnilpp: {
        bio: '充满热情的理想主义者，对新技术上手很快，有独立钻研能力。',
      },
    },
  },
  footer: {
    bilibili: '哔哩哔哩',
    joinCommunity: '加入社群',
    github: 'GitHub',
  },
  faq: {
    eyebrow: 'FAQ',
    title: '常见问题',
    lead: '关于白守的问题，你想知道的都在这里。',
    items: {
      free: {
        q: '白守是免费软件吗？',
        a: '白守核心能力完全免费开源。本地日记、文件管理、自建同步与自定义模型 API 保持开放。官方加密同步、备份与 AI 服务为可选项，不付费也能继续拥有与迁移自己的数据。',
      },
      privacy: {
        q: '白守的数据存在哪里？隐私安全吗？',
        a: '白守采用本地优先架构，核心数据默认存储在你的设备上，支持导入导出。你可以选择官方加密同步、自建 S3 / WebDAV 同步，或完全离线使用，数据不会被锁死在平台里。',
      },
      platform: {
        q: '白守支持哪些平台？',
        a: '白守目前支持 Windows 和 Android 平台，支持多端同步。你可以从官网下载页或 GitHub Releases 获取最新版本。',
      },
      diff: {
        q: '白守和 Notion、Obsidian 有什么区别？',
        a: '笔记工具解决的是记录与整理，白守解决的是个人资料如何被 AI 理解并长期使用。AI 伙伴、RAG 检索与长期记忆是白守的底层设计，不是后装插件。白守让 AI 能检索、问答、总结你长期沉淀的个人记忆。',
      },
      model: {
        q: '白守支持自定义 AI 模型吗？',
        a: '支持。你可以接入自定义模型 API，包括国产大模型。白守不把 AI 能力锁死在单一供应商，保持开放与灵活。',
      },
      migrate: {
        q: '我的数据可以迁移出去吗？',
        a: '可以。白守支持数据导入导出，你的日记、文件与记忆不会被锁死在平台里。即使停止使用官方服务，你也能持续拥有与迁移自己的数据。',
      },
    },
  },
  community: {
    eyebrow: 'Community',
    title: '加入社群',
    lead: '扫一扫二维码，加入 QQ 群聊，与白守用户和开发者一起交流。',
    groupIdLabel: '群号',
    scanHint: '扫一扫二维码，加入群聊',
    closeAria: '关闭社群弹窗',
    groups: {
      group1: {
        name: '白守1群 早睡早起',
        qrAlt: '白守1群 QQ 群二维码',
      },
      group2: {
        name: '白守2群 好好吃饭',
        qrAlt: '白守2群 QQ 群二维码',
      },
    },
  },
  download: {
    button: '下载',
    title: '下载白守',
    lead: '选择你的平台，开始使用白守',
    windows: 'Windows 版',
    android: 'Android 版',
    closeAria: '关闭下载弹窗',
  },
};

export default zhCN;
