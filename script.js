const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const yearEl = document.getElementById("year");

const STORAGE_KEY = "test-theme";
const COUNT_KEY = "test-count";

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeIcon.textContent = theme === "dark" ? "Light" : "Dark";
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));
}

function updateCount(value) {
  countEl.textContent = String(value);
  localStorage.setItem(COUNT_KEY, String(value));
}

let count = Number(localStorage.getItem(COUNT_KEY)) || 0;
updateCount(count);

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
});

incrementBtn.addEventListener("click", () => updateCount(++count));
decrementBtn.addEventListener("click", () => updateCount(--count));
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCount(count);
});

yearEl.textContent = String(new Date().getFullYear());
initTheme();
