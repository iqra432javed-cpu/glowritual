/* ================================================
   GLOWRITUAL — main.js v2
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── FILTER TABS ──────────────────────────────
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.card');

  function applyFilter(filter) {
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      applyFilter(tab.dataset.filter);

      // Scroll to catalog
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ── CONCERN CARDS → filter + scroll ──────────
  const concernCards = document.querySelectorAll('.concern-card');

  concernCards.forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.dataset.filter;

      // Activate matching tab
      tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === filter);
      });

      applyFilter(filter);

      // Highlight concern card
      concernCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Scroll to catalog
      setTimeout(() => {
        document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    });
  });

  // ── SCROLL REVEAL ─────────────────────────────
  const revealEls = document.querySelectorAll('.card, .step, .concern-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = entry.target.classList.contains('card')
          ? 'translateY(0)'
          : 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = `opacity 0.45s ease ${(i % 12) * 0.05}s, transform 0.45s ease ${(i % 12) * 0.05}s`;
    observer.observe(el);
  });

  // ── FLOATING BTN — hide near footer ──────────
  const fab = document.querySelector('.fab');
  const footer = document.querySelector('.footer');

  if (fab && footer) {
    new IntersectionObserver(([entry]) => {
      fab.style.opacity = entry.isIntersecting ? '0' : '1';
      fab.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
    }).observe(footer);
  }

  // ── IMAGE ERROR FALLBACK EMOJIS ───────────────
  const fallbackEmojis = {
    acne:      '💚',
    glow:      '✨',
    hydration: '💧',
    scrubs:    '🧖',
    hair:      '💇',
    perfumes:  '🌸',
    other:     '🌿',
  };

  document.querySelectorAll('.card-img-wrap img').forEach(img => {
    img.addEventListener('error', () => {
      const category = img.closest('.card')?.dataset.category || 'other';
      const wrap = img.parentElement;
      wrap.classList.add('img-error');
      wrap.setAttribute('data-emoji', fallbackEmojis[category] || '🌿');
      wrap.style.setProperty('--emoji', `'${fallbackEmojis[category] || "🌿"}'`);
      img.remove();
    });
  });

});
