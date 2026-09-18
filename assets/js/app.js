/**
 * app.js — Punto d'ingresso.
 * Monta i componenti nell'ordine della pagina, poi attiva gli effetti.
 */

import { renderNavbar, initNavbar } from "./components/navbar.js";
import { renderHero } from "./components/hero.js";
import { renderFeatures } from "./components/features.js";
import { renderInstallGuide, initInstallGuide } from "./components/install-guide.js";
import { renderSecurity } from "./components/security.js";
import { renderFaq, initFaq } from "./components/faq.js";
import { renderFinalCta, renderFooter, initFooter } from "./components/footer.js";
import {
  initScrollReveal,
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
    renderFeatures(),
    renderInstallGuide(),
    renderSecurity(),
    renderFaq(),
    renderFinalCta(),
    "</main>",
    renderFooter()
  ].join("");

  // Comportamenti dei singoli componenti.
  initNavbar();
  initInstallGuide();
  initFaq();
  initFooter();

  // Effetti trasversali, montati dopo che il DOM esiste.
  initNavCondense();
  initScrollReveal();
  initParallax();
  initSpotlight();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
