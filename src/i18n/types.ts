export type Locale = 'zh-CN' | 'zh-TW' | 'en' | 'ja';

export interface LocaleOption {
  code: Locale;
  label: string;
  shortLabel: string;
}

export interface Messages {
  meta: { title: string; description: string };
  brand: { name: string; suffix: string };
  nav: {
    problem: string;
    features: string;
    vision: string;
    principles: string;
    people: string;
  };
  a11y: {
    mainNav: string;
    snapNav: string;
    footerNav: string;
    themeToggle: string;
    langSelect: string;
    avatar: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    positioning: string;
    desc: string;
    ctaGithub: string;
    ctaVision: string;
    iconAlt: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Record<
      'memory' | 'notes' | 'scattered' | 'locale',
      { title: string; desc: string }
    >;
  };
  features: {
    eyebrow: string;
    title: string;
    lead: string;
    devBadge: string;
    items: Record<
      'diary' | 'companion' | 'knowledge' | 'rag' | 'sync' | 'local',
      { title: string; desc: string; badge?: string }
    >;
  };
  vision: {
    eyebrow: string;
    title: string;
    devBadge: string;
    lead: string;
    whyTitle: string;
    whyP1: string;
    whyP2: string;
    compare: Record<'notes' | 'chat', { title: string; desc: string }>;
    ambitionTitle: string;
    ambitionP1: string;
  };
  principles: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Record<
      'local' | 'open' | 'ai' | 'official',
      { title: string; desc: string }
    >;
  };
  people: {
    founderEyebrow: string;
    founderTitle: string;
    founderRole: string;
    founderBio: string;
    collabEyebrow: string;
    collabTitle: string;
    collabLeadBefore: string;
    collabLeadLink: string;
    collabLeadAfter: string;
    collaborators: Record<'ratman' | 'ctnilpp', { bio: string }>;
  };
  footer: {
    bilibili: string;
    joinCommunity: string;
  };
  community: {
    eyebrow: string;
    title: string;
    lead: string;
    groupIdLabel: string;
    scanHint: string;
    closeAria: string;
    groups: Record<'group1' | 'group2', { name: string; qrAlt: string }>;
  };
}
