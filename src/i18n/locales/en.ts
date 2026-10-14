import type { Messages } from '../types';

const en: Messages = {
  meta: {
    title: 'BaiShou · Whiteguard',
    description:
      'A local-first, graph database-driven personal knowledge base, life relationship graph, and AI agent system. Featuring long-term memory, Graph RAG search, MCP ecosystem, and multi-device encrypted sync.',
  },
  brand: { name: 'BaiShou', suffix: ' · Foxletters' },
  nav: {
    home: 'Home',
    problem: 'Problem',
    features: 'Features',
    vision: 'Graph & Agent',
    principles: 'Principles',
    people: 'People',
    docsAction: 'Docs',
  },
  a11y: {
    mainNav: 'Page navigation',
    snapNav: 'Section navigation',
    footerNav: 'Footer navigation',
    themeToggle: 'Toggle light / dark theme',
    langSelect: 'Select language',
    avatar: "'s avatar",
  },
  hero: {
    eyebrow: 'BaiShou',
    title: 'BaiShou',
    tagline: 'With a pure white vow, we guard each other for life',
    positioning: 'A local-first, graph database-driven personal knowledge base and AI agent system.',
    desc: 'Seamlessly integrating daily diaries, multi-dimensional knowledge bases, life relationship graphs, and autonomous AI agents. Data stays 100% local by default, powered by an embedded graph database to map people and life events, supporting MCP open protocols and multi-device encrypted sync.',
    ctaGithub: 'View on GitHub',
    ctaCommunity: 'Join Community',
    ctaBilibili: 'Bilibili',
    iconAlt: 'BaiShou app icon',
  },
  problem: {
    eyebrow: 'Problem',
    title: 'In the age of AI, long-term memory and deep understanding remain unsolved',
    lead: 'People entrust diaries, files, and conversations to software, but existing tools mostly rely on flat text retrieval without deep relational graph connections or autonomous agent action capabilities.',
    items: {
      memory: {
        title: 'Lack of multi-dimensional graphs and deep causality',
        desc: 'Single chat sessions are bounded by context windows, leaving memories as fractured fragments. Users need more than text snippets—they need a relational graph that maps people, timelines, and causal connections.',
      },
      notes: {
        title: 'Traditional notes are not AI-native',
        desc: 'Tools like Notion and Obsidian excel at one-way organization, but AI is merely an afterthought. They lack native graph database reasoning and autonomous agents to actively organize memories.',
      },
      scattered: {
        title: 'Data, memories, and tools remain fragmented',
        desc: 'Diaries in journals, files in cloud drives, chats on model platforms. There is no unified local hub connecting daily records, knowledge archives, and external agent tools.',
      },
      locale: {
        title: 'Barriers in localization and data privacy',
        desc: 'Overseas tools face network hurdles and privacy risks. A reliable, fully local-first, multi-platform solution supporting local models and open MCP protocols is essential.',
      },
    },
  },
  features: {
    eyebrow: 'Features',
    title: 'Core capabilities',
    lead: 'Graph database, autonomous AI agents, multi-dimensional knowledge base, and end-to-end sync are now fully live—empowering your second brain.',
    devBadge: 'Ready',
    items: {
      diary: {
        title: 'Diary & long-term memory',
        desc: 'Record daily life and reflections, distilling weekly, monthly, and yearly reviews into a lifelong companion chronicle.',
      },
      graph: {
        title: 'Life relationship graph (Graph DB)',
        desc: 'Embedded entity-relationship graph database automatically extracts and structures people, events, and complex connections into an interactive, reasoning-ready network.',
      },
      agent: {
        title: 'Autonomous AI agent',
        desc: 'Equipped with autonomous planning and tool invocation; supports the open MCP standard to connect external tools for memory distillation, synthesis, and creative tasks.',
      },
      knowledge: {
        title: 'Multi-dimensional knowledge base',
        desc: 'Deep parsing for Markdown, PDF, Doc, images, and more, turning books, papers, and work archives into wisdom for your AI agent.',
      },
      rag: {
        title: 'Hybrid Graph RAG search',
        desc: 'Combining full-text search, high-dimensional vector semantic search, and multi-hop graph reasoning to pinpoint memories and answers across time and formats.',
      },
      sync: {
        title: 'Local-first & multi-device sync',
        desc: 'Core data and databases remain securely on your local devices by default; supports official end-to-end encrypted sync and self-hosted S3 / WebDAV.',
      },
    },
  },
  vision: {
    eyebrow: 'Vision',
    title: 'Building an AI-native second brain bridging graphs, entities, and actions',
    devBadge: 'Ready',
    lead: 'Evolving from companion journaling into graph relational mapping and autonomous agent collaboration—bringing files, life memories, and intelligent tools into a unified personal hub.',
    whyTitle: 'Why graph database and agent architecture?',
    whyP1:
      'Traditional vector retrieval (Vector RAG) only matches isolated fragments by semantic similarity, missing life context and complex causality. BaiShou introduces a <strong>local entity-relationship graph</strong> and <strong>agent architecture</strong>: enabling AI to understand the full context of "who and what" across time, while autonomously invoking tools to assist your thinking.',
    whyP2:
      'This is not just cloud storage in a new skin—it integrates files and memories into an actionable agent workflow: inferable graphs, callable tools, and growing memory.',
    compare: {
      notes: {
        title: 'Unlike traditional note apps',
        desc: 'Traditional note apps solve "capture and archive"; BaiShou solves "how personal data and memories are deeply reasoned by AI agents". Graph databases, Graph RAG, and agent toolchains are foundational architectures, not post-hoc plugins.',
      },
      chat: {
        title: 'Unlike traditional chat apps',
        desc: 'Standard chat products excel at instant Q&A, but memory stays locked in ephemeral cloud sessions. BaiShou roots AI in your private local graph database, private diaries, and fully exportable data—a true lifelong companion agent.',
      },
    },
    ambitionTitle: 'Our vision',
    ambitionP1:
      'With uncompromising privacy and local-first architecture, anyone can easily own their personal AI companion and agent system. BaiShou will continue advancing <strong>local graph databases, agent ecosystems, and multi-device sync</strong>, ensuring your digital memories and knowledge truly belong to you forever.',
  },
  principles: {
    eyebrow: 'Principles',
    title: 'Local-first, data open',
    lead: 'BaiShou is not here to replace every tool—it is an AI-native, sync-ready personal knowledge base for people who care about their data and long-term memory.',
    items: {
      local: {
        title: 'Local-first',
        desc: 'Core data lives on your devices with import/export—memories are not held hostage.',
      },
      open: {
        title: 'Open core',
        desc: 'Local diaries, file management, self-hosted sync, and custom model APIs stay open—we do not monetize by locking data.',
      },
      ai: {
        title: 'Deep understanding with Graph & Agent',
        desc: 'Not just storing files—empowering graph databases and AI agents to search, reason, and synthesize the personal memories you build over a lifetime.',
      },
      official: {
        title: 'Optional official services',
        desc: 'When you want convenience, use encrypted sync, backup, and AI services—or keep owning and migrating your data without paying.',
      },
    },
  },
  people: {
    coreEyebrow: 'Core Team',
    coreTitle: 'Core Developers',
    founderEyebrow: 'Founder',
    founderTitle: 'Founder',
    founderRole: 'Founder',
    founderBio:
      'Independent technical developer leading product definition, cross-platform engineering, AI memory and sync architecture, and early community operations.',
    collabEyebrow: 'Collaborators',
    collabTitle: 'Collaborators',
    collabLeadBefore: 'Thanks to everyone building BaiShou. See the full list on',
    collabLeadLink: 'GitHub Contributors',
    collabLeadAfter: '.',
    wallEyebrow: 'Contributors Wall',
    wallTitle: 'Open Source Contributors',
    wallLeadBefore: 'Code, ideas, designs, and issues—every contribution shapes BaiShou into something better. Join us and',
    wallLeadLink: 'contribute on GitHub',
    wallLeadAfter: ' to become a collaborator.',
    members: {
      anson: {
        role: 'Founder / Full-stack Architect',
        bio: 'Independent technical developer leading product definition, cross-platform engineering, and AI memory architecture.',
      },
      alice: {
        role: 'Core Developer / Architect',
        bio: 'Core full-stack developer leading the life relationship graph (Graph DB), autonomous AI agent architecture, MCP ecosystem, and mobile experience.',
      },
      ratman: {
        role: 'Core Developer / UI & Components',
        bio: 'Frontend developer with deep design and component library expertise, industry experience, and high-quality PR contributions.',
      },
      ctnilpp: {
        role: 'Core Developer / Tech Research',
        bio: 'Passionate idealist who rapidly masters emerging technologies, providing solid independent research and deep engineering.',
      },
    },
    collaborators: {
      ratman: {
        bio: 'Frontend developer with deep understanding of component libraries and design, extensive industry experience, and consistently high-quality PRs.',
      },
      ctnilpp: {
        bio: 'Passionate idealist who picks up new technologies quickly and researches independently.',
      },
    },
  },
  footer: {
    bilibili: 'Bilibili',
    joinCommunity: 'Join Community',
    github: 'GitHub',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    lead: 'Questions about BaiShou? Here are the answers you’re looking for.',
    items: {
      free: {
        q: 'Is BaiShou free?',
        a: 'BaiShou’s core capabilities are completely free and open source. Local diaries, file management, self-hosted sync, and custom model APIs stay open. Official encrypted sync, backup, and AI services are optional—you keep owning and migrating your data without paying.',
      },
      privacy: {
        q: 'Where is my data stored? Is it private?',
        a: 'BaiShou uses a local-first architecture. Core data stays on your devices by default, with import/export support. You can choose official encrypted sync, self-hosted S3 / WebDAV, or full offline use—data is never locked into a platform.',
      },
      platform: {
        q: 'Which platforms does BaiShou support?',
        a: 'BaiShou currently supports Windows and Android with multi-device sync. You can get the latest version from the download page or GitHub Releases.',
      },
      diff: {
        q: 'How is BaiShou different from Notion or Obsidian?',
        a: 'Note tools solve capture and organization; BaiShou solves how personal data is understood and used by AI over time. Companions, RAG, and long-term memory are foundational—not plugins. AI can search, answer, and summarize the personal memory you build over time.',
      },
      model: {
        q: 'Can I use custom AI models?',
        a: 'Yes. You can connect custom model APIs, including domestic large models. BaiShou does not lock AI capability to a single provider—keeping it open and flexible.',
      },
      migrate: {
        q: 'Can I export my data?',
        a: 'Yes. BaiShou supports import/export—your diaries, files, and memories are never locked in. Even without official services, you keep owning and migrating your data.',
      },
    },
  },
  community: {
    eyebrow: 'Community',
    title: 'Join the Community',
    lead: 'Scan the QR code to join our QQ groups and connect with BaiShou users and developers.',
    groupIdLabel: 'Group ID',
    scanHint: 'Scan the QR code to join the group chat',
    closeAria: 'Close community dialog',
    groups: {
      group1: {
        name: 'BaiShou Group 1 · Early to Bed',
        qrAlt: 'BaiShou Group 1 QQ QR code',
      },
      group2: {
        name: 'BaiShou Group 2 · Eat Well',
        qrAlt: 'BaiShou Group 2 QQ QR code',
      },
    },
  },
  download: {
    button: 'Download',
    title: 'Download BaiShou',
    lead: 'Choose your platform to get started.',
    windows: 'Windows',
    android: 'Android',
    closeAria: 'Close download dialog',
  },
};

export default en;
