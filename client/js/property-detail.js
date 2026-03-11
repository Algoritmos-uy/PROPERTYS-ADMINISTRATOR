const THEME_KEY = 'theme';

function applyTheme(mode) {
  const isDark = mode === 'dark';
  const nextMode = isDark ? 'dark' : 'light';

  // Igual que main.js
  document.documentElement.classList.toggle('theme-dark', isDark);
  document.body.classList.toggle('theme-dark', isDark);
  document.documentElement.setAttribute('data-theme', nextMode);

  // Si existe toggle en esta vista (opcional)
  const themeToggle = document.querySelector('.c-navbar__theme');
  themeToggle?.setAttribute('aria-pressed', String(isDark));
  themeToggle?.classList.toggle('is-dark', isDark);
}

function setupThemeToggle() {
  const themeToggle = document.querySelector('.c-navbar__theme');
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const mode = saved || (prefersDark ? 'dark' : 'light');

  applyTheme(mode);

  themeToggle?.addEventListener('click', () => {
    const isDark = document.body.classList.contains('theme-dark');
    const next = isDark ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });

  // Sincroniza cambios de otras páginas/pestañas
  window.addEventListener('storage', (e) => {
    if (e.key === THEME_KEY) {
      applyTheme(e.newValue || 'light');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  // ...existing code... (tu init de detalle: cargar propiedad, reserva, etc.)
});