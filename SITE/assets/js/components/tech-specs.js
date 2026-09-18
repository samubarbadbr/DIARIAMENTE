/**
 * tech-specs.js — Specifiche tecniche "Built for iOS & Android" spiegate in modo semplice.
 */

import { icon } from "../icons.js";

const SPECS = [
  {
    icon: "cloud",
    title: "Sincronizzazione in tempo reale",
    desc: "Tutte le tue note vengono salvate sul cloud istantaneamente. Inizia a scrivere sul telefono e continua sul computer senza perdere una parola."
  },
  {
    icon: "bolt",
    title: "Consumi ottimizzati",
    desc: "Costruita per essere fulminea. Nessun consumo anomalo della batteria in background, perché si attiva solo quando la usi."
  },
  {
    icon: "eye",
    title: "Modalità Scura Nativa",
    desc: "L'interfaccia si adatta alle preferenze del tuo dispositivo. I neri profondi sono perfetti per il journaling serale prima di dormire."
  }
];

export function renderTechSpecs() {
  const cards = SPECS.map((spec, i) => \`
    <div class="glass edge-light rounded-[18px] p-6 text-center reveal" data-reveal-delay="\${i * 120}">
      <span class="inline-grid place-items-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-indigo-300 mb-5 mx-auto">
        \${icon(spec.icon, "w-5 h-5")}
      </span>
      <h4 class="text-[1.05rem] font-medium text-white/90 mb-2">\${spec.title}</h4>
      <p class="text-[0.85rem] text-white/50 leading-relaxed">\${spec.desc}</p>
    </div>
  \`).join("");

  return \`
  <section class="py-24 relative overflow-hidden">
    <!-- Bagliore di sfondo -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 filter blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container relative z-10">
      <div class="text-center mb-12 reveal">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[0.7rem] text-white/60 uppercase tracking-widest mb-4 font-semibold">
          Built for iOS & Android
        </span>
        <h3 class="display-3 text-white/90">L'esperienza nativa che ti aspetti.</h3>
      </div>
      
      <div class="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        \${cards}
      </div>
    </div>
  </section>\`;
}
