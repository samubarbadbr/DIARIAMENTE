/**
 * install-guide.js — Guida a tab per installare la PWA su iOS e Android.
 * I passaggi sono una sequenza reale, quindi la numerazione è informativa.
 */

import { icon } from "../icons.js";
import { INSTALL_GUIDE } from "../data.js";

const PLATFORM_KEYS = Object.keys(INSTALL_GUIDE);

function renderSteps(platformKey) {
  const platform = INSTALL_GUIDE[platformKey];

  const steps = platform.steps
    .map(
      (step, i) => `
      <li class="glass edge-light spotlight-card p-7" data-spotlight
          style="animation:reveal-step 620ms var(--ease-out-soft) ${i * 90}ms both">
        <div class="flex items-center justify-between">
          <span class="card-glyph inline-grid place-items-center w-11 h-11 rounded-[14px] border border-white/10 text-white/55"
                style="background:linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.01))">
            ${icon(step.icon, "w-5 h-5")}
          </span>
          <span class="step-index">${i + 1}</span>
        </div>
        <h3 class="mt-5 text-[1.02rem] text-white/92 tracking-[-0.02em]">${step.title}</h3>
        <p class="body-copy mt-2.5 text-[0.9rem]">${step.body}</p>
      </li>`
    )
    .join("");

  return `
    <ol class="grid gap-4 md:grid-cols-3">${steps}</ol>
    <p class="mt-6 text-[0.85rem] text-white/45 flex items-center gap-2">
      ${icon("sparkle", "w-4 h-4 text-indigo-300", 1.6)} ${platform.hint}
    </p>`;
}

export function renderInstallGuide() {
  const tabs = PLATFORM_KEYS.map(
    (key, i) => `
      <button type="button" role="tab" class="tab-switch__btn"
              id="tab-${key}" aria-controls="panel-install" data-platform="${key}"
              aria-selected="${i === 0}">${INSTALL_GUIDE[key].label}</button>`
  ).join("");

  return `
  <section id="installazione" class="section section--divided overflow-hidden">
    <div class="aurora" data-parallax="0.06"
         style="width:560px;height:420px;top:60px;left:56%;opacity:.28;
                background:radial-gradient(circle, rgba(99,102,241,.4), transparent 66%)"></div>

    <div class="container relative">

      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 reveal">
        <div class="max-w-[44ch]">
          <h2 class="display-2 metal-text">Installalo dalla schermata Home</h2>
          <p class="lede mt-5">
            Diariamente è una PWA: la stessa pagina che stai leggendo diventa un'app con la sua icona.
            Tre passaggi, una volta sola.
          </p>
        </div>

        <div class="glass tab-switch self-start" role="tablist" aria-label="Scegli il sistema operativo">
          ${tabs}
        </div>
      </div>

      <div class="mt-12 reveal" id="panel-install" role="tabpanel" aria-labelledby="tab-ios" data-install-panel>
        ${renderSteps(PLATFORM_KEYS[0])}
      </div>

    </div>
  </section>`;
}

/** Cambia piattaforma e ridisegna solo il pannello dei passaggi. */
export function initInstallGuide() {
  const buttons = document.querySelectorAll("[data-platform]");
  const panel = document.querySelector("[data-install-panel]");
  if (!panel || !buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.platform;

      buttons.forEach((b) => b.setAttribute("aria-selected", String(b === button)));
      panel.setAttribute("aria-labelledby", `tab-${key}`);
      panel.innerHTML = renderSteps(key);

      // Le card appena create devono riagganciare lo spotlight del cursore.
      document.dispatchEvent(new CustomEvent("diariamente:rebind-spotlight"));
    });
  });
}
