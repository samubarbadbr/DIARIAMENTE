/**
 * phone-mockup.js — Showcase Mockup Interattivo 1:1 dell'App Diariamente.
 * Estratto direttamente dal codice sorgente reale (TimelineView, DashboardView, CustomQuestionsView, SettingsView, BottomNav).
 */

import { icon, brandMark } from "../icons.js";

const SAMPLE_ENTRIES = [
  {
    id: "entry-1",
    type: "cbt",
    date: "Oggi, 19:42",
    situation: "Presentazione del progetto davanti al team",
    negativeThought: "Pensiero automatico: 'Sbaglierò i dati e farò una brutta figura'",
    alternativeThought: "Riformulazione CBT: 'Ho ripassato le slide tre volte, sono preparato e se dimentico un dettaglio posso consultare le note.'",
    emotion: "Ansia",
    anxietyBefore: 8,
    anxietyAfter: 3,
    symptoms: ["Tensione muscolare", "Battito accelerato"]
  },
  {
    id: "entry-2",
    type: "note",
    category: "Riflessione",
    date: "Oggi, 14:15",
    title: "Micro-vittoria del giorno",
    content: "Oggi sono riuscito a fermarmi 60 secondi prima di rispondere ad una mail stressante. Ho fatto tre respiri profondi.",
    emotion: "Gratitudine",
    mood: "Sereno (8/10)"
  },
  {
    id: "entry-3",
    type: "note",
    category: "Promemoria",
    date: "Ieri, 21:30",
    title: "Nota vocale serale",
    content: "Audio trascritto: 'Cose per cui provare gratitudine oggi: la passeggiata nel parco al tramonto e la chiacchierata con Luca.'",
    emotion: "Gratitudine",
    audioDuration: "0:42"
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

export function renderHeatmap(columns = 16, rows = 6) {
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

        <!-- Notch Smartphone -->
        <div class="device-notch"></div>

        <!-- Status Bar -->
        <div class="flex items-center justify-between px-6 pt-3 pb-1 text-[0.68rem] text-white/50 border-b border-white/5 select-none">
          <span class="font-medium text-white/80">9:41</span>
          <div class="flex items-center gap-1.5">
            <span class="text-[0.6rem] text-emerald-400 font-bold">5G</span>
            <span class="inline-block w-5 h-2.5 rounded-[3px] border border-white/40 relative">
              <span class="absolute inset-0.5 bg-emerald-400 rounded-[1px] w-3.5"></span>
            </span>
          </div>
        </div>

        <!-- App Header (1:1 Header.tsx) -->
        <div class="px-4 py-3 bg-[#050508] border-b border-white/10 flex items-center justify-between sticky top-0 z-20">
          <div class="flex items-center gap-2.5">
            ${brandMark(32, false)}
            <h1 class="text-base font-black tracking-tight text-white leading-none">Diariamente</h1>
          </div>

          <div class="flex items-center gap-1.5">
            <button type="button" id="mockup-toggle-privacy" class="w-7 h-7 rounded-xl bg-white/5 grid place-items-center text-white/70 hover:text-white border border-white/10" title="Privacy Mode">
              ${icon("eyeOff", "w-3.5 h-3.5 text-indigo-400")}
            </button>
            <button type="button" class="w-7 h-7 rounded-xl bg-white/5 grid place-items-center text-white/70 hover:text-white border border-white/10" title="Tema Scuro Neon">
              ${icon("sun", "w-3.5 h-3.5")}
            </button>
            <button type="button" class="px-2.5 py-1 text-[0.68rem] font-black bg-white text-[#090A0E] rounded-xl flex items-center gap-1 shadow-sm">
              ${icon("plus", "w-3 h-3 stroke-[2.5]")} Nuova
            </button>
          </div>
        </div>

        <!-- Dynamic Content Area -->
        <div class="flex-1 overflow-y-auto custom-scrollbar p-3.5 space-y-3.5" id="mockup-tab-content">
          ${renderTimelineView("all", "Tutte le categorie", "")}
        </div>

        <!-- Bottom Navigation Bar (1:1 BottomNav.tsx) -->
        <div class="px-3 py-2 bg-[#0c1018]/95 border-t border-white/10 backdrop-blur-2xl flex items-center justify-around sticky bottom-0 z-20">
          <button type="button" class="app-nav-tab is-active" data-mockup-tab="timeline">
            ${icon("clock", "w-4 h-4 mb-0.5")}
            <span class="text-[10px] font-bold tracking-tight">Timeline</span>
          </button>
          <button type="button" class="app-nav-tab" data-mockup-tab="dashboard">
            ${icon("barChart", "w-4 h-4 mb-0.5")}
            <span class="text-[10px] font-bold tracking-tight">Dashboard</span>
          </button>
          <button type="button" class="app-nav-tab" data-mockup-tab="custom">
            ${icon("helpCircle", "w-4 h-4 mb-0.5")}
            <span class="text-[10px] font-bold tracking-tight">Domande Custom</span>
          </button>
          <button type="button" class="app-nav-tab" data-mockup-tab="settings">
            ${icon("settings", "w-4 h-4 mb-0.5")}
            <span class="text-[10px] font-bold tracking-tight">Impostazioni</span>
          </button>
        </div>

      </div>
    </div>
  </div>`;
}

/** 1:1 TimelineView Renderer */
export function renderTimelineView(activeSubView = "all", activeCategory = "Tutte le categorie", activeEmotion = "") {
  let entries = SAMPLE_ENTRIES;

  if (activeSubView === "cbt") entries = entries.filter(e => e.type === "cbt");
  if (activeSubView === "notes") entries = entries.filter(e => e.type === "note");

  if (activeCategory !== "Tutte le categorie") {
    entries = entries.filter(e => e.category === activeCategory);
  }

  if (activeEmotion) {
    entries = entries.filter(e => e.emotion === activeEmotion);
  }

  const categoryOptions = ["Tutte le categorie", "Riflessione", "Gratitudine", "Pensiero", "Obiettivo", "Promemoria", "Altro"];
  const emotionOptions = ["Ansia", "Colpa", "Frustrazione", "Paura", "Rabbia", "Tristezza", "Vergogna"];

  return `
    <!-- Intro Subheader Timeline -->
    <div class="flex items-center justify-between gap-2">
      <div>
        <div class="flex items-center gap-2">
          <h2 class="text-xl font-black text-white">Timeline</h2>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            ${icon("eyeOff", "w-2.5 h-2.5")} Privacy Attiva
          </span>
        </div>
        <div class="flex items-center gap-1.5 text-[0.62rem] text-emerald-400 font-medium mt-0.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot"></span>
          <span>Sincronizzazione Supabase attiva</span>
        </div>
      </div>

      <div class="flex items-center gap-1.5">
        <button type="button" class="app-pill-btn text-[0.62rem] font-bold flex items-center gap-1">
          ${icon("eye", "w-3 h-3")} Privacy
        </button>
        <button type="button" class="app-pill-btn--white px-2 py-1 text-[0.62rem] font-black">
          + Appunto Diario
        </button>
      </div>
    </div>

    <!-- Segmented Sub-View Switcher -->
    <div class="flex items-center p-1 rounded-2xl bg-white/5 border border-white/10 text-[0.68rem]">
      <button type="button" data-subview="all" class="flex-1 py-1 px-2 rounded-xl ${activeSubView === 'all' ? 'bg-white text-black font-black shadow-sm' : 'text-white/60 font-medium'}">
        Tutto Insieme (${SAMPLE_ENTRIES.length})
      </button>
      <button type="button" data-subview="cbt" class="flex-1 py-1 px-2 rounded-xl ${activeSubView === 'cbt' ? 'bg-white text-black font-black shadow-sm' : 'text-white/60 font-medium'}">
        Schede CBT (1)
      </button>
      <button type="button" data-subview="notes" class="flex-1 py-1 px-2 rounded-xl ${activeSubView === 'notes' ? 'bg-white text-black font-black shadow-sm' : 'text-white/60 font-medium'}">
        Diario & Appunti (2)
      </button>
    </div>

    <!-- Quick Prompt Banner -->
    <div class="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-2">
      <div class="flex items-start gap-2.5">
        <div class="w-7 h-7 rounded-xl bg-indigo-500/20 border border-indigo-500/30 grid place-items-center shrink-0 text-indigo-300">
          ${icon("notebook", "w-3.5 h-3.5")}
        </div>
        <div>
          <p class="text-[0.72rem] font-bold text-white/95">Hai qualcosa da appuntarti oggi?</p>
          <p class="text-[0.62rem] text-white/50">Scrivi un appunto, riflessione o gratitudine...</p>
        </div>
      </div>
      <button type="button" class="app-pill-btn--white text-[0.62rem] shrink-0 py-1 px-2.5 font-bold">+ Scrivi</button>
    </div>

    <!-- Search Input -->
    <div class="relative">
      <input type="text" id="mockup-search-input" placeholder="Cerca per parole chiave in tutto il diario (schede CBT & appunti)..."
             class="w-full bg-white/5 border border-white/10 rounded-xl py-1.5 pl-8 pr-3 text-[0.68rem] text-white placeholder-white/35 focus:outline-none focus:border-indigo-500/50" />
      <span class="absolute left-2.5 top-2 text-white/35">
        ${icon("search", "w-3.5 h-3.5")}
      </span>
    </div>

    <!-- Category Filters -->
    <div class="space-y-1">
      <p class="text-[0.58rem] font-black tracking-wider text-white/40 uppercase">Filtra Categoria Appunto:</p>
      <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        ${categoryOptions.map(cat => `
          <button type="button" data-mockup-cat="${cat}" class="app-pill-btn text-[0.62rem] ${activeCategory === cat ? 'is-active' : ''}">
            ${cat}
          </button>
        `).join("")}
      </div>
    </div>

    <!-- Emotion Filters -->
    <div class="space-y-1">
      <p class="text-[0.62rem] text-white/40 flex items-center gap-1 font-medium">
        ${icon("sparkle", "w-3 h-3 text-indigo-400")} Emozioni Schede CBT:
      </p>
      <div class="flex flex-wrap gap-1">
        ${emotionOptions.map(emo => `
          <button type="button" data-mockup-emo="${emo}" class="app-tag-emotion ${activeEmotion === emo ? 'is-active' : ''}">
            ${emo}
          </button>
        `).join("")}
      </div>
    </div>

    <!-- Feed Cards -->
    <div class="space-y-2.5 pt-1" id="mockup-feed-cards">
      ${entries.length > 0 ? entries.map(item => `
        <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-all space-y-2">
          <div class="flex items-center justify-between text-[0.62rem]">
            <span class="px-2 py-0.5 rounded-full ${item.type === 'cbt' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-emerald-500/20 text-emerald-300'} font-bold">
              ${item.type === 'cbt' ? 'Scheda CBT' : item.category}
            </span>
            <span class="text-white/40">${item.date}</span>
          </div>

          ${item.type === 'cbt' ? `
            <div class="space-y-1.5">
              <p class="text-[0.7rem] text-white/60"><strong>Situazione:</strong> ${item.situation}</p>
              <div class="p-2 rounded-xl bg-white/5 border border-white/5 text-[0.72rem] text-white/90">
                ${item.alternativeThought}
              </div>
              <div class="flex items-center justify-between text-[0.62rem] text-white/45 pt-1">
                <span>Emozione: <strong class="text-indigo-300">${item.emotion}</strong></span>
                <span class="text-indigo-400 font-bold">Ansia: ${item.anxietyBefore}/10 ➔ ${item.anxietyAfter}/10</span>
              </div>
            </div>
          ` : `
            <div class="space-y-1">
              <h4 class="text-[0.82rem] font-bold text-white leading-tight">${item.title}</h4>
              <p class="text-[0.72rem] text-white/70 leading-relaxed">${item.content}</p>

              ${item.audioDuration ? `
                <div class="p-2 rounded-xl bg-white/5 flex items-center gap-2 mt-2 border border-white/5">
                  <span class="w-6 h-6 rounded-full bg-indigo-500 text-white grid place-items-center shrink-0">
                    ${icon("mic", "w-3 h-3")}
                  </span>
                  <div class="flex items-center gap-[2px] h-5 overflow-hidden flex-1">${renderWaveform(18)}</div>
                  <span class="text-[0.6rem] text-white/50">${item.audioDuration}</span>
                </div>
              ` : ''}
            </div>
          `}
        </div>
      `).join("") : `
        <!-- Empty State matching screenshot -->
        <div class="py-8 px-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center space-y-2">
          <div class="w-10 h-10 rounded-full bg-white/5 grid place-items-center mx-auto text-white/40">
            ${icon("calendar", "w-5 h-5")}
          </div>
          <p class="text-[0.82rem] font-bold text-white">Nessuna voce trovata nella timeline</p>
          <p class="text-[0.68rem] text-white/50 max-w-[240px] mx-auto">
            Inizia registrando una scheda CBT o scrivendo un appunto di riflessione nel tuo diario.
          </p>
          <div class="pt-2 flex justify-center gap-2">
            <button class="app-pill-btn--white text-[0.65rem] px-3 py-1.5 font-bold">+ Nuova Scheda CBT</button>
          </div>
        </div>
      `}

      <!-- Toast Theme Banner from Screenshot -->
      <div class="p-2 rounded-xl bg-indigo-950/70 border border-indigo-500/40 flex items-center justify-center gap-2 text-[0.65rem] text-indigo-200">
        <span class="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 grid place-items-center font-bold">✓</span>
        <span>Tema attivo: <strong>Scuro Neon (Cyber Dark)</strong></span>
      </div>
    </div>
  `;
}

/** 1:1 DashboardView Renderer */
export function renderDashboardView() {
  return `
    <div class="space-y-3.5">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-black text-white">Dashboard & Analytics</h2>
        <span class="text-[0.62rem] text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded-full font-bold">Ultimi 30 giorni</span>
      </div>

      <!-- Anxiety Trend SVG Line Chart (1:1 from DashboardView.tsx) -->
      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
        <div class="flex justify-between items-center text-[0.72rem]">
          <span class="font-bold text-white/90">Andamento Ansia & Tensione</span>
          <span class="text-emerald-400 font-bold">-38% questo mese</span>
        </div>

        <svg viewBox="0 0 320 120" class="w-full h-auto">
          <defs>
            <linearGradient id="anxietyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#6366f1" stop-opacity="0.4"/>
              <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <path d="M 20,90 Q 70,30 120,70 T 220,40 T 300,25 L 300,110 L 20,110 Z" fill="url(#anxietyGrad)" />
          <path d="M 20,90 Q 70,30 120,70 T 220,40 T 300,25" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="300" cy="25" r="4" fill="#38bdf8" />
        </svg>

        <div class="flex justify-between text-[0.6rem] text-white/40 pt-1">
          <span>1 Set</span><span>10 Set</span><span>20 Set</span><span>Oggi</span>
        </div>
      </div>

      <!-- Emotion Analytics Breakdown -->
      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
        <p class="text-[0.75rem] font-bold text-white">Distribuzione Emozioni</p>

        <div class="space-y-2">
          <div>
            <div class="flex justify-between text-[0.68rem] text-white/70 mb-1">
              <span>Gratitudine & Positività</span><span class="text-emerald-400 font-bold">42%</span>
            </div>
            <div class="track"><div class="track__fill !bg-emerald-400" style="width:42%"></div></div>
          </div>
          <div>
            <div class="flex justify-between text-[0.68rem] text-white/70 mb-1">
              <span>Ansia & Tensione</span><span class="text-indigo-400 font-bold">31%</span>
            </div>
            <div class="track"><div class="track__fill !bg-indigo-500" style="width:31%"></div></div>
          </div>
          <div>
            <div class="flex justify-between text-[0.68rem] text-white/70 mb-1">
              <span>Paura & Incertezza</span><span class="text-sky-400 font-bold">17%</span>
            </div>
            <div class="track"><div class="track__fill !bg-sky-400" style="width:17%"></div></div>
          </div>
        </div>
      </div>

      <!-- Heatmap della Costanza -->
      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
        <div class="flex items-center justify-between">
          <p class="text-[0.75rem] font-bold text-white">Costanza di Journaling</p>
          <span class="text-[0.62rem] text-white/45">Ultimi 4 mesi</span>
        </div>
        ${renderHeatmap(16, 5)}
        <p class="text-[0.62rem] text-emerald-400 font-bold text-right">28 giorni consecutivi 🔥</p>
      </div>
    </div>
  `;
}

/** 1:1 CustomQuestionsView Renderer */
export function renderCustomQuestionsView() {
  return `
    <div class="space-y-3.5">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-black text-white">Domande Custom</h2>
        <button type="button" class="app-pill-btn--white text-[0.62rem] px-2.5 py-1 font-bold">+ Crea Nuova</button>
      </div>
      <p class="text-[0.68rem] text-white/60">
        Personalizza i quesiti del tuo rituale serale o mattutino.
      </p>

      <div class="space-y-2">
        <div class="p-3 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
          <div class="flex justify-between items-center">
            <span class="text-[0.62rem] text-indigo-300 font-bold">Gratitudine • Slider 1-10</span>
            <span class="text-emerald-400 text-[0.62rem] font-bold">Attiva</span>
          </div>
          <p class="text-[0.82rem] font-bold text-white">"Quanto ti senti soddisfatto della giornata?"</p>
          <div class="track"><div class="track__fill" style="width:75%"></div></div>
        </div>

        <div class="p-3 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
          <div class="flex justify-between items-center">
            <span class="text-[0.62rem] text-indigo-300 font-bold">Crescita & Azione • Scelta Multipla</span>
            <span class="text-emerald-400 text-[0.62rem] font-bold">Attiva</span>
          </div>
          <p class="text-[0.82rem] font-bold text-white">"Quale abitudine ti ha fatto stare meglio?"</p>
          <div class="flex flex-wrap gap-1 text-[0.62rem]">
            <span class="px-2 py-0.5 rounded-full bg-white/10 text-white/80">Passeggiata</span>
            <span class="px-2 py-0.5 rounded-full bg-white/10 text-white/80">Meditazione</span>
            <span class="px-2 py-0.5 rounded-full bg-white/10 text-white/80">Lettura</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/** 1:1 SettingsView Renderer */
export function renderSettingsView() {
  return `
    <div class="space-y-3.5">
      <h2 class="text-xl font-black text-white">Impostazioni App</h2>

      <!-- Theme Switcher 1:1 -->
      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
        <p class="text-[0.75rem] font-bold text-white">Selezione Tema Visivo</p>
        <div class="grid grid-cols-2 gap-2 text-[0.68rem]">
          <div class="p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-500 text-center font-bold text-white shadow-md">
            Scuro Neon (Cyber) ✓
          </div>
          <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center text-white/50 hover:text-white">
            Minimalist Light
          </div>
          <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center text-white/50 hover:text-white">
            Midnight Blue
          </div>
          <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center text-white/50 hover:text-white">
            Deep Violet
          </div>
        </div>
      </div>

      <!-- Security & Cloud -->
      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-[0.72rem]">
        <div class="flex items-center justify-between py-1 border-b border-white/5">
          <span class="text-white/80">Sincronizzazione Cloud Supabase</span>
          <span class="text-emerald-400 font-bold">Attiva (RLS)</span>
        </div>
        <div class="flex items-center justify-between py-1 border-b border-white/5">
          <span class="text-white/80">Protezione PIN & Biometria</span>
          <span class="text-emerald-400 font-bold">Attiva</span>
        </div>
      </div>

      <!-- Export Data -->
      <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
        <p class="text-[0.75rem] font-bold text-white">Esportazione & Backup</p>
        <button type="button" class="w-full py-2 rounded-xl bg-white/5 border border-white/10 text-[0.7rem] text-white hover:bg-white/10 font-bold text-center">
          Esporta Archivio Completo (.JSON / .PDF)
        </button>
      </div>
    </div>
  `;
}

/** Initialize mockup event listeners */
export function initPhoneMockupInteractivity() {
  const container = document.getElementById("mockup-tab-content");
  const navTabs = document.querySelectorAll("[data-mockup-tab]");
  if (!container || !navTabs.length) return;

  let currentSubView = "all";
  let currentCategory = "Tutte le categorie";
  let currentEmotion = "";

  navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      navTabs.forEach(t => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const tabName = tab.dataset.mockupTab;
      if (tabName === "timeline") {
        container.innerHTML = renderTimelineView(currentSubView, currentCategory, currentEmotion);
        bindTimelineEvents();
      } else if (tabName === "dashboard") {
        container.innerHTML = renderDashboardView();
      } else if (tabName === "custom") {
        container.innerHTML = renderCustomQuestionsView();
      } else if (tabName === "settings") {
        container.innerHTML = renderSettingsView();
      }
    });
  });

  function bindTimelineEvents() {
    const subViewBtns = container.querySelectorAll("[data-subview]");
    const catBtns = container.querySelectorAll("[data-mockup-cat]");
    const emoBtns = container.querySelectorAll("[data-mockup-emo]");
    const searchInput = document.getElementById("mockup-search-input");

    subViewBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        currentSubView = btn.dataset.subview;
        container.innerHTML = renderTimelineView(currentSubView, currentCategory, currentEmotion);
        bindTimelineEvents();
      });
    });

    catBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        currentCategory = btn.dataset.mockupCat;
        container.innerHTML = renderTimelineView(currentSubView, currentCategory, currentEmotion);
        bindTimelineEvents();
      });
    });

    emoBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        currentEmotion = currentEmotion === btn.dataset.mockupEmo ? "" : btn.dataset.mockupEmo;
        container.innerHTML = renderTimelineView(currentSubView, currentCategory, currentEmotion);
        bindTimelineEvents();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const cards = container.querySelectorAll("#mockup-feed-cards > div");
        cards.forEach(card => {
          const text = card.textContent.toLowerCase();
          card.style.display = text.includes(query) ? "block" : "none";
        });
      });
    }
  }

  bindTimelineEvents();
}
