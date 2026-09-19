/**
 * hero.js — Hero Section con preview interattiva e contatori dinamici.
 */

import { icon } from "../icons.js";
import { HERO, APP_URL, STATS } from "../data.js";
import { renderPhoneMockup } from "./phone-mockup.js";

export function renderHero() {
  return `
  <section id="top" class="relative overflow-hidden pt-[120px] md:pt-[150px] pb-16 md:pb-24">

    <!-- Atmosfera: aloni aurora neon -->
    <div class="aurora" data-parallax="-0.12"
         style="width:680px;height:540px;top:-180px;left:50%;transform:translateX(-50%);opacity:.45;
                background:radial-gradient(circle, rgba(99,102,241,.55), transparent 62%)"></div>
    <div class="aurora" data-parallax="0.05"
         style="width:520px;height:420px;top:160px;left:-10%;opacity:.3;
                background:radial-gradient(circle, rgba(56,189,248,.34), transparent 66%)"></div>
    <div class="aurora" data-parallax="0.08"
         style="width:480px;height:400px;top:280px;right:-8%;opacity:.34;
                background:radial-gradient(circle, rgba(168,85,247,.34), transparent 66%)"></div>

    <div class="container relative text-center">

      <span class="glass reveal inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.8rem] text-white/80 border border-indigo-500/30"
            data-reveal-delay="0">
        ${icon("sparkle", "w-3.5 h-3.5 text-indigo-400", 1.7)}
        ${HERO.badge}
      </span>

      <h1 class="display-1 metal-text mx-auto mt-7 reveal" data-reveal-delay="90" style="max-width:16ch">
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

      <!-- Mockup Interattivo Smartphone/App -->
      <div class="mt-16 md:mt-20 flex justify-center reveal" data-reveal-delay="340">
        ${renderPhoneMockup()}
      </div>

      <!-- Dynamic Stats Counter Bar -->
      <div class="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 rounded-3xl glass edge-light reveal" data-reveal-delay="400">
        ${STATS.map((stat, i) => `
          <div class="text-center space-y-1">
            <p class="text-2xl md:text-4xl font-bold metal-text font-mono" data-stat-value="${stat.value}" data-stat-suffix="${stat.suffix}">
              0${stat.suffix}
            </p>
            <p class="text-[0.78rem] text-white/55 font-medium">${stat.label}</p>
          </div>
        `).join("")}
      </div>

    </div>
  </section>`;
}
