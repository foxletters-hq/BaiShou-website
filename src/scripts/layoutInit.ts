import { initLenisScroll } from './lenisScroll';
import { initI18n } from './i18n';

const initReveal = () => {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (els.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px' },
  );

  els.forEach((el) => observer.observe(el));
};

const initSnapNav = () => {
  const dots = Array.from(document.querySelectorAll<HTMLElement>('[data-snap-dot]'));
  const links = document.querySelectorAll<HTMLElement>('[data-nav-link]');

  const setActive = (id: string) => {
    const activeIdx = dots.findIndex((dot) => dot.dataset.snapDot === id);
    dots.forEach((dot, idx) => {
      const isActive = dot.dataset.snapDot === id;
      const isPassed = activeIdx > -1 && idx < activeIdx;
      dot.classList.toggle('is-active', isActive);
      dot.classList.toggle('is-passed', isPassed);
      if (isActive) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
    links.forEach((link) => {
      link.classList.toggle('is-active', link.dataset.navLink === id);
    });
  };

  return setActive;
};

export function initLayoutClient() {
  let pageInited = false;
  let initialLoaded = false;

  const init = () => {
    initI18n();
    initReveal();
    if (!document.querySelector('[data-docs-root]')) {
      if (pageInited) return;
      pageInited = true;
      const setActive = initSnapNav();
      initLenisScroll(setActive);
    }
  };

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initialLoaded = true;
    init();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      if (!initialLoaded) {
        initialLoaded = true;
        init();
      }
    });
  }

  document.addEventListener('astro:page-load', () => {
    if (initialLoaded) {
      init();
    }
  });
}
