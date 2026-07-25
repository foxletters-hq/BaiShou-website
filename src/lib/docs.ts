import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import {
  DOCS_LOCALES,
  DOCS_SIDEBAR,
  allDocSlugs,
  docsEntryId,
  docsHref,
  type DocsLocale,
} from '../data/docs-nav';

export { allDocSlugs };
export type DocsEntry = CollectionEntry<'docs'>;

export function isDocsLocale(value: string): value is DocsLocale {
  return (DOCS_LOCALES as string[]).includes(value);
}

export function localeFromParam(param: string | undefined): DocsLocale {
  if (!param || param === 'docs') return 'zh-CN';
  if (param === 'zh-tw') return 'zh-TW';
  if (param === 'en' || param === 'ja') return param;
  return 'zh-CN';
}

export async function getDocEntry(locale: DocsLocale, slug: string) {
  const id = docsEntryId(locale, slug);
  return getEntry('docs', id);
}

export async function getAllDocEntries(locale: DocsLocale) {
  const all = await getCollection('docs');
  const prefix =
    locale === 'zh-CN' ? 'docs/' : locale === 'zh-TW' ? 'zh-tw/docs/' : `${locale}/docs/`;
  return all.filter(
    (e) => e.id.startsWith(prefix) && !e.id.endsWith('/index') && e.id !== `${prefix.replace(/\/$/, '')}/index` && !e.id.endsWith('index'),
  );
}

export function flatNav(locale: DocsLocale) {
  return DOCS_SIDEBAR.flatMap((g) =>
    g.items.map((item) => ({
      slug: item.slug,
      title: item.label[locale],
      href: docsHref(locale, item.slug),
    })),
  );
}

export function pagerFor(locale: DocsLocale, slug: string) {
  const list = flatNav(locale);
  const idx = list.findIndex((i) => i.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  const prev = idx > 0 ? list[idx - 1] : null;
  const next = idx < list.length - 1 ? list[idx + 1] : null;
  return {
    prev: prev ? { href: prev.href, title: prev.title } : null,
    next: next ? { href: next.href, title: next.title } : null,
  };
}

export function staticPathsForLocale(locale: DocsLocale) {
  return allDocSlugs().map((slug) => ({
    params: { slug },
    props: { locale, slug },
  }));
}
