'use strict';

document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
toggle.addEventListener('click', () => {
  const opening = mobileNav.hidden;
  mobileNav.hidden = !opening;
  toggle.setAttribute('aria-expanded', String(opening));
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
}));

const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
document.querySelectorAll('.shot').forEach(shot => shot.addEventListener('click', () => {
  lightboxImage.src = shot.dataset.image;
  lightboxImage.alt = shot.querySelector('img').alt;
  lightboxCaption.textContent = shot.dataset.caption;
  if (typeof lightbox.showModal === 'function') lightbox.showModal();
}));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

const observer = 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches
  ? new IntersectionObserver((entries, self) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        self.unobserve(entry.target);
      });
    }, { threshold: .08 })
  : null;
document.querySelectorAll('.section-title, .overview-copy, .gallery-grid, .download-list, .test-grid, .comments, .creator-grid').forEach(el => {
  if (observer) { el.classList.add('reveal'); observer.observe(el); }
});

// Real comments through Giscus / GitHub Discussions.
// Configured for KINI'S VIGIL feedback. Only load one Giscus instance.
const commentsConfig = {
  repo: 'spkecreation/kinis-vigil-feedback',
  repoId: 'R_kgDOVEJmkg',
  category: 'General',
  categoryId: 'DIC_kwDOVEJmks4DHhIL'
};

if (Object.values(commentsConfig).every(Boolean)) {
  const container = document.getElementById('comments');
  container.replaceChildren();
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  const settings = {
    repo: commentsConfig.repo, 'repo-id': commentsConfig.repoId,
    category: commentsConfig.category, 'category-id': commentsConfig.categoryId,
    mapping: 'pathname', strict: '0', 'reactions-enabled': '1',
    'emit-metadata': '0', 'input-position': 'bottom', theme: 'dark_high_contrast', lang: 'en'
  };
  Object.entries(settings).forEach(([key, value]) => script.setAttribute('data-' + key, value));
  container.appendChild(script);
}
