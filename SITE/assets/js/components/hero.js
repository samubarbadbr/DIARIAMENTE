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

      <!-- Banner di Scarsità -->
      <div class="mt-8 mb-2 reveal flex justify-center" data-reveal-delay="220">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-[0.75rem] font-medium shadow-[0_0_15px_rgba(239,68,68,0.15)]">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Rimangono solo <span id="spots-left" class="font-bold tabular-nums">142</span> posti gratuiti per la Beta
        </div>
      </div>

      <form id="waitlist-form" class="mt-9 max-w-md mx-auto relative flex items-center reveal" data-reveal-delay="250">
        <input type="email" id="waitlist-email" required placeholder="La tua email" 
               class="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-5 pr-[130px] text-white placeholder:text-white/40 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all shadow-inner backdrop-blur-md" />
        <button type="submit" class="absolute right-1.5 top-1.5 bottom-1.5 btn btn--primary !py-0 !px-5 !text-[0.85rem] !rounded-full">
          ${HERO.primaryCta}
        </button>
      </form>
      <p id="waitlist-msg" class="text-indigo-300 text-sm mt-3 opacity-0 transition-opacity h-5"></p>

      <div class="mt-6 flex flex-wrap items-center justify-center gap-4 reveal" data-reveal-delay="300">
        <div class="glass flex items-center gap-3 px-4 py-2 rounded-xl border-white/10 hover:bg-white/5 transition cursor-pointer">
          ${icon("apple", "w-6 h-6 text-white")}
          <div class="text-left">
            <div class="text-[0.6rem] text-white/50 leading-none">Scarica su</div>
            <div class="text-[0.95rem] font-medium leading-tight">App Store</div>
          </div>
        </div>
        <div class="glass flex items-center gap-3 px-4 py-2 rounded-xl border-white/10 hover:bg-white/5 transition cursor-pointer">
          ${icon("playstore", "w-6 h-6 text-white")}
          <div class="text-left">
            <div class="text-[0.6rem] text-white/50 leading-none">Disponibile su</div>
            <div class="text-[0.95rem] font-medium leading-tight">Google Play</div>
          </div>
        </div>
      </div>

      <div class="mt-20 md:mt-24 flex justify-center reveal" data-reveal-delay="340">
        ${renderPhoneMockup()}
      </div>

    </div>
  </section>`;
}

export function initWaitlist() {
  const form = document.getElementById("waitlist-form");
  const msg = document.getElementById("waitlist-msg");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("waitlist-email").value;
      if (email) {
        localStorage.setItem("diariamente_waitlist", email);
        msg.textContent = "Grazie! Ti abbiamo aggiunto alla waitlist.";
        msg.style.opacity = "1";
        form.reset();
        
        setTimeout(() => {
          msg.style.opacity = "0";
        }, 5000);
      }
    });
  }

  // Logica decremento posti
  const spotsEl = document.getElementById("spots-left");
  if (spotsEl) {
    let spots = 142;
    // Salva il contatore in localStorage per simulare persistenza
    const savedSpots = localStorage.getItem("diariamente_spots");
    if (savedSpots) {
      spots = parseInt(savedSpots, 10);
      spotsEl.textContent = spots;
    }
    
    setInterval(() => {
      if (Math.random() > 0.6 && spots > 12) {
        spots -= Math.floor(Math.random() * 2) + 1;
        spotsEl.textContent = spots;
        localStorage.setItem("diariamente_spots", spots);
      }
    }, 5500);
  }
}
