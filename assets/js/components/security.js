/**
 * security.js — Sezione Sicurezza & Supabase.
 */

import { icon } from "../icons.js";
import { SECURITY_POINTS } from "../data.js";

export function renderSecurity() {
  return `
  <section id="sicurezza" class="section section--divided">
    <div class="container">

      <div class="max-w-[50ch] reveal">
        <span class="text-[0.78rem] font-semibold text-emerald-400 tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          Supabase Architecture
        </span>
        <h2 class="display-2 metal-text mt-3">Sicurezza per riga e dati blindati</h2>
        <p class="lede mt-3">I tuoi pensieri più intimi meritano uno spazio sicuro. Nessuno può accedervi.</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
        ${SECURITY_POINTS.map((pt, i) => `
          <div class="glass p-6 rounded-2xl border border-white/10 reveal space-y-3" data-reveal-delay="${i * 70}">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 grid place-items-center">
              ${icon(pt.icon, "w-5 h-5")}
            </div>
            <h3 class="text-base font-semibold text-white/95">${pt.title}</h3>
            <p class="text-xs text-white/60 leading-relaxed">${pt.body}</p>
          </div>
        `).join("")}
      </div>

    </div>
  </section>`;
}
