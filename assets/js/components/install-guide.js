/**
 * install-guide.js — Guida all'installazione PWA iOS e Android.
 */

import { icon } from "../icons.js";
import { INSTALL_GUIDE } from "../data.js";

function renderSteps(platformKey) {
  const info = INSTALL_GUIDE[platformKey];
  return `
    <div class="space-y-4">
      <p class="text-xs text-white/50 mb-4">${info.hint}</p>
      <div class="grid gap-4 md:grid-cols-3">
        ${info.steps.map((step, i) => `
          <div class="glass p-5 rounded-2xl border border-white/10 space-y-2 relative" style="animation: reveal-step 0.4s ease forwards ${i * 0.1}s">
            <span class="step-index">${i + 1}</span>
            <div class="w-8 h-8 rounded-xl bg-white/10 text-white grid place-items-center mb-2">
              ${icon(step.icon, "w-4 h-4")}
            </div>
            <h4 class="text-sm font-semibold text-white/90">${step.title}</h4>
            <p class="text-xs text-white/60 leading-relaxed">${step.body}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

export function renderInstallGuide() {
  return `
  <section id="installazione" class="section section--divided">
    <div class="container">

      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
        <div>
          <span class="text-[0.78rem] font-semibold text-indigo-400 tracking-wider uppercase px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Zero App Store
          </span>
          <h2 class="display-2 metal-text mt-3">Come si installa in 10 secondi</h2>
          <p class="lede mt-3">Zero download, nessun aggiornamento da attendere. Vive nel browser.</p>
        </div>

        <div class="tab-switch glass border border-white/10" role="tablist">
          <button type="button" class="tab-switch__btn" role="tab" aria-selected="true" data-platform-tab="ios">
            iPhone e iPad
          </button>
          <button type="button" class="tab-switch__btn" role="tab" aria-selected="false" data-platform-tab="android">
            Android & Desktop
          </button>
        </div>
      </div>

      <div class="mt-10 reveal" id="install-steps-container">
        ${renderSteps("ios")}
      </div>

    </div>
  </section>`;
}

export function initInstallGuide() {
  const buttons = document.querySelectorAll("[data-platform-tab]");
  const container = document.getElementById("install-steps-container");
  if (!buttons.length || !container) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.setAttribute("aria-selected", "false"));
      btn.setAttribute("aria-selected", "true");
      const key = btn.dataset.platformTab;
      container.innerHTML = renderSteps(key);
    });
  });
}
