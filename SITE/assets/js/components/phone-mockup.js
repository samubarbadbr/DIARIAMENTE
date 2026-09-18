/**
 * phone-mockup.js — Frame smartphone che mostra l'interfaccia di Diariamente.
 * Le micro-animazioni interne (forma d'onda, heatmap) rendono la schermata
 * viva senza distrarre dal testo dell'hero. Aggiunta l'interattività.
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
        <div class="device-notch z-20 relative"></div>

        <!-- Notifica push simulata -->
        <div class="absolute top-8 left-3 right-3 z-10 glass rounded-[14px] p-3 flex items-start gap-2.5 transition-transform duration-700 ease-out transform -translate-y-[150%] shadow-2xl shadow-indigo-500/10" id="push-notification">
          ${brandMark(24, false)}
          <div class="flex-1">
            <div class="flex justify-between items-center mb-0.5">
              <span class="text-[0.7rem] font-medium text-white/90">Diariamente</span>
              <span class="text-[0.65rem] text-white/40">ora</span>
            </div>
            <p class="text-[0.7rem] text-white/70 leading-snug tracking-tight">Tempo per te: com'è andata la tua giornata?</p>
          </div>
        </div>

        <div class="flex items-center justify-between px-6 pt-4 pb-1 text-[0.7rem] text-white/50 relative z-0">
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
            <span class="text-[0.68rem] rounded-full border border-white/10 px-2.5 py-1 text-white/55" id="streak-badge">28 giorni</span>
          </div>

          <!-- Domanda guidata del giorno -->
          <div class="glass edge-light rounded-[18px] p-4 mt-5 relative transition-all duration-300" id="daily-prompt-card">
            <p class="text-[0.7rem] text-white/45" id="daily-prompt-subtitle">Domanda di oggi</p>
            <p class="text-[1.02rem] leading-snug mt-1.5 text-white/92 tracking-[-0.02em]" id="daily-prompt-title">
              Cosa ti ha richiesto più energia?
            </p>

            <div class="mt-4">
              <div class="flex justify-between text-[0.68rem] text-white/45 mb-2">
                <span>Energia</span><span class="text-white/85" id="energy-val">7 / 10</span>
              </div>
              <div class="track relative">
                <div class="track__fill" id="energy-fill" style="width:70%"></div>
                <input type="range" min="1" max="10" value="7" class="absolute inset-0 w-full opacity-0 cursor-pointer z-10" id="energy-slider" />
                <span class="absolute -top-[5px] w-4 h-4 rounded-full bg-white pointer-events-none transition-all duration-75"
                      id="energy-thumb"
                      style="left:calc(70% - 8px);box-shadow:0 0 20px 2px rgba(199,210,254,.85)"></span>
              </div>
            </div>
          </div>

          <!-- Nota vocale interattiva -->
          <button type="button" class="glass w-full rounded-[18px] p-3.5 mt-3 flex items-center gap-3 hover:bg-white/5 transition-colors cursor-pointer text-left" id="record-btn">
            <span class="shrink-0 w-9 h-9 rounded-full grid place-items-center text-[#05070d] transition-all duration-300"
                  id="mic-icon-bg"
                  style="background:linear-gradient(180deg,#ffffff,#ccd6e6)">
              ${icon("mic", "w-4 h-4", 1.7)}
            </span>
            
            <div class="flex items-center gap-[3px] h-7 opacity-30 transition-opacity duration-300" id="waveform-container">
              ${renderWaveform()}
            </div>
            <span class="text-[0.68rem] text-white/45 ml-auto" id="record-time">Tocca per parlare</span>
          </button>

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

export function initPhoneMockup() {
  const pushNotification = document.getElementById("push-notification");
  if (pushNotification) {
    setTimeout(() => {
      pushNotification.style.transform = "translateY(0)";
      
      // Nascondi dopo 5 secondi
      setTimeout(() => {
        pushNotification.style.transform = "translateY(-150%)";
      }, 5000);
    }, 2000);
  }

  const slider = document.getElementById("energy-slider");
  const fill = document.getElementById("energy-fill");
  const thumb = document.getElementById("energy-thumb");
  const valText = document.getElementById("energy-val");
  
  if (slider) {
    slider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      const percent = (val / 10) * 100;
      
      fill.style.width = \`\${percent}%\`;
      thumb.style.left = \`calc(\${percent}% - 8px)\`;
      valText.textContent = \`\${val} / 10\`;
      
      // Cambia colore pollice in base all'energia
      if (val < 4) {
        thumb.style.boxShadow = "0 0 20px 2px rgba(239,68,68,.85)";
      } else if (val > 7) {
        thumb.style.boxShadow = "0 0 20px 2px rgba(34,197,94,.85)";
      } else {
        thumb.style.boxShadow = "0 0 20px 2px rgba(199,210,254,.85)";
      }
    });
  }

  const recordBtn = document.getElementById("record-btn");
  const micIconBg = document.getElementById("mic-icon-bg");
  const waveformContainer = document.getElementById("waveform-container");
  const recordTime = document.getElementById("record-time");
  
  let isRecording = false;
  let recordTimer;
  let seconds = 0;

  if (recordBtn) {
    recordBtn.addEventListener("click", () => {
      isRecording = !isRecording;
      
      if (isRecording) {
        micIconBg.style.background = "linear-gradient(180deg,#f87171,#dc2626)";
        micIconBg.style.transform = "scale(1.1)";
        waveformContainer.style.opacity = "1";
        
        seconds = 0;
        recordTime.textContent = "0:00";
        recordTime.classList.add("text-red-400");
        
        recordTimer = setInterval(() => {
          seconds++;
          const mins = Math.floor(seconds / 60);
          const secs = seconds % 60;
          recordTime.textContent = \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
          
          if(seconds === 3) {
            document.getElementById("daily-prompt-subtitle").textContent = "Trascrizione in corso...";
          }
          if(seconds === 5) {
             document.getElementById("daily-prompt-title").textContent = "Oggi il lavoro è stato estenuante, ma ho concluso quel progetto importante.";
             document.getElementById("daily-prompt-title").classList.add("text-indigo-200");
          }
        }, 1000);
      } else {
        clearInterval(recordTimer);
        micIconBg.style.background = "linear-gradient(180deg,#ffffff,#ccd6e6)";
        micIconBg.style.transform = "scale(1)";
        waveformContainer.style.opacity = "0.3";
        recordTime.textContent = "Salvato";
        recordTime.classList.remove("text-red-400");
        
        setTimeout(() => {
           document.getElementById("daily-prompt-subtitle").textContent = "Nota salvata";
        }, 1000);
      }
    });
  }
}
