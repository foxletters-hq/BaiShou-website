import type { Messages } from '../types';

const en: Messages = {
  meta: {
    title: 'BaiShou · Whiteguard',
    description:
      'A local-first, AI-native personal knowledge base and long-term memory system with AI companions, RAG search, and multi-device sync.',
  },
  brand: { name: 'BaiShou', suffix: ' · Foxletters' },
  nav: {
    problem: 'Problem',
    features: 'Features',
    vision: 'Knowledge',
    principles: 'Principles',
    people: 'People',
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
    positioning: 'A local-first, AI-native personal knowledge base and long-term memory system.',
    desc: 'We start with diaries and long-term memory for AI companion users—bringing diaries, AI companions, and multi-device sync into one personal memory space. Knowledge base features are in development; core capabilities stay open and data stays on your devices.',
    ctaGithub: 'View on GitHub',
    ctaCommunity: 'Join Community',
    ctaBilibili: 'Bilibili',
    iconAlt: 'BaiShou app icon',
  },
  problem: {
    eyebrow: 'Problem',
    title: 'In the age of AI, long-term memory has not truly been solved',
    lead: 'People entrust diaries, files, and conversations to software, yet few tools bring together long-term memory, AI companions, and data that stays on your devices.',
    items: {
      memory: {
        title: 'AI lacks reliable long-term memory',
        desc: 'Many AI products rely on cloud sessions; memory is bounded by context windows and platform policies. Users need a system that preserves life and memories—not a disposable chat window.',
      },
      notes: {
        title: 'Traditional notes are not AI-native',
        desc: 'Tools like Notion and Obsidian excel at organizing information, but AI is rarely built in from the ground up. Making AI understand your notes often means plugins and heavy setup.',
      },
      scattered: {
        title: 'Files and memories stay fragmented',
        desc: 'Files live in cloud drives, notes in note apps, diaries elsewhere, and chats on model platforms. Fragmented data prevents AI from building full context.',
      },
      locale: {
        title: 'Few good options for Chinese users',
        desc: 'Overseas knowledge and AI tools pose barriers around access, payment, and data residency. Users need local-first, multi-device tools that work with domestic models.',
      },
    },
  },
  features: {
    eyebrow: 'Features',
    title: 'Core capabilities',
    lead: 'Diary, AI companion, and sync features are available today; the knowledge base is in development and will connect with the existing memory stack.',
    devBadge: 'In dev',
    items: {
      diary: {
        title: 'Diary & memories',
        desc: 'Record daily life and build long-term memory through weekly, monthly, and yearly summaries.',
      },
      companion: {
        title: 'AI companions',
        desc: 'Create long-term AI companions that converse and understand you on top of your personal memory.',
      },
      knowledge: {
        title: 'File knowledge base',
        desc: 'Manage PDFs, DOC, Markdown, images, and more by knowledge base. (In development)',
        badge: 'In dev',
      },
      rag: {
        title: 'RAG search',
        desc: 'Combine full-text and vector search so AI can find relevant diaries, files, and history.',
      },
      sync: {
        title: 'Multi-device sync',
        desc: 'Sync desktop and mobile; use official hosting or your own S3 / WebDAV.',
      },
      local: {
        title: 'Local-first',
        desc: 'Core data stays local by default with import/export—you are not locked into our platform.',
      },
    },
  },
  vision: {
    eyebrow: 'Vision',
    title: 'Building an AI-native personal knowledge base',
    devBadge: 'In dev',
    lead: 'Diary and AI companion features are live; the knowledge base is BaiShou’s next chapter—one space where files, study materials, and life memories can be read by AI.',
    whyTitle: 'Why a knowledge base?',
    whyP1:
      'PDFs, course notes, work documents, and personal diaries should not live forever in separate apps. BaiShou aims to be <strong>the unified entry for your long-term personal data</strong>: the more you accumulate, the better AI understands your learning path, life story, and way of thinking.',
    whyP2:
      'This is not cloud storage with a new skin—it is putting your materials into AI workflows: searchable, answerable, cited, and companionship-ready.',
    compare: {
      notes: {
        title: 'Unlike traditional note apps',
        desc: 'Note tools solve capture and organization; BaiShou solves how personal data is understood and used by AI over time. Companions, RAG, and long-term memory are foundational—not plugins.',
      },
      chat: {
        title: 'Unlike traditional chat apps',
        desc: 'Chat products excel at Q&A and companionship, but memory often stays on the platform. BaiShou builds AI on your local diaries, files, and portable data—not disposable chat sessions.',
      },
    },
    ambitionTitle: 'Our vision',
    ambitionP1:
      'We validate demand through diaries and long-term memory for AI companion users, then expand to knowledge workers, students, and lifelong learners. BaiShou aims to be <strong>a local-first, AI-native, multi-device personal knowledge base for Chinese-speaking users</strong>—with exportable data so you can keep control of your memories and files.',
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
        title: 'AI understands your data',
        desc: 'Not just file storage—AI can search, answer, and summarize the personal memory you build over time.',
      },
      official: {
        title: 'Optional official services',
        desc: 'When you want convenience, use encrypted sync, backup, and AI services—or keep owning and migrating your data without paying.',
      },
    },
  },
  people: {
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
