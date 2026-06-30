import type { Messages } from '../types';

const zhCN: Messages = {
  meta: {
    title: '白守 · BaiShou',
    description:
      '本地优先、AI 原生的个人知识库和长期记忆系统，支持 AI 伙伴、RAG 检索与多端同步。',
  },
  brand: { name: '白守', suffix: ' · Foxletters' },
  nav: {
    problem: '问题',
    features: '功能',
    vision: '知识库',
    principles: '理念',
    people: '成员',
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
    positioning: '本地优先、AI 原生的个人知识库和长期记忆系统。',
    desc: '先从 AI 伴侣用户的日记与长期记忆切入，把日记、AI 伙伴与多端同步放进同一个个人记忆空间。知识库能力正在开发中，核心能力保持开放，数据留在你的设备上。',
    ctaGithub: '前往 GitHub',
    ctaVision: '了解知识库',
    iconAlt: '白守应用图标',
  },
  problem: {
    eyebrow: 'Problem',
    title: 'AI 时代，长期记忆还没有被真正解决',
    lead: '用户开始把日记、资料与对话交给软件，但现有工具很少把长期记忆、AI 伙伴与本地留存的数据放在一起统筹。',
    items: {
      memory: {
        title: 'AI 缺少可靠长期记忆',
        desc: '许多 AI 产品依赖云端会话，记忆受限于上下文与平台策略。用户需要的不是一次性聊天窗口，而是能长期保存生活与回忆的系统。',
      },
      notes: {
        title: '传统笔记不够 AI 原生',
        desc: 'Notion、Obsidian 等工具擅长整理资料，但 AI 往往不是底层设计。想让 AI 读懂自己的笔记与历史，常需复杂配置与插件维护。',
      },
      scattered: {
        title: '资料与记忆彼此分散',
        desc: '文件在网盘、笔记在笔记软件、日记在别处、对话又在模型平台。数据分散后，AI 难以形成完整上下文。',
      },
      locale: {
        title: '中文场景缺少合适选择',
        desc: '海外知识库与 AI 工具对国内用户存在访问、支付与数据位置等门槛。需要本地优先、多端可用、可接入国产模型的方案。',
      },
    },
  },
  features: {
    eyebrow: 'Features',
    title: '核心能力',
    lead: '日记、AI 伙伴与同步能力已经可用；知识库正在开发，将逐步与现有记忆体系打通。',
    devBadge: '开发中',
    items: {
      diary: {
        title: '日记与回忆',
        desc: '记录每天发生的事，通过周记、月记与年度总结形成长期记忆。',
      },
      companion: {
        title: 'AI 伙伴',
        desc: '创建长期陪伴自己的 AI 伙伴，在个人记忆基础上持续对话与理解。',
      },
      knowledge: {
        title: '文件知识库',
        desc: '管理 PDF、DOC、Markdown、图片等资料，按知识库分类整理。（正在开发）',
        badge: '开发中',
      },
      rag: {
        title: 'RAG 检索',
        desc: '全文检索与向量检索结合，让 AI 精准找到相关日记、文件与历史记录。',
      },
      sync: {
        title: '多端同步',
        desc: '桌面端与移动端同步，支持官方托管，也保留自建 S3 / WebDAV 能力。',
      },
      local: {
        title: '本地优先',
        desc: '核心数据默认在本地，可导入导出，不把记忆锁死在平台里。',
      },
    },
  },
  vision: {
    eyebrow: 'Vision',
    title: '我们在构建 AI 原生的个人知识库',
    devBadge: '开发中',
    lead: '日记与 AI 伙伴能力已经可用，知识库是白守的下一阶段——把文件、学习资料与生活记忆放进同一个能被 AI 读懂的空间。',
    whyTitle: '为什么要做知识库？',
    whyP1:
      '用户的 PDF、课程笔记、工作文档和生活日记不该永远分散在不同软件里。白守希望成为<strong>个人长期数据的统一入口</strong>：你沉淀得越久，AI 越理解你的学习轨迹、生活脉络与思考方式。',
    whyP2:
      '这不是把网盘换个皮肤，而是让资料真正进入 AI 的工作流——可检索、可问答、可标注来源、可长期陪伴。',
    compare: {
      notes: {
        title: '与传统笔记软件不同',
        desc: '笔记工具解决的是「记录与整理」，白守要解决的是「个人资料如何被 AI 理解并长期使用」。AI 伙伴、RAG 检索与长期记忆是底层设计，不是后装插件。',
      },
      chat: {
        title: '与传统对话软件不同',
        desc: '对话产品擅长即时问答与陪伴，但记忆往往留在平台侧。白守把 AI 建立在用户自己的本地日记、文件与可迁移数据之上，而不是一次性的聊天窗口。',
      },
    },
    ambitionTitle: '我们的愿景',
    ambitionP1:
      '先从 AI 伴侣用户的日记与长期记忆验证需求，再扩展到知识工作者、学生与长期学习者。白守希望成为<strong>中文场景里本地优先、AI 原生、可多端同步</strong>的个人知识库——数据可导出迁移，让用户能持续掌握自己的记忆与资料。',
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
        title: 'AI 理解你的资料',
        desc: '不是普通云盘存文件，而是让 AI 能检索、问答、总结你长期沉淀的个人记忆。',
      },
      official: {
        title: '官方服务可选',
        desc: '需要省心时，可选用官方加密同步、备份与 AI 服务；不付费也能继续拥有与迁移自己的数据。',
      },
    },
  },
  people: {
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
};

export default zhCN;
