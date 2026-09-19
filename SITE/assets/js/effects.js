/**
 * effects.js — Movimento, micro-interazioni e contatori animati per Diariamente.
 */

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ */
/* Entrate allo scroll                                                 */
/* ------------------------------------------------------------------ */

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
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------------------ */
/* Contatori Numerici Animati                                          */
/* ------------------------------------------------------------------ */

export function initCounters() {
  const statElements = document.querySelectorAll("[data-stat-value]");
  if (!statElements.length) return;

  const animate = (el) => {
    const target = parseFloat(el.dataset.statValue);
    const suffix = el.dataset.statSuffix || "";
    const isFloat = target % 1 !== 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const eased = progress * (2 - progress);
      const current = isFloat ? (eased * target).toFixed(1) : Math.floor(eased * target);

      el.textContent = `${isFloat ? current : current.toLocaleString("it-IT")}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statElements.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------------------ */
/* Parallasse                                                          */
/* ------------------------------------------------------------------ */

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

      layer.style.transform = `${layer.dataset.parallaxBase || ""} translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });

    ticking = false;
  };

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
/* Spotlight Cursore sulle Card                                       */
/* ------------------------------------------------------------------ */

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
/* Navbar Condense                                                    */
/* ------------------------------------------------------------------ */

export function initNavCondense() {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;

  const update = () => nav.classList.toggle("is-condensed", window.scrollY > 12);

  update();
  window.addEventListener("scroll", update, { passive: true });
}
