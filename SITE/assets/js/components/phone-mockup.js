/**
 * phone-mockup.js — Mockup Smartphone / App Preview Interattiva.
 * Riproduce l'interfaccia reale di Diariamente dal file media_1789825506984.png
 * con filtri reattivi, ricerca e 4 schede di navigazione inferiori.
 */

import { icon, brandMark } from "../icons.js";

/** Sample Feed Items for Timeline */
const INITIAL_TIMELINE_ITEMS = [
  {
    id: 1,
    type: "Riflessione",
    category: "Riflessione",
    emotion: "Gratitudine",
    title: "Micro-vittoria del giorno",
    date: "Oggi, 19:42",
    content: "Sono riuscito a parlare in pubblico durante la riunione senza farmi sopraffare dall'ansia. Ho fatto tre respiri profondi.",
    meta: "Energia: 8/10 • Umore: Sereno"
  },
  {
    id: 2,
    type: "Scheda CBT",
    category: "Pensiero",
    emotion: "Ansia",
    title: "Riconcettualizzazione Ansia da prestazione",
    date: "Ieri, 21:15",
    content: "Pensiero automatico: 'Sbaglierò sicuramente'. Riformulazione CBT: 'Ho studiato i dati, è normale provare un po' di tensione'.",
    meta: "Intensità iniziale: 8/10 ➔ Finale: 3/10"
  },
  {
    id: 3,
    type: "Diario & Appunti",
    category: "Promemoria",
    emotion: "Rabbia",
    title: "Nota vocale trascritta",
    date: "17 Set, 14:30",
    content: "Audio trascritto: 'Oggi ho capito che quando provo rabbia posso fermarmi 60 secondi prima di rispondere alle mail.'",
    audioDuration: "0:42",
    meta: "Trascrizione automatica attiva"
  }
];

export function renderWaveform(bars = 24) {
  return Array.from({ length: bars })
    .map((_, i) => {
      const height = 6 + ((i * 11) % 18);
      return `<span class="wave-bar" style="height:${height}px;animation-delay:${i * 50}ms"></span>`;
    })
    .join("");
}

export function renderHeatmap(columns = 16, rows = 7) {
  const shades = [
    "rgba(255,255,255,.06)",
    "rgba(99,102,241,.35)",
    "rgba(56,189,248,.65)",
    "rgba(16,185,129,.9)"
  ];

  const cells = [];
  for (let col = 0; col < columns; col += 1) {
    for (let row = 0; row < rows; row += 1) {
      const seed = (col * 7 + row * 3) % 11;
      const level = seed > 8 ? 3 : seed > 5 ? 2 : seed > 2 ? 1 : 0;
      const delay = col * 20 + row * 8;
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
  <div class="relative max-w-[420px] mx-auto" data-parallax="0.06">
    <div class="device-halo"></div>

    <div class="device-frame float-soft">
      <div class="device-screen" id="app-mockup-screen">

        <!-- Notch superiore -->
        <div class="device-notch"></div>

        <!-- Status Bar -->
        <div class="flex items-center justify-between px-6 pt-3 pb-1 text-[0.68rem] text-white/50 border-b border-white/5 select-none">
          <span class="font-medium text-white/80">9:41</span>
          <div class="flex items-center gap-1.5">
            <span class="text-[0.6rem] text-emerald-400">5G</span>
            <span class="inline-block w-5 h-2.5 rounded-[3px] border border-white/40 relative">
              <span class="absolute inset-0.5 bg-emerald-400 rounded-[1px] w-3.5"></span>
            </span>
          </div>
        </div>

        <!-- App Header (Matching Screenshot) -->
        <div class="px-4 py-3 bg-[#080b12] border-b border-white/10 flex items-center justify-between sticky top-0 z-20">
          <div class="flex items-center gap-2">
            ${brandMark(28, false)}
            <span class="font-semibold text-[0.95rem] text-white tracking-tight">Diariamente</span>
          </div>

          <div class="flex items-center gap-2">
            <button type="button" class="w-7 h-7 rounded-full bg-white/5 grid place-items-center text-white/70 hover:text-white hover:bg-white/10" title="Privacy">
              ${icon("eye", "w-3.5 h-3.5")}
            </button>
            <button type="button" class="w-7 h-7 rounded-full bg-white/5 grid place-items-center text-white/70 hover:text-white hover:bg-white/10" title="Tema Scuro Neon">
              ${icon("sun", "w-3.5 h-3.5")}
            </button>
            <button type="button" class="app-pill-btn--white px-2.5 py-1 text-[0.7rem] flex items-center gap-1">
              ${icon("plus", "w-3 h-3")} Nuova
            </button>
          </div>
        </div>

        <!-- Dynamic Content Screen Container -->
        <div class="flex-1 overflow-y-auto custom-scrollbar p-3.5 space-y-3.5" id="mockup-tab-content">
          ${renderTimelineTabContent("Tutte le categorie", "")}
        </div>

        <!-- Bottom Navigation Bar (Matching 4 tabs from screenshot) -->
        <div class="app-bottom-nav px-3 py-2 flex items-center justify-between sticky bottom-0 z-20">
          <button type="button" class="app-nav-tab is-active" data-mockup-tab="timeline">
            ${icon("clock", "w-4 h-4 mb-0.5")}
            <span>Timeline</span>
          </button>
          <button type="button" class="app-nav-tab" data-mockup-tab="dashboard">
            ${icon("chart", "w-4 h-4 mb-0.5")}
            <span>Dashboard</span>
          </button>
          <button type="button" class="app-nav-tab" data-mockup-tab="custom">
            ${icon("helpCircle", "w-4 h-4 mb-0.5")}
            <span>Domande Custom</span>
          </button>
          <button type="button" class="app-nav-tab" data-mockup-tab="settings">
            ${icon("settings", "w-4 h-4 mb-0.5")}
            <span>Impostazioni</span>
          </button>
        </div>

      </div>
    </div>
  </div>`;
}

/** Render content for Tab 1: Timeline */
export function renderTimelineTabContent(activeCategory = "Tutte le categorie", activeEmotion = "") {
  let filteredItems = INITIAL_TIMELINE_ITEMS;

  if (activeCategory !== "Tutte le categorie") {
    filteredItems = filteredItems.filter(item => item.category === activeCategory || item.type === activeCategory);
  }

  if (activeEmotion) {
    filteredItems = filteredItems.filter(item => item.emotion === activeEmotion);
  }

  const categoryOptions = ["Tutte le categorie", "Riflessione", "Gratitudine", "Pensiero", "Obiettivo", "Promemoria", "Altro"];
  const emotionOptions = ["Ansia", "Colpa", "Frustrazione", "Paura", "Rabbia", "Tristezza", "Vergogna"];

  return `
    <!-- Subheader Timeline -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-[1.1rem] font-bold text-white tracking-tight">Timeline</h2>
        <div class="flex items-center gap-1.5 text-[0.65rem] text-emerald-400 mt-0.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot"></span>
          <span>Sincronizzazione Supabase attiva</span>
        </div>
      </div>
      <div class="flex items-center gap-1.5">
        <button class="app-pill-btn text-[0.65rem] flex items-center gap-1">
          ${icon("eye", "w-3 h-3")} Privacy
        </button>
        <button class="app-pill-btn--white px-2 py-1 text-[0.65rem]">
          + Appunto Diario
        </button>
      </div>
    </div>

    <!-- Main View Pills -->
    <div class="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/5 text-[0.68rem]">
      <button class="flex-1 py-1 px-2 rounded-lg bg-white/10 text-white font-medium text-center">Tutto Insieme (${filteredItems.length})</button>
      <button class="flex-1 py-1 px-2 rounded-lg text-white/50 text-center hover:text-white">Schede CBT</button>
      <button class="flex-1 py-1 px-2 rounded-lg text-white/50 text-center hover:text-white">Diario & Appunti</button>
    </div>

    <!-- Quick Prompt Banner -->
    <div class="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-2">
      <div class="flex items-start gap-2.5">
        <div class="w-7 h-7 rounded-xl bg-indigo-500/20 border border-indigo-500/30 grid place-items-center shrink-0 text-indigo-300">
          ${icon("notebook", "w-3.5 h-3.5")}
        </div>
        <div>
          <p class="text-[0.72rem] font-medium text-white/90">Hai qualcosa da appuntarti oggi?</p>
          <p class="text-[0.62rem] text-white/45">Scrivi un appunto, riflessione o gratitudine...</p>
        </div>
      </div>
      <button class="app-pill-btn--white text-[0.65rem] shrink-0 py-1 px-2.5">+ Scrivi</button>
    </div>

    <!-- Search Bar -->
    <div class="relative">
      <input type="text" id="mockup-search-input" placeholder="Cerca per parole chiave in tutto il diario..."
             class="w-full bg-white/5 border border-white/10 rounded-xl py-1.5 pl-8 pr-3 text-[0.7rem] text-white placeholder-white/35 focus:outline-none focus:border-indigo-500/50" />
      <span class="absolute left-2.5 top-2 text-white/35">
        ${icon("search", "w-3.5 h-3.5")}
      </span>
    </div>

    <!-- Category Filters -->
    <div class="space-y-1.5">
      <p class="text-[0.6rem] font-semibold tracking-wider text-white/40 uppercase">Filtra Categoria Appunto:</p>
      <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1" id="mockup-category-pills">
        ${categoryOptions.map(cat => `
          <button type="button" data-mockup-cat="${cat}" class="app-pill-btn text-[0.65rem] ${activeCategory === cat ? 'is-active' : ''}">
            ${cat}
          </button>
        `).join("")}
      </div>
    </div>

    <!-- Emotion Filters -->
    <div class="space-y-1.5">
      <p class="text-[0.65rem] text-white/40 flex items-center gap-1">
        ${icon("sparkle", "w-3 h-3 text-indigo-400")} Emozioni Schede CBT:
      </p>
      <div class="flex flex-wrap gap-1" id="mockup-emotion-pills">
        ${emotionOptions.map(emo => `
          <button type="button" data-mockup-emo="${emo}" class="app-tag-emotion ${activeEmotion === emo ? 'is-active' : ''}">
            ${emo}
          </button>
        `).join("")}
      </div>
    </div>

    <!-- Dynamic Cards or Empty State -->
    <div class="space-y-2.5 pt-1">
      ${filteredItems.length > 0 ? filteredItems.map(item => `
        <div class="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-all space-y-1.5">
          <div class="flex items-center justify-between text-[0.65rem]">
            <span class="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">${item.type}</span>
            <span class="text-white/40">${item.date}</span>
          </div>
          <h4 class="text-[0.82rem] font-semibold text-white/90 leading-tight">${item.title}</h4>
          <p class="text-[0.72rem] text-white/65 leading-relaxed">${item.content}</p>

          ${item.audioDuration ? `
            <div class="p-2 rounded-xl bg-white/5 flex items-center gap-2 mt-2">
              <span class="w-6 h-6 rounded-full bg-indigo-500 text-white grid place-items-center shrink-0">
                ${icon("mic", "w-3 h-3")}
              </span>
              <div class="flex items-center gap-[2px] h-5 overflow-hidden flex-1">${renderWaveform(18)}</div>
              <span class="text-[0.6rem] text-white/50">${item.audioDuration}</span>
            </div>
          ` : ''}

          <div class="flex items-center justify-between pt-1 border-t border-white/5 text-[0.62rem] text-white/45">
            <span>Emozione: <strong class="text-indigo-300">${item.emotion}</strong></span>
            <span>${item.meta}</span>
          </div>
        </div>
      `).join("") : `
        <!-- Empty State from Screenshot -->
        <div class="py-8 px-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center space-y-2">
          <div class="w-10 h-10 rounded-full bg-white/5 grid place-items-center mx-auto text-white/40">
            ${icon("calendar", "w-5 h-5")}
          </div>
          <p class="text-[0.82rem] font-semibold text-white/90">Nessuna voce trovata nella timeline</p>
          <p class="text-[0.68rem] text-white/50 max-w-[240px] mx-auto">
            Inizia registrando una scheda CBT o scrivendo un appunto di riflessione nel tuo diario.
          </p>
          <div class="pt-2 flex justify-center gap-2">
            <button class="app-pill-btn--white text-[0.65rem] px-3 py-1.5">+ Nuova Scheda CBT</button>
          </div>
        </div>
      `}

      <!-- Toast active theme banner from screenshot -->
      <div class="p-2 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center gap-2 text-[0.65rem] text-indigo-200">
        <span class="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 grid place-items-center">✓</span>
        <span>Tema attivo: <strong>Scuro Neon (Cyber Dark)</strong></span>
      </div>
    </div>
  `;
}

/** Render content for Tab 2: Dashboard */
export function renderDashboardTabContent() {
  return `
    <div class="space-y-3.5">
      <div class="flex items-center justify-between">
        <h2 class="text-[1.1rem] font-bold text-white tracking-tight">Dashboard & Analytics</h2>
        <span class="text-[0.65rem] text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded-full">Ultimi 30 giorni</span>
      </div>

      <!-- Emotion Analytics Breakdown -->
      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
        <p class="text-[0.75rem] font-semibold text-white/90">Distribuzione Emozioni</p>

        <div class="space-y-2">
          <div>
            <div class="flex justify-between text-[0.68rem] text-white/70 mb-1">
              <span>Gratitudine & Positività</span><span class="text-emerald-400 font-medium">42%</span>
            </div>
            <div class="track"><div class="track__fill !bg-emerald-400" style="width:42%"></div></div>
          </div>

          <div>
            <div class="flex justify-between text-[0.68rem] text-white/70 mb-1">
              <span>Ansia & Tensione</span><span class="text-indigo-400 font-medium">31%</span>
            </div>
            <div class="track"><div class="track__fill !bg-indigo-500" style="width:31%"></div></div>
          </div>

          <div>
            <div class="flex justify-between text-[0.68rem] text-white/70 mb-1">
              <span>Paura & Incertezza</span><span class="text-sky-400 font-medium">17%</span>
            </div>
            <div class="track"><div class="track__fill !bg-sky-400" style="width:17%"></div></div>
          </div>

          <div>
            <div class="flex justify-between text-[0.68rem] text-white/70 mb-1">
              <span>Rabbia & Frustrazione</span><span class="text-rose-400 font-medium">10%</span>
            </div>
            <div class="track"><div class="track__fill !bg-rose-500" style="width:10%"></div></div>
          </div>
        </div>
      </div>

      <!-- Heatmap della Costanza -->
      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
        <div class="flex items-center justify-between">
          <p class="text-[0.75rem] font-semibold text-white/90">Costanza di Journaling</p>
          <span class="text-[0.62rem] text-white/45">Ultimi 4 mesi</span>
        </div>
        ${renderHeatmap(16, 6)}
        <p class="text-[0.62rem] text-white/50 text-right">28 giorni consecutivi 🔥</p>
      </div>

      <!-- Serenità media -->
      <div class="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/50 to-slate-900/50 border border-indigo-500/30 flex items-center justify-between">
        <div>
          <p class="text-[0.65rem] text-white/50">Indice medio di benessere</p>
          <p class="text-[1.3rem] font-bold text-white mt-0.5">8.4 <span class="text-[0.75rem] text-white/50 font-normal">/ 10</span></p>
        </div>
        <div class="text-emerald-400 text-[0.75rem] font-medium flex items-center gap-1">
          <span>+1.2 vs mese scorso</span> ↑
        </div>
      </div>
    </div>
  `;
}

/** Render content for Tab 3: Domande Custom */
export function renderCustomTabContent() {
  return `
    <div class="space-y-3.5">
      <div class="flex items-center justify-between">
        <h2 class="text-[1.1rem] font-bold text-white tracking-tight">Domande Custom</h2>
        <button class="app-pill-btn--white text-[0.65rem] px-2.5 py-1">+ Crea nuova</button>
      </div>
      <p class="text-[0.7rem] text-white/60">
        Personalizza i quesiti che ti vengono posti durante il rituale serale o mattutino.
      </p>

      <!-- Active Questions list -->
      <div class="space-y-2">
        <div class="p-3 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
          <div class="flex justify-between items-center">
            <span class="text-[0.62rem] text-indigo-300 font-medium">Domanda #1 • Slider 1-10</span>
            <span class="text-emerald-400 text-[0.65rem]">Attiva</span>
          </div>
          <p class="text-[0.82rem] font-semibold text-white/95">"Quanto ti senti sopraffatto dagli impegni oggi?"</p>
          <div class="track"><div class="track__fill" style="width:40%"></div></div>
        </div>

        <div class="p-3 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
          <div class="flex justify-between items-center">
            <span class="text-[0.62rem] text-indigo-300 font-medium">Domanda #2 • Scelta Multipla</span>
            <span class="text-emerald-400 text-[0.65rem]">Attiva</span>
          </div>
          <p class="text-[0.82rem] font-semibold text-white/95">"Quale abitudine ti ha fatto stare meglio?"</p>
          <div class="flex flex-wrap gap-1 text-[0.65rem]">
            <span class="px-2 py-0.5 rounded-full bg-white/10 text-white/80">Passeggiata</span>
            <span class="px-2 py-0.5 rounded-full bg-white/10 text-white/80">Meditazione</span>
            <span class="px-2 py-0.5 rounded-full bg-white/10 text-white/80">Lettura</span>
          </div>
        </div>

        <div class="p-3 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
          <div class="flex justify-between items-center">
            <span class="text-[0.62rem] text-indigo-300 font-medium">Domanda #3 • Testo Libero / Audio</span>
            <span class="text-emerald-400 text-[0.65rem]">Attiva</span>
          </div>
          <p class="text-[0.82rem] font-semibold text-white/95">"Per cosa provi sincera gratitudine in questo momento?"</p>
        </div>
      </div>
    </div>
  `;
}

/** Render content for Tab 4: Impostazioni */
export function renderSettingsTabContent() {
  return `
    <div class="space-y-3.5">
      <h2 class="text-[1.1rem] font-bold text-white tracking-tight">Impostazioni App</h2>

      <div class="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
        <p class="text-[0.75rem] font-semibold text-white/90">Tema Visivo</p>
        <div class="grid grid-cols-2 gap-2 text-[0.7rem]">
          <div class="p-2.5 rounded-xl bg-indigo-950/70 border border-indigo-500 text-center font-medium text-white shadow-lg">
            Scuro Neon (Cyber) ✓
          </div>
          <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center text-white/50 hover:text-white">
            Minimal Dark
          </div>
        </div>
      </div>

      <div class="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5 text-[0.75rem]">
        <div class="flex items-center justify-between py-1 border-b border-white/5">
          <span class="text-white/80">Sincronizzazione Cloud Supabase</span>
          <span class="text-emerald-400 font-semibold">Attiva</span>
        </div>
        <div class="flex items-center justify-between py-1 border-b border-white/5">
          <span class="text-white/80">Protezione PIN & Biometria</span>
          <span class="text-emerald-400 font-semibold">Attiva</span>
        </div>
        <div class="flex items-center justify-between py-1">
          <span class="text-white/80">Notifiche Rituale Serale</span>
          <span class="text-white/40">21:30</span>
        </div>
      </div>

      <div class="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
        <p class="text-[0.75rem] font-semibold text-white/90">Gestione Dati</p>
        <button class="w-full py-2 rounded-xl bg-white/5 border border-white/10 text-[0.72rem] text-white/80 hover:bg-white/10 text-center font-medium">
          Esporta Archivio (.JSON / .PDF)
        </button>
      </div>
    </div>
  `;
}

/** Initialize mockup event listeners for interactivity */
export function initPhoneMockupInteractivity() {
  const container = document.getElementById("mockup-tab-content");
  const navTabs = document.querySelectorAll("[data-mockup-tab]");
  if (!container || !navTabs.length) return;

  let currentCategory = "Tutte le categorie";
  let currentEmotion = "";

  // Tab switcher
  navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      navTabs.forEach(t => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const tabName = tab.dataset.mockupTab;
      if (tabName === "timeline") {
        container.innerHTML = renderTimelineTabContent(currentCategory, currentEmotion);
        bindTimelineFilters();
      } else if (tabName === "dashboard") {
        container.innerHTML = renderDashboardTabContent();
      } else if (tabName === "custom") {
        container.innerHTML = renderCustomTabContent();
      } else if (tabName === "settings") {
        container.innerHTML = renderSettingsTabContent();
      }
    });
  });

  function bindTimelineFilters() {
    const catButtons = document.querySelectorAll("[data-mockup-cat]");
    const emoButtons = document.querySelectorAll("[data-mockup-emo]");
    const searchInput = document.getElementById("mockup-search-input");

    catButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        currentCategory = btn.dataset.mockupCat;
        container.innerHTML = renderTimelineTabContent(currentCategory, currentEmotion);
        bindTimelineFilters();
      });
    });

    emoButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        currentEmotion = currentEmotion === btn.dataset.mockupEmo ? "" : btn.dataset.mockupEmo;
        container.innerHTML = renderTimelineTabContent(currentCategory, currentEmotion);
        bindTimelineFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const cards = container.querySelectorAll(".p-3.rounded-2xl");
        cards.forEach(card => {
          const text = card.textContent.toLowerCase();
          card.style.display = text.includes(query) ? "block" : "none";
        });
      });
    }
  }

  bindTimelineFilters();
}
