const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#company-mobile-nav');
const mobileLayout = window.matchMedia('(max-width: 960px)');

function setMenuOpen(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  mobileNav.hidden = !open;
}

menuToggle.addEventListener('click', () => setMenuOpen(mobileNav.hidden));
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});
mobileLayout.addEventListener('change', () => setMenuOpen(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -7% 0px' });

  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
