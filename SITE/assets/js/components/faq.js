/**
 * faq.js — Accordion delle domande frequenti in stile Apple.
 */

import { icon } from "../icons.js";
import { FAQ_ITEMS } from "../data.js";

export function renderFaq() {
  const items = FAQ_ITEMS.map(
    (item, i) => `
      <div class="faq-item" data-faq-item data-open="${i === 0}">
        <button type="button" class="faq-item__trigger" data-faq-trigger
                aria-expanded="${i === 0}" aria-controls="faq-panel-${i}">
          <span class="tracking-[-0.02em] font-medium">${item.q}</span>
          ${icon("chevronDown", "faq-item__chevron w-5 h-5")}
        </button>
        <div class="faq-item__panel" id="faq-panel-${i}" role="region">
          <p class="body-copy pb-7 pr-10 text-sm text-white/70">${item.a}</p>
        </div>
      </div>`
  ).join("");

  return `
  <section id="faq" class="section section--divided">
    <div class="container grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">

      <div class="reveal">
        <span class="text-[0.78rem] font-semibold text-indigo-400 tracking-wider uppercase px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          Risposte Chiare
        </span>
        <h2 class="display-2 metal-text mt-3" style="max-width:14ch">Domande Frequenti</h2>
        <p class="lede mt-3">Tutto quello che vuoi sapere su Diariamente, CBT e sicurezza.</p>
      </div>

      <div class="reveal border-y border-white/[0.08]">${items}</div>

    </div>
  </section>`;
}

export function initFaq() {
  const items = Array.from(document.querySelectorAll("[data-faq-item]"));

  items.forEach((item) => {
    const trigger = item.querySelector("[data-faq-trigger]");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const willOpen = item.dataset.open !== "true";

      items.forEach((other) => {
        const open = other === item && willOpen;
        other.dataset.open = String(open);
        const t = other.querySelector("[data-faq-trigger]");
        if (t) t.setAttribute("aria-expanded", String(open));
      });
    });
  });
}
