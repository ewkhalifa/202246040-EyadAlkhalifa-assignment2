function $(selector) {
  return document.querySelector(selector);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const btn = $("#themeBtn");
  if (btn) btn.textContent = theme === "light" ? "🌞" : "🌙";
}

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning 👋";
  if (hour < 18) return "Good afternoon 👋";
  return "Good evening 👋";
}

function greetUser() {
  const nameInput = document.getElementById("nameInput");
  const greetMessage = document.getElementById("greetMessage");

  if (!nameInput || !greetMessage) return;

  const name = nameInput.value.trim();

  if (name === "") {
    greetMessage.textContent = "Please enter your name.";
    return;
  }

  greetMessage.textContent = `Hello, ${name}! Welcome to my portfolio.`;
}

window.greetUser = greetUser;

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const greetingEl = $("#greeting");
  if (greetingEl) greetingEl.textContent = getTimeGreeting();

  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme || "dark");

  const themeBtn = $("#themeBtn");
  themeBtn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });

  const navToggle = $(".nav-toggle");
  const navLinks = $("#nav-links");
  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks?.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });

  const form = $("#contactForm");
  const status = $("#formStatus");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll(".error").forEach((el) => {
      el.textContent = "";
    });
    if (status) status.textContent = "";

    const name = $("#name")?.value.trim();
    const email = $("#email")?.value.trim();
    const message = $("#message")?.value.trim();

    let valid = true;

    if (!name) {
      valid = false;
      document.querySelector('[data-for="name"]').textContent = "Please enter your name.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      valid = false;
      document.querySelector('[data-for="email"]').textContent =
        "Please enter a valid email address.";
    }

    if (!message || message.length < 10) {
      valid = false;
      document.querySelector('[data-for="message"]').textContent =
        "Please enter a message (at least 10 characters).";
    }

    if (!valid) return;

    form.reset();
    if (status) status.textContent = "✅ Message ready to send (no backend connected).";
  });
});