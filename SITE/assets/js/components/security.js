/**
 * security.js — Sezione dedicata a riservatezza e archiviazione dei dati.
 */

import { icon } from "../icons.js";
import { SECURITY_POINTS } from "../data.js";

const INFRA_POINTS = [
  "Accesso riservato al tuo account",
  "Server nell'Unione Europea",
  "Conforme al GDPR"
];

export function renderSecurity() {
  const cards = SECURITY_POINTS.map(
    (point, i) => `
      <article class="glass spotlight-card p-7 reveal" data-spotlight data-reveal-delay="${i * 70}">
        <span class="card-glyph inline-grid place-items-center w-10 h-10 rounded-[12px] border border-white/10 text-white/55"
              style="background:linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.01))">
          ${icon(point.icon, "w-5 h-5")}
        </span>
        <h3 class="mt-5 text-[1rem] text-white/92 tracking-[-0.02em]">${point.title}</h3>
        <p class="body-copy mt-2.5 text-[0.9rem]">${point.body}</p>
      </article>`
  ).join("");

  const infra = INFRA_POINTS.map(
    (text) => `
      <li class="flex items-center gap-2.5 text-[0.9rem] text-white/60">
        ${icon("check", "w-4 h-4 text-indigo-300", 2)} ${text}
      </li>`
  ).join("");

  return `
  <section id="sicurezza" class="section section--divided">
    <div class="container grid gap-14 lg:gap-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">

      <div class="reveal">
        <h2 class="display-2 metal-text" style="max-width:16ch">
          Un diario si scrive solo se nessuno lo legge
        </h2>
        <p class="lede mt-6">
          La sincerità è la funzione più importante dell'app e dipende interamente dalla fiducia.
          Per questo l'infrastruttura segue un principio semplice: meno dati raccogliamo, meglio funziona.
        </p>

        <div class="glass edge-light rounded-[26px] p-7 mt-9" style="max-width:420px">
          <div class="flex items-center gap-3">
            <span class="inline-grid place-items-center w-11 h-11 rounded-[14px] border border-white/10 text-white"
                  style="background:linear-gradient(180deg, rgba(99,102,241,.26), rgba(255,255,255,.02))">
              ${icon("shield", "w-5 h-5")}
            </span>
            <div>
              <p class="text-[0.95rem] text-white/92">Infrastruttura Supabase</p>
              <p class="text-[0.82rem] text-white/50">Postgres gestito, autenticazione e policy per riga</p>
            </div>
          </div>
          <ul class="mt-5 space-y-2.5">${infra}</ul>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">${cards}</div>

    </div>
  </section>`;
}
