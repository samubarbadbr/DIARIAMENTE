/**
 * navbar.js — Header fisso in vetro satinato.
 */

import { icon, brandMark } from "../icons.js";
import { NAV_LINKS, APP_URL, SITE } from "../data.js";

export function renderNavbar() {
  const links = NAV_LINKS.map(
    (link) => `<a class="nav-link" href="${link.href}">${link.label}</a>`
  ).join("");

  const drawerLinks = NAV_LINKS.map(
    (link) =>
      `<a class="nav-link py-3 text-[0.98rem]" data-nav-drawer-link href="${link.href}">${link.label}</a>`
  ).join("");

  return `
  <header class="site-nav" data-nav>
    <div class="container site-nav__inner">

      <a href="#top" class="flex items-center gap-3" aria-label="${SITE.name}, torna all'inizio">
        ${brandMark(38)}
        <span class="text-[1.08rem] font-semibold tracking-tight metal-text">${SITE.name}</span>
      </a>

      <nav class="hidden md:flex items-center gap-8" aria-label="Sezioni della pagina">
        ${links}
      </nav>

      <div class="flex items-center gap-3">
        <a href="${APP_URL}" class="btn btn--primary hidden sm:inline-flex !py-2 !px-5 text-[0.88rem]">
          Apri l'App ${icon("arrowRight", "w-4 h-4")}
        </a>
        <button type="button" class="btn btn--ghost md:hidden !p-2" data-nav-toggle
                aria-expanded="false" aria-controls="nav-drawer" aria-label="Apri il menu">
          ${icon("menu", "w-5 h-5")}
        </button>
      </div>

    </div>

    <div class="nav-drawer md:hidden" id="nav-drawer">
      <div class="container flex flex-col gap-1 border-t border-white/[0.08] pt-2 pb-6">
        ${drawerLinks}
        <a href="${APP_URL}" class="btn btn--primary mt-3 w-full">
          Apri l'App ${icon("arrowRight", "w-4 h-4")}
        </a>
      </div>
    </div>
  </header>`;
}

export function initNavbar() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const drawer = document.getElementById("nav-drawer");
  if (!toggle || !drawer) return;

  const setOpen = (open) => {
    drawer.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
    toggle.innerHTML = icon(open ? "close" : "menu", "w-5 h-5");
  };

  toggle.addEventListener("click", () => {
    setOpen(!drawer.classList.contains("is-open"));
  });

  drawer.querySelectorAll("[data-nav-drawer-link]").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}
