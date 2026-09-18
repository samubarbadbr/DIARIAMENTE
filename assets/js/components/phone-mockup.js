/**
 * phone-mockup.js — Frame smartphone che mostra l'interfaccia di Diariamente.
 * Le micro-animazioni interne (forma d'onda, heatmap) rendono la schermata
 * viva senza distrarre dal testo dell'hero.
 */

import { icon, brandMark } from "../icons.js";

/** Barre animate che simulano una registrazione vocale. */
export function renderWaveform(bars = 26) {
  return Array.from({ length: bars })
    .map((_, i) => {
      const height = 8 + ((i * 13) % 20);
      return `<span class="wave-bar" style="height:${height}px;animation-delay:${i * 58}ms"></span>`;
    })
    .join("");
}

/**
 * Griglia della costanza in stile GitHub.
 * I livelli sono generati in modo deterministico: stesso disegno a ogni carico.
 */
export function renderHeatmap(columns = 17, rows = 7) {
  const shades = [
    "rgba(255,255,255,.06)",
    "rgba(148,163,184,.34)",
    "rgba(199,210,254,.6)",
    "rgba(238,242,255,.93)"
  ];

  const cells = [];
  for (let col = 0; col < columns; col += 1) {
    for (let row = 0; row < rows; row += 1) {
      const seed = (col * 7 + row * 3) % 11;
      const level = seed > 8 ? 3 : seed > 5 ? 2 : seed > 2 ? 1 : 0;
      const delay = col * 24 + row * 8;
      cells.push(
        `<span class="heat-cell" style="background:${shades[level]};animation-delay:${delay}ms"></span>`
      );
    }
  }

  return `
    <div class="grid gap-[3px]"
         style="grid-auto-flow:column;grid-template-columns:repeat(${columns},minmax(0,1fr));grid-template-rows:repeat(${rows},minmax(0,1fr))">
      ${cells.join("")}
    </div>`;
}

export function renderPhoneMockup() {
  return `
  <div class="relative" data-parallax="0.06">
    <div class="device-halo"></div>

    <div class="device-frame float-soft" style="width:300px">
      <div class="device-screen">
        <div class="device-notch"></div>

        <div class="flex items-center justify-between px-6 pt-4 pb-1 text-[0.7rem] text-white/50">
          <span>9:41</span>
          <span class="inline-block w-5 h-2.5 rounded-[3px] border border-white/40"></span>
        </div>

        <div class="px-5 pb-5 pt-3">

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              ${brandMark(30, false)}
              <div class="leading-tight">
                <p class="text-[0.8rem] text-white/90">Buonasera, Marta</p>
                <p class="text-[0.68rem] text-white/45">giovedì 17 settembre</p>
              </div>
            </div>
            <span class="text-[0.68rem] rounded-full border border-white/10 px-2.5 py-1 text-white/55">28 giorni</span>
          </div>

          <!-- Domanda guidata del giorno -->
          <div class="glass edge-light rounded-[18px] p-4 mt-5">
            <p class="text-[0.7rem] text-white/45">Domanda di oggi</p>
            <p class="text-[1.02rem] leading-snug mt-1.5 text-white/92 tracking-[-0.02em]">
              Cosa ti ha richiesto più energia?
            </p>

            <div class="mt-4">
              <div class="flex justify-between text-[0.68rem] text-white/45 mb-2">
                <span>Energia</span><span class="text-white/85">7 / 10</span>
              </div>
              <div class="track">
                <div class="track__fill" style="width:70%"></div>
                <span class="absolute -top-[5px] w-4 h-4 rounded-full bg-white"
                      style="left:calc(70% - 8px);box-shadow:0 0 20px 2px rgba(199,210,254,.85)"></span>
              </div>
            </div>
          </div>

          <!-- Nota vocale -->
          <div class="glass rounded-[18px] p-3.5 mt-3 flex items-center gap-3">
            <span class="shrink-0 w-9 h-9 rounded-full grid place-items-center text-[#05070d]"
                  style="background:linear-gradient(180deg,#ffffff,#ccd6e6)">
              ${icon("mic", "w-4 h-4", 1.7)}
            </span>
            <div class="flex items-center gap-[3px] h-7">${renderWaveform()}</div>
            <span class="text-[0.68rem] text-white/45 ml-auto">0:34</span>
          </div>

          <!-- Costanza -->
          <div class="glass rounded-[18px] p-4 mt-3">
            <div class="flex items-center justify-between mb-3">
              <p class="text-[0.75rem] text-white/85">Costanza</p>
              <p class="text-[0.68rem] text-white/45">ultimi 4 mesi</p>
            </div>
            ${renderHeatmap()}
          </div>

          <div class="mt-4 flex items-center justify-between px-2 text-white/40">
            ${icon("notebook", "w-5 h-5 text-white")}
            ${icon("grid", "w-5 h-5")}
            ${icon("compass", "w-5 h-5")}
            ${icon("shield", "w-5 h-5")}
          </div>

        </div>
      </div>
    </div>
  </div>`;
}
