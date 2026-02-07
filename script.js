const header = document.getElementById('site-header');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function setScrolled() {
  if (!header) return;
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

function setMenuOpen(isOpen) {
  if (!hamburger || !mobileMenu) return;

  hamburger.classList.toggle('active', isOpen);
  mobileMenu.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
}

window.addEventListener('scroll', setScrolled, { passive: true });
setScrolled();

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('active');
    setMenuOpen(!isOpen);
  });
}

if (mobileMenu) {
  mobileMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches('a[href^="#"]')) {
      setMenuOpen(false);
    }
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    setMenuOpen(false);
  }
});
