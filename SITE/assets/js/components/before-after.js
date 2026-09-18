/**
 * before-after.js — Confronto visivo tra la gestione tradizionale dei pensieri (caos)
 * e l'uso di Diariamente (chiarezza).
 */

import { icon } from "../icons.js";

export function renderBeforeAfter() {
  return \`
  <section id="problema" class="section section--divided overflow-hidden">
    <div class="container relative z-10">
      
      <div class="text-center max-w-2xl mx-auto mb-16 reveal">
        <h2 class="display-2 metal-text">Dalla nebbia alla chiarezza</h2>
        <p class="lede mt-5 text-white/70">
          Il problema non è la mancanza di tempo, è l'assenza di un metodo semplice che non richieda sforzo.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 relative">
        
        <!-- PRIMA -->
        <div class="glass glass--opaque border-red-500/20 rounded-[24px] p-8 md:p-10 reveal" data-reveal-delay="100">
          <div class="inline-flex items-center gap-2 text-red-400 mb-6 font-medium text-sm">
            \${icon("close", "w-4 h-4")} Senza Diariamente
          </div>
          <h3 class="text-2xl font-medium text-white/90 mb-4 tracking-tight">Pensieri disorganizzati</h3>
          
          <ul class="space-y-4 mt-8">
            <li class="flex gap-3 text-white/60">
              <div class="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
              <span>Accumuli stress mentale senza sapere esattamente perché.</span>
            </li>
            <li class="flex gap-3 text-white/60">
              <div class="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
              <span>Inizi a scrivere un diario cartaceo ma abbandoni dopo 3 giorni.</span>
            </li>
            <li class="flex gap-3 text-white/60">
              <div class="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
              <span>I mesi passano e ti sembra di essere sempre fermo allo stesso punto.</span>
            </li>
          </ul>
        </div>

        <!-- DOPO -->
        <div class="glass border-indigo-500/30 rounded-[24px] p-8 md:p-10 relative overflow-hidden reveal" data-reveal-delay="250">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none"></div>
          
          <div class="inline-flex items-center gap-2 text-indigo-300 mb-6 font-medium text-sm relative z-10">
            \${icon("check", "w-4 h-4")} Con Diariamente
          </div>
          <h3 class="text-2xl font-medium text-white mb-4 tracking-tight relative z-10">Routine solida e chiarezza</h3>
          
          <ul class="space-y-4 mt-8 relative z-10">
            <li class="flex gap-3 text-white/80">
              <div class="mt-1 flex-shrink-0 text-indigo-400">\${icon("check", "w-4 h-4", 2.5)}</div>
              <span>Registri note vocali in 2 minuti. Il resto lo fa l'IA.</span>
            </li>
            <li class="flex gap-3 text-white/80">
              <div class="mt-1 flex-shrink-0 text-indigo-400">\${icon("check", "w-4 h-4", 2.5)}</div>
              <span>Tracci umore, energia e sonno con uno slider senza fatica.</span>
            </li>
            <li class="flex gap-3 text-white/80">
              <div class="mt-1 flex-shrink-0 text-indigo-400">\${icon("check", "w-4 h-4", 2.5)}</div>
              <span>Vedi i tuoi pattern emotivi attraverso la mappa visiva e capisci cosa ti fa stare bene.</span>
            </li>
          </ul>
        </div>

        <!-- Elemento connettore centrale su desktop -->
        <div class="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass items-center justify-center text-white/50 z-20 reveal" data-reveal-delay="400">
          \${icon("arrowRight", "w-5 h-5")}
        </div>

      </div>

    </div>
  </section>`;
}
