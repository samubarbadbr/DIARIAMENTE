/**
 * features.js — Bento box asimmetrica delle funzionalità chiave.
 * Ogni card può ospitare un piccolo visual che mostra la funzione
 * invece di limitarsi a descriverla.
 */

import { icon } from "../icons.js";
import { FEATURES } from "../data.js";
import { renderWaveform, renderHeatmap } from "./phone-mockup.js";

/** Visual opzionale in coda alla card. */
function renderVisual(kind) {
  if (kind === "waveform") {
    return `
      <div class="glass rounded-[16px] mt-6 p-4 flex items-center gap-3">
        <span class="shrink-0 w-8 h-8 rounded-full grid place-items-center text-[#05070d]"
              style="background:linear-gradient(180deg,#ffffff,#ccd6e6)">
          ${icon("mic", "w-4 h-4", 1.7)}
        </span>
        <div class="flex items-center gap-[3px] h-7 overflow-hidden">${renderWaveform(30)}</div>
        <span class="text-[0.7rem] text-white/40 ml-auto">trascritto</span>
      </div>`;
  }

  if (kind === "heatmap") {
    return `<div class="mt-6">${renderHeatmap(22, 7)}</div>`;
  }

  if (kind === "prompt") {
    return `
      <div class="mt-8 space-y-3">
        <div class="glass edge-light rounded-[16px] p-4">
          <p class="text-[0.72rem] text-white/40">Domanda di stasera</p>
          <p class="text-[1rem] mt-1.5 text-white/90 tracking-[-0.02em]">Che cosa rifaresti uguale?</p>
        </div>
        <div class="glass rounded-[16px] p-4">
          <div class="flex justify-between text-[0.72rem] text-white/45 mb-2.5">
            <span>Umore</span><span class="text-white/85">8 / 10</span>
          </div>
          <div class="track"><div class="track__fill" style="width:80%"></div></div>
        </div>
        <div class="glass rounded-[16px] p-4">
          <div class="flex justify-between text-[0.72rem] text-white/45 mb-2.5">
            <span>Sonno</span><span class="text-white/85">6 / 10</span>
          </div>
          <div class="track"><div class="track__fill" style="width:60%"></div></div>
        </div>
      </div>`;
  }

  return "";
}

function renderCard(feature, index) {
  const spanClass =
    feature.layout === "tall" ? "bento__item--tall" : "bento__item--wide";

  return `
    <article class="glass edge-light spotlight-card ${spanClass} reveal p-7 md:p-8"
             data-spotlight data-reveal-delay="${index * 70}">
      <span class="card-glyph inline-grid place-items-center w-11 h-11 rounded-[14px] border border-white/10 text-white/55"
            style="background:linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.01))">
        ${icon(feature.icon, "w-5 h-5")}
      </span>

      <h3 class="display-3 mt-5 text-white/92">${feature.title}</h3>
      <p class="body-copy mt-3">${feature.body}</p>

      ${renderVisual(feature.visual)}
    </article>`;
}

export function renderFeatures() {
  return `
  <section id="funzionalita" class="section section--divided">
    <div class="container">

      <div class="max-w-[46ch] reveal">
        <h2 class="display-2 metal-text">Cinque strumenti, un rituale di tre minuti</h2>
        <p class="lede mt-5">
          Tutto quello che serve per tenere un diario davvero, senza che diventi un altro impegno da rimandare.
        </p>
      </div>

      <div class="bento mt-14">
        ${FEATURES.map(renderCard).join("")}
      </div>

    </div>
  </section>`;
}
