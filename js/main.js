/* ============================================
   GLOWRITUAL — main.js
   Filter tabs + smooth interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── FILTER TABS ──────────────────────────
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.product-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {

      // Active tab styling
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
          // Smooth fade in
          card.style.animation = 'none';
          card.offsetHeight; // reflow
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ── SCROLL REVEAL ────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.4s ease ${i * 0.04}s, transform 0.4s ease ${i * 0.04}s`;
    observer.observe(card);
  });

  // ── FLOATING BTN — hide on footer ────────
  const floatingBtn = document.querySelector('.floating-btn');
  const footer = document.querySelector('.footer');

  if (floatingBtn && footer) {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        floatingBtn.style.opacity = entry.isIntersecting ? '0' : '1';
        floatingBtn.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
      });
    });
    footerObserver.observe(footer);
  }

});

// ── FADE IN KEYFRAME (injected) ──────────
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
