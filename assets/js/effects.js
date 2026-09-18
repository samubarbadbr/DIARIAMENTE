/**
 * effects.js — Movimento e micro-interazioni.
 *
 * Tre regole seguite ovunque:
 * 1. tutto passa da requestAnimationFrame o IntersectionObserver, mai da
 *    listener di scroll che scrivono direttamente sullo stile;
 * 2. se l'utente chiede meno movimento, gli effetti non si attivano affatto;
 * 3. nessun effetto è necessario alla leggibilità della pagina.
 */

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ */
/* Entrate allo scroll                                                 */
/* ------------------------------------------------------------------ */

/**
 * Rivela gli elementi con classe .reveal quando entrano nel viewport.
 * Il ritardo opzionale (data-reveal-delay, in ms) crea la cascata.
 */
export function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");

  if (prefersReducedMotion()) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const delay = Number(entry.target.dataset.revealDelay || 0);
        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------------------ */
/* Parallasse                                                          */
/* ------------------------------------------------------------------ */

/**
 * Sposta in verticale gli elementi con data-parallax in proporzione allo
 * scroll. Valori consigliati: da -0.12 a 0.1, oltre diventa vistoso.
 */
export function initParallax() {
  if (prefersReducedMotion()) return;

  const layers = Array.from(document.querySelectorAll("[data-parallax]"));
  if (!layers.length) return;

  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;

    layers.forEach((layer) => {
      const rect = layer.getBoundingClientRect();
      const isNear = rect.bottom > -400 && rect.top < window.innerHeight + 400;
      if (!isNear) return;

      const factor = Number(layer.dataset.parallax) || 0;
      const offset = (scrollY - (layer.offsetTop || 0)) * factor;

      // translate3d mantiene l'animazione sulla GPU.
      layer.style.transform = `${layer.dataset.parallaxBase || ""} translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });

    ticking = false;
  };

  // Alcuni strati sono già centrati con una translate: la conserviamo.
  layers.forEach((layer) => {
    const current = getComputedStyle(layer).transform;
    if (current && current !== "none" && layer.style.transform.includes("translateX")) {
      layer.dataset.parallaxBase = layer.style.transform;
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );

  update();
}

/* ------------------------------------------------------------------ */
/* Spotlight che segue il cursore                                      */
/* ------------------------------------------------------------------ */

/**
 * Aggiorna le variabili --mx / --my usate dal gradiente radiale della card.
 * Viene richiamata anche dopo i cambi di tab, quando il DOM è rigenerato.
 */
export function initSpotlight() {
  if (window.matchMedia("(hover: none)").matches) return;

  const bind = () => {
    document.querySelectorAll("[data-spotlight]").forEach((card) => {
      if (card.dataset.spotlightBound === "true") return;
      card.dataset.spotlightBound = "true";

      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      });
    });
  };

  bind();
  document.addEventListener("diariamente:rebind-spotlight", bind);
}

/* ------------------------------------------------------------------ */
/* Navbar che si condensa                                              */
/* ------------------------------------------------------------------ */

/** Attiva il vetro della navbar dopo i primi pixel di scroll. */
export function initNavCondense() {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;

  const update = () => nav.classList.toggle("is-condensed", window.scrollY > 12);

  update();
  window.addEventListener("scroll", update, { passive: true });
}
