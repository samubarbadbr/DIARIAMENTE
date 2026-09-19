/**
 * footer.js — Invito finale e footer promozionale.
 */

import { icon, brandMark } from "../icons.js";
import { APP_URL, SITE, FOOTER_COLUMNS } from "../data.js";

export function renderFinalCta() {
  return `
  <section class="section section--divided overflow-hidden">
    <div class="aurora" data-parallax="-0.05"
         style="width:720px;height:430px;bottom:-200px;left:50%;transform:translateX(-50%);opacity:.45;
                background:radial-gradient(circle, rgba(99,102,241,.5), transparent 66%)"></div>

    <div class="container relative text-center reveal">
      <div class="flex justify-center">${brandMark(64)}</div>

      <h2 class="display-2 metal-text mx-auto mt-8" style="max-width:17ch">
        La prima pagina è la più difficile. Dura 3 minuti al giorno.
      </h2>

      <div class="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="${APP_URL}" class="btn btn--primary w-full sm:w-auto !px-8">
          Inizia ora Gratis ${icon("arrowRight", "w-4 h-4")}
        </a>
        <a href="#installazione" class="btn btn--ghost w-full sm:w-auto !px-8">
          ${icon("phone", "w-4 h-4")} Come si installa
        </a>
      </div>
    </div>
  </section>`;
}

export function renderFooter() {
  const columns = FOOTER_COLUMNS.map(
    (column) => `
      <nav aria-label="${column.title}">
        <p class="text-[0.82rem] font-semibold text-white/60 tracking-wider uppercase">${column.title}</p>
        <ul class="mt-4 space-y-3">
          ${column.links
            .map((link) => `<li><a class="footer-link" href="${link.href}">${link.label}</a></li>`)
            .join("")}
        </ul>
      </nav>`
  ).join("");

  return `
  <footer class="border-t border-white/[0.08] pt-16 pb-10">
    <div class="container grid gap-12 md:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.7fr))]">

      <div>
        <a href="#top" class="flex items-center gap-3" aria-label="${SITE.name}, torna all'inizio">
          ${brandMark(40)}
          <span class="text-[1.05rem] font-semibold tracking-tight metal-text">${SITE.name}</span>
        </a>
        <p class="body-copy mt-5" style="max-width:32ch">
          Il diario guidato e la suite CBT che vive nel tuo browser e risiede sulla schermata Home.
        </p>
        <a href="${APP_URL}" class="btn btn--ghost mt-6 !py-2.5 !px-5 text-[0.88rem]">
          Apri la web app ${icon("arrowRight", "w-4 h-4")}
        </a>
      </div>

      ${columns}
    </div>

    <div class="container mt-14 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[0.82rem] text-white/40">
      <p>© <span data-current-year>2026</span> ${SITE.domain} — Tutti i diritti riservati</p>
      <p>Progressive Web App per iOS, Android e Desktop</p>
    </div>
  </footer>`;
}

export function initFooter() {
  const slot = document.querySelector("[data-current-year]");
  if (slot) slot.textContent = String(new Date().getFullYear());
}
