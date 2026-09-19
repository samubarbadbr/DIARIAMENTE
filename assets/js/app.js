/**
 * app.js — Punto d'ingresso principale della Landing Page.
 * Monta i componenti modulari nell'ordine e inizializza gli effetti e le interazioni.
 */

import { renderNavbar, initNavbar } from "./components/navbar.js";
import { renderHero } from "./components/hero.js";
import { initPhoneMockupInteractivity } from "./components/phone-mockup.js";
import { renderProblemSolution } from "./components/problem-solution.js";
import { renderFeatures } from "./components/features.js";
import { renderQuizSection, renderBetaWaitlistSection, initQuizAndWaitlist } from "./components/quiz-cta.js";
import { renderInstallGuide, initInstallGuide } from "./components/install-guide.js";
import { renderSecurity } from "./components/security.js";
import { renderFaq, initFaq } from "./components/faq.js";
import { renderFinalCta, renderFooter, initFooter } from "./components/footer.js";
import {
  initScrollReveal,
  initCounters,
  initParallax,
  initSpotlight,
  initNavCondense
} from "./effects.js";

function mount() {
  const root = document.getElementById("app");
  if (!root) return;

  root.innerHTML = [
    renderNavbar(),
    "<main>",
    renderHero(),
    renderProblemSolution(),
    renderFeatures(),
    renderQuizSection(),
    renderInstallGuide(),
    renderSecurity(),
    renderFaq(),
    renderBetaWaitlistSection(),
    renderFinalCta(),
    "</main>",
    renderFooter()
  ].join("");

  // Inizializzazione comportamenti e interazioni dei singoli componenti
  initNavbar();
  initPhoneMockupInteractivity();
  initQuizAndWaitlist();
  initInstallGuide();
  initFaq();
  initFooter();

  // Inizializzazione effetti trasversali
  initNavCondense();
  initScrollReveal();
  initCounters();
  initParallax();
  initSpotlight();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
