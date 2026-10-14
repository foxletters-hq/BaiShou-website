import Lenis from 'lenis';

function getSections(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>('.snap-page, section[id]'));
}

/**
 * 全平台自然自由滚动：
 * - 彻底移除 Snap 吸附与滚轮劫持，滚轮从当前光标位置自然滚动
 * - 启用 Lenis 自然平滑滚动，带惯性与手感优化
 * - 使用 IntersectionObserver 自动高亮当前视野所在的导航指示器
 */
export function initLenisScroll(onSectionChange?: (sectionId: string) => void): () => void {
  const sections = getSections();
  document.documentElement.dataset.scrollMode = 'free';

  const lenis = new Lenis({
    autoRaf: true,
    duration: 1.0,
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.0,
  });

  // 监听可视区域以通知导航栏高亮（只读监听，绝不干涉滚动）
  let activeId = sections[0]?.id || '';
  const setActiveSection = (id: string) => {
    if (!id || id === activeId) return;
    activeId = id;
    onSectionChange?.(id);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      const current = visible[0]?.target;
      if (current instanceof HTMLElement && current.id) {
        setActiveSection(current.id);
      }
    },
    {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0, 0.1, 0.25, 0.5],
    }
  );

  sections.forEach((section) => observer.observe(section));
  if (sections[0]?.id) {
    onSectionChange?.(sections[0].id);
  }

  // 锚点平滑滚动
  const onAnchorClick = (event: MouseEvent) => {
    const link = (event.target as HTMLElement)?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href === '#' || !href.startsWith('#')) return;

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    lenis.scrollTo(target, {
      offset: -72,
      duration: 1.0,
    });
  };

  document.addEventListener('click', onAnchorClick);

  return () => {
    document.removeEventListener('click', onAnchorClick);
    observer.disconnect();
    lenis.destroy();
    delete document.documentElement.dataset.scrollMode;
  };
}
