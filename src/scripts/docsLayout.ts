let docsUiBound = false;

function getDocsShell() {
  return document.querySelector<HTMLElement>('[data-docs-root]');
}

function closeDocsNav(shell?: HTMLElement | null) {
  const root = shell ?? getDocsShell();
  root?.removeAttribute('data-nav-open');
  document.body.style.overflow = '';
}

function scrollActiveSidebarLinkIntoView() {
  const sidebar = document.querySelector<HTMLElement>('.docs-sidebar');
  if (!sidebar) return;

  const active = sidebar.querySelector<HTMLElement>(
    '.docs-nav__link[aria-current="page"], .docs-sidebar__home[aria-current="page"]',
  );
  if (!active) return;

  const sidebarRect = sidebar.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();
  const delta =
    activeRect.top -
    sidebarRect.top +
    sidebar.scrollTop -
    sidebar.clientHeight / 2 +
    activeRect.height / 2;

  sidebar.scrollTo({
    top: Math.max(0, delta),
    behavior: 'auto',
  });
}

function toggleDocsNav(shell: HTMLElement) {
  if (shell.getAttribute('data-nav-open') === 'true') {
    closeDocsNav(shell);
  } else {
    shell.setAttribute('data-nav-open', 'true');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      scrollActiveSidebarLinkIntoView();
    });
  }
}

/** 侧栏 persist 后 aria-current 不会自动更新，按当前 URL 同步 */
function syncDocsSidebarActive() {
  const sidebar = document.querySelector<HTMLElement>('.docs-sidebar');
  if (!sidebar) return;

  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  sidebar
    .querySelectorAll<HTMLAnchorElement>('.docs-nav__link, .docs-sidebar__home')
    .forEach((link) => {
      const linkPath =
        new URL(link.href, window.location.origin).pathname.replace(/\/+$/, '') || '/';
      if (linkPath === currentPath) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
}

function bindDocsTocSmoothScroll() {
  const toc = document.querySelector('.docs-toc');
  if (!toc || toc.getAttribute('data-toc-bound') === 'true') return;
  toc.setAttribute('data-toc-bound', 'true');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  toc.querySelectorAll<HTMLAnchorElement>('a.docs-toc__link[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = decodeURIComponent(link.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      history.replaceState(null, '', `#${id}`);

      toc.querySelectorAll('.docs-toc__link[aria-current="true"]').forEach((el) => {
        el.removeAttribute('aria-current');
      });
      link.setAttribute('aria-current', 'true');
    });
  });
}

export function initDocsLayoutClient() {
  const initDocsPage = () => {
    closeDocsNav();
    document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped');
    syncDocsSidebarActive();
    bindDocsTocSmoothScroll();
    scrollActiveSidebarLinkIntoView();
  };

  if (!docsUiBound) {
    docsUiBound = true;

    document.addEventListener('click', (event) => {
      const shell = getDocsShell();
      if (!shell) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      if (target.closest('[data-docs-nav-toggle]')) {
        event.stopPropagation();
        toggleDocsNav(shell);
        return;
      }

      if (target.closest('[data-docs-nav-close]')) {
        closeDocsNav(shell);
        return;
      }

      if (target.closest('.docs-nav__link, .docs-sidebar__home')) {
        closeDocsNav(shell);
      }
    });

    document.addEventListener(
      'touchmove',
      (event) => {
        const target = event.target;
        if (target instanceof Element && target.closest('.docs-backdrop')) {
          event.preventDefault();
        }
      },
      { passive: false },
    );

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const shell = getDocsShell();
        if (shell?.getAttribute('data-nav-open') === 'true') {
          closeDocsNav(shell);
        }
      }
    });

    document.addEventListener('astro:after-swap', () => {
      closeDocsNav();
    });
  }

  initDocsPage();
  document.addEventListener('astro:page-load', initDocsPage);
}
