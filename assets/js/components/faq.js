/**
 * faq.js — Accordion delle domande frequenti.
 * Una sola risposta aperta per volta, come nelle pagine prodotto Apple.
 */

import { icon } from "../icons.js";
import { FAQ_ITEMS } from "../data.js";

export function renderFaq() {
  const items = FAQ_ITEMS.map(
    (item, i) => `
      <div class="faq-item" data-faq-item data-open="${i === 0}">
        <button type="button" class="faq-item__trigger" data-faq-trigger
                aria-expanded="${i === 0}" aria-controls="faq-panel-${i}">
          <span class="tracking-[-0.02em]">${item.q}</span>
          ${icon("chevronDown", "faq-item__chevron w-5 h-5")}
        </button>
        <div class="faq-item__panel" id="faq-panel-${i}" role="region">
          <p class="body-copy pb-7 pr-10">${item.a}</p>
        </div>
      </div>`
  ).join("");

  return `
  <section id="faq" class="section section--divided">
    <div class="container grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">

      <h2 class="display-2 metal-text reveal" style="max-width:14ch">Domande che arrivano spesso</h2>

      <div class="reveal border-y border-white/[0.08]">${items}</div>

    </div>
  </section>`;
}

export function initFaq() {
  const items = Array.from(document.querySelectorAll("[data-faq-item]"));

  items.forEach((item) => {
    const trigger = item.querySelector("[data-faq-trigger]");

    trigger.addEventListener("click", () => {
      const willOpen = item.dataset.open !== "true";

      items.forEach((other) => {
        const open = other === item && willOpen;
        other.dataset.open = String(open);
        other.querySelector("[data-faq-trigger]").setAttribute("aria-expanded", String(open));
      });
    });
  });
}
