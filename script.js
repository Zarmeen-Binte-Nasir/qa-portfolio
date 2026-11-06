// Soft reveal for cards when they enter the viewport
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll('.card, .skills-grid > div, .process li, .case-panel, .finding')
  .forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = `opacity 0.45s ease ${i * 0.04}s, transform 0.45s ease ${i * 0.04}s`;
    observer.observe(el);
  });

const style = document.createElement('style');
style.textContent = `.is-visible { opacity: 1 !important; transform: none !important; }`;
document.head.appendChild(style);
