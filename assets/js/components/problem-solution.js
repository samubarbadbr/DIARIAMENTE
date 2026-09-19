/**
 * problem-solution.js — Sezione "Problema vs Soluzione".
 * Confronto visivo ad alto impatto tra disordine mentale e la chiarezza di Diariamente.
 */

import { icon } from "../icons.js";
import { PROBLEM_SOLUTION } from "../data.js";

export function renderProblemSolution() {
  return `
  <section id="confronto" class="section section--divided">
    <div class="container">

      <div class="text-center max-w-[62ch] mx-auto reveal">
        <span class="text-[0.78rem] font-semibold text-indigo-400 tracking-wider uppercase px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          Prima & Dopo
        </span>
        <h2 class="display-2 metal-text mt-4">${PROBLEM_SOLUTION.title}</h2>
        <p class="lede mt-4 mx-auto">${PROBLEM_SOLUTION.subtitle}</p>
      </div>

      <div class="mt-14 grid gap-8 md:grid-cols-2">

        <!-- Card Problema (Prima) -->
        <div class="vs-card vs-card--problem reveal" data-reveal-delay="100">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 grid place-items-center shrink-0">
              ${icon("close", "w-5 h-5")}
            </span>
            <h3 class="text-xl font-bold text-rose-300 tracking-tight">${PROBLEM_SOLUTION.problem.title}</h3>
          </div>

          <ul class="mt-7 space-y-4 text-sm text-white/70">
            ${PROBLEM_SOLUTION.problem.items.map(item => `
              <li class="flex items-start gap-3">
                <span class="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 grid place-items-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                <span class="leading-relaxed">${item}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Card Soluzione (Dopo con Diariamente) -->
        <div class="vs-card vs-card--solution reveal" data-reveal-delay="200">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 grid place-items-center shrink-0">
              ${icon("check", "w-5 h-5")}
            </span>
            <h3 class="text-xl font-bold text-emerald-300 tracking-tight">${PROBLEM_SOLUTION.solution.title}</h3>
          </div>

          <ul class="mt-7 space-y-4 text-sm text-white/90">
            ${PROBLEM_SOLUTION.solution.items.map(item => `
              <li class="flex items-start gap-3">
                <span class="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 grid place-items-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span class="leading-relaxed font-medium">${item}</span>
              </li>
            `).join("")}
          </ul>
        </div>

      </div>

    </div>
  </section>`;
}
