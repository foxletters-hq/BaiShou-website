import type { Locale, LocaleOption, Messages } from './types';
import zhCN from './locales/zh-CN';
import zhTW from './locales/zh-TW';
import en from './locales/en';
import ja from './locales/ja';

export type { Locale, LocaleOption, Messages };

export const LOCALES: Locale[] = ['zh-CN', 'zh-TW', 'en', 'ja'];

export const LOCALE_OPTIONS: LocaleOption[] = [
  { code: 'zh-CN', label: '简体中文', shortLabel: '简中' },
  { code: 'zh-TW', label: '繁體中文', shortLabel: '繁中' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'ja', label: '日本語', shortLabel: '日文' },
];

export const messages: Record<Locale, Messages> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  en,
  ja,
};

export const DEFAULT_LOCALE: Locale = 'zh-CN';
export const LOCALE_STORAGE_KEY = 'baishou-locale';

export const SECTION_IDS = [
  'hero',
  'problem',
  'features',
  'vision',
  'principles',
  'people',
] as const;

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function detectLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored && isLocale(stored)) return stored;

  const lang = navigator.language.toLowerCase();
  if (lang === 'zh-tw' || lang === 'zh-hk' || lang === 'zh-mo') return 'zh-TW';
  if (lang.startsWith('zh')) return 'zh-CN';
  if (lang.startsWith('ja')) return 'ja';
  return 'en';
}

export function t(dict: Messages, path: string): string {
  const value = path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, dict);

  return typeof value === 'string' ? value : path;
}
