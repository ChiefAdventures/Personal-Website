document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.dropbtn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const dropdown = button.parentElement;

      // Close all other dropdowns
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('active');
        }
      });

      // Toggle the clicked dropdown
      dropdown.classList.toggle('active');
    });
  });
});

document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("show");
});

// ===== THEME TOGGLE =====
const themeButtons = document.querySelectorAll('.theme-toggle button');
const storedTheme = localStorage.getItem('theme');

function applyTheme(theme) {
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

if (storedTheme) {
  applyTheme(storedTheme);
} else {
  applyTheme('system');
}

themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedTheme = button.dataset.theme;
    localStorage.setItem('theme', selectedTheme);
    applyTheme(selectedTheme);
  });
});

// Re-apply theme if system setting changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'system') applyTheme('system');
});
