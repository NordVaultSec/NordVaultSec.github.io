// NordVaultSec — Main JS
const nav = document.getElementById('siteNav');
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
