/**
 * features.js — Bento Box asimmetrica delle funzionalità chiave.
 * Presenta CBT, Supabase Cloud Sync e Personalizzazione Totale.
 */

import { icon } from "../icons.js";
import { FEATURES } from "../data.js";
import { renderWaveform, renderHeatmap } from "./phone-mockup.js";

function renderVisual(kind) {
  if (kind === "cbt-preview") {
    return `
      <div class="glass edge-light rounded-[18px] p-4 mt-6 space-y-3 text-xs">
        <div class="flex justify-between items-center text-white/50">
          <span>Scheda CBT • Ansia & Pensiero Automatico</span>
          <span class="text-indigo-400 font-medium">3 min</span>
        </div>
        <div class="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-white/90">
          <strong>Situazione:</strong> Scadenza imminente al lavoro.
        </div>
        <div class="p-2.5 rounded-xl bg-white/5 text-white/80">
          <strong>Riformulazione CBT:</strong> "Posso procedere un passo alla volta".
        </div>
        <div class="flex items-center gap-2 pt-1">
          <span class="text-white/45">Emozioni:</span>
          <span class="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">Ansia 7/10</span>
          <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">Gratitudine</span>
        </div>
      </div>`;
  }

  if (kind === "cloud-preview") {
    return `
      <div class="glass rounded-[18px] p-4 mt-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 grid place-items-center">
            ${icon("cloud", "w-5 h-5")}
          </div>
          <div>
            <p class="text-sm font-semibold text-white/90">Supabase Cloud Sync</p>
            <p class="text-xs text-emerald-400 font-medium">● Cifrato End-to-End con RLS</p>
          </div>
        </div>
        <span class="px-3 py-1 rounded-full bg-white/10 text-xs text-white/70">Sync 100%</span>
      </div>`;
  }

  if (kind === "custom-preview") {
    return `
      <div class="glass rounded-[18px] p-4 mt-6 space-y-2 text-xs">
        <div class="flex items-center justify-between">
          <span class="text-white/60">Tema Attivo:</span>
          <span class="text-indigo-300 font-medium">Scuro Neon (Cyber Dark)</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-white/60">Domande Custom:</span>
          <span class="text-emerald-400 font-medium">3 attive</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-white/60">Modalità Privacy PIN:</span>
          <span class="text-sky-300 font-medium">Attivata</span>
        </div>
      </div>`;
  }

  if (kind === "waveform") {
    return `
      <div class="glass rounded-[18px] mt-6 p-4 flex items-center gap-3">
        <span class="shrink-0 w-8 h-8 rounded-full grid place-items-center text-[#05070d]"
              style="background:linear-gradient(180deg,#ffffff,#ccd6e6)">
          ${icon("mic", "w-4 h-4", 1.7)}
        </span>
        <div class="flex items-center gap-[3px] h-7 overflow-hidden flex-1">${renderWaveform(28)}</div>
        <span class="text-[0.7rem] text-indigo-300 font-medium">Trascritta</span>
      </div>`;
  }

  if (kind === "heatmap") {
    return `<div class="mt-6">${renderHeatmap(20, 6)}</div>`;
  }

  return "";
}

function renderCard(feature, index) {
  const spanClass = feature.layout === "tall" ? "bento__item--tall" : "bento__item--wide";

  return `
    <article class="glass edge-light spotlight-card ${spanClass} reveal p-7 md:p-8"
             data-spotlight data-reveal-delay="${index * 80}">
      <span class="card-glyph inline-grid place-items-center w-12 h-12 rounded-[16px] border border-white/10 text-white/70"
            style="background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02))">
        ${icon(feature.icon, "w-6 h-6")}
      </span>

      <h3 class="display-3 mt-5 text-white/95">${feature.title}</h3>
      <p class="body-copy mt-3">${feature.body}</p>

      ${renderVisual(feature.visual)}
    </article>`;
}

export function renderFeatures() {
  return `
  <section id="funzionalita" class="section section--divided">
    <div class="container">

      <div class="max-w-[50ch] reveal">
        <span class="text-[0.78rem] font-semibold text-indigo-400 tracking-wider uppercase px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          Funzionalità Principali
        </span>
        <h2 class="display-2 metal-text mt-4">Cinque moduli integrati per il tuo benessere</h2>
        <p class="lede mt-4">
          Dalle schede CBT cliniche al cloud sicuro Supabase: tutto studiato per rendere il diario un rituale quotidiano senza sforzo.
        </p>
      </div>

      <div class="bento mt-14">
        ${FEATURES.map(renderCard).join("")}
      </div>

    </div>
  </section>`;
}
