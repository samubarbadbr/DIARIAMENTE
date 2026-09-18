/**
 * hero.js — Sezione di apertura: badge, titolo metallico, mockup.
 * L'entrata è una sequenza orchestrata una sola volta al caricamento.
 */

import { icon } from "../icons.js";
import { HERO, APP_URL } from "../data.js";
import { renderPhoneMockup } from "./phone-mockup.js";

export function renderHero() {
  return `
  <section id="top" class="relative overflow-hidden pt-[130px] md:pt-[168px] pb-24 md:pb-32">

    <!-- Atmosfera: tre aloni sfocati con parallasse leggera -->
    <div class="aurora" data-parallax="-0.12"
         style="width:640px;height:520px;top:-180px;left:50%;transform:translateX(-50%);opacity:.5;
                background:radial-gradient(circle, rgba(99,102,241,.55), transparent 62%)"></div>
    <div class="aurora" data-parallax="0.05"
         style="width:520px;height:420px;top:140px;left:-10%;opacity:.3;
                background:radial-gradient(circle, rgba(148,163,184,.34), transparent 66%)"></div>
    <div class="aurora" data-parallax="0.08"
         style="width:480px;height:400px;top:260px;right:-8%;opacity:.34;
                background:radial-gradient(circle, rgba(99,102,241,.34), transparent 66%)"></div>

    <div class="container relative text-center">

      <span class="glass reveal inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.8rem] text-white/60"
            data-reveal-delay="0">
        ${icon("bolt", "w-3.5 h-3.5 text-indigo-300", 1.7)}
        ${HERO.badge}
      </span>

      <h1 class="display-1 metal-text mx-auto mt-7 reveal" data-reveal-delay="90" style="max-width:15ch">
        ${HERO.title}
      </h1>

      <p class="lede mx-auto mt-7 reveal" data-reveal-delay="170">${HERO.lede}</p>

      <div class="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 reveal" data-reveal-delay="250">
        <a href="${APP_URL}" class="btn btn--primary w-full sm:w-auto">
          ${HERO.primaryCta} ${icon("arrowRight", "w-4 h-4")}
        </a>
        <a href="#installazione" class="btn btn--ghost w-full sm:w-auto">
          ${icon("share", "w-4 h-4")} ${HERO.secondaryCta}
        </a>
      </div>

      <div class="mt-20 md:mt-24 flex justify-center reveal" data-reveal-delay="340">
        ${renderPhoneMockup()}
      </div>

    </div>
  </section>`;
}
