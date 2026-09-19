/**
 * quiz-cta.js — Quiz Interattivo 3 Domande, Form Waitlist Beta, Contatore Posti e Badge Store.
 */

import { icon } from "../icons.js";
import { QUIZ_QUESTIONS, APP_URL } from "../data.js";

export function renderQuizSection() {
  return `
  <section id="quiz" class="section section--divided bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
    <div class="container">

      <div class="max-w-[62ch] mx-auto text-center reveal">
        <span class="text-[0.78rem] font-semibold text-indigo-400 tracking-wider uppercase px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          Trova la tua Routine
        </span>
        <h2 class="display-2 metal-text mt-4">Quiz Rapido: Qual è il tuo stile di journaling ideale?</h2>
        <p class="lede mt-4 mx-auto">
          Rispondi a 3 semplici domande per scoprire come Diariamente può adattarsi ai tuoi ritmi quotidiani.
        </p>
      </div>

      <!-- Container del Quiz Widget -->
      <div class="mt-12 max-w-[640px] mx-auto p-6 md:p-10 rounded-3xl glass edge-light reveal" id="quiz-widget-container">
        ${renderQuizStep(0, {})}
      </div>

    </div>
  </section>`;
}

export function renderQuizStep(stepIndex, answers = {}) {
  if (stepIndex >= QUIZ_QUESTIONS.length) {
    return `
      <div class="text-center space-y-6 py-4 animate-fade-in">
        <div class="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 grid place-items-center mx-auto text-xl">
          ✓
        </div>
        <h3 class="text-2xl font-bold text-white tracking-tight">Routine Consigliata Trovata!</h3>
        <p class="text-sm text-white/75 leading-relaxed max-w-[48ch] mx-auto">
          In base alle tue risposte, il tuo profilo ideale è <strong>Rituale Express CBT & Voice</strong>.
          Con Diariamente potrai compilare la tua scheda in soli <strong>2 minuti al giorno</strong>.
        </p>
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="${APP_URL}" class="btn btn--primary w-full sm:w-auto">
            Inizia Subito Gratis ${icon("arrowRight", "w-4 h-4")}
          </a>
          <button type="button" id="quiz-restart-btn" class="btn btn--ghost w-full sm:w-auto text-xs">
            Ripeti il Quiz
          </button>
        </div>
      </div>
    `;
  }

  const q = QUIZ_QUESTIONS[stepIndex];

  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between text-xs text-white/45">
        <span>Domanda ${stepIndex + 1} di ${QUIZ_QUESTIONS.length}</span>
        <span>${Math.round(((stepIndex + 1) / QUIZ_QUESTIONS.length) * 100)}% Completato</span>
      </div>

      <!-- Barra di Progresso -->
      <div class="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div class="h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-300"
             style="width: ${((stepIndex + 1) / QUIZ_QUESTIONS.length) * 100}%"></div>
      </div>

      <h3 class="text-lg md:text-xl font-bold text-white/95 leading-snug">${q.question}</h3>

      <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <button type="button" class="quiz-option" data-quiz-option-index="${i}">
            <span class="w-7 h-7 rounded-full bg-white/10 text-xs font-semibold grid place-items-center shrink-0">
              ${String.fromCharCode(65 + i)}
            </span>
            <span class="flex-1 font-medium">${opt.text}</span>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold">${opt.tag}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

export function renderBetaWaitlistSection() {
  return `
  <section id="waitlist" class="section section--divided overflow-hidden">
    <div class="container relative">

      <div class="max-w-[700px] mx-auto p-8 md:p-12 rounded-3xl glass edge-light text-center relative z-10 reveal">

        <!-- Counter Posti Limitati Badge -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-6">
          <span class="w-2 h-2 rounded-full bg-rose-400 pulse-dot"></span>
          <span>Accesso Gratuito Beta: Solo <strong>14 posti</strong> rimasti</span>
        </div>

        <h2 class="display-2 metal-text">Unisciti alla Beta Privata</h2>
        <p class="lede mx-auto mt-4" style="max-width:44ch">
          Inserisci la tua email per accedere in anteprima alla versione completa di Diariamente. Zero spam, solo accesso prioritario.
        </p>

        <!-- Form Waitlist -->
        <form id="waitlist-form" class="mt-8 flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
          <input type="email" id="waitlist-email" required placeholder="Inserisci la tua email..."
                 class="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 text-sm" />
          <button type="submit" class="btn btn--primary !py-3 !px-6 text-sm shrink-0">
            Richiedi Pass ${icon("arrowRight", "w-4 h-4")}
          </button>
        </form>

        <div id="waitlist-success-msg" class="hidden mt-4 p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs text-center font-medium">
          ✓ Richiesta ricevuta! Ti abbiamo riservato un pass per la Beta. Controlla la tua posta.
        </div>

        <!-- Badge Store & PWA -->
        <div class="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-white/50">
          <span class="store-badge">
            ${icon("apple", "w-5 h-5 text-white")}
            <span class="text-left">
              <span class="block text-[0.6rem] text-white/50 uppercase">Compatibile con</span>
              <strong class="text-xs text-white">Apple iOS / macOS</strong>
            </span>
          </span>

          <span class="store-badge">
            ${icon("playStore", "w-5 h-5 text-emerald-400")}
            <span class="text-left">
              <span class="block text-[0.6rem] text-white/50 uppercase">Compatibile con</span>
              <strong class="text-xs text-white">Android PWA</strong>
            </span>
          </span>

          <span class="store-badge">
            ${icon("phone", "w-5 h-5 text-sky-400")}
            <span class="text-left">
              <span class="block text-[0.6rem] text-white/50 uppercase">Formato</span>
              <strong class="text-xs text-white">Web App PWA (Zero Store)</strong>
            </span>
          </span>
        </div>

      </div>

    </div>
  </section>`;
}

export function initQuizAndWaitlist() {
  // Quiz Interactivity
  const container = document.getElementById("quiz-widget-container");
  let currentStep = 0;
  const userAnswers = {};

  function bindQuiz() {
    if (!container) return;

    const options = container.querySelectorAll("[data-quiz-option-index]");
    options.forEach(opt => {
      opt.addEventListener("click", () => {
        const idx = opt.dataset.quizOptionIndex;
        userAnswers[currentStep] = idx;
        currentStep += 1;
        container.innerHTML = renderQuizStep(currentStep, userAnswers);
        bindQuiz();
      });
    });

    const restartBtn = document.getElementById("quiz-restart-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        currentStep = 0;
        container.innerHTML = renderQuizStep(0, {});
        bindQuiz();
      });
    }
  }

  bindQuiz();

  // Waitlist Form Interactivity
  const waitlistForm = document.getElementById("waitlist-form");
  const successMsg = document.getElementById("waitlist-success-msg");

  if (waitlistForm && successMsg) {
    waitlistForm.addEventListener("submit", (e) => {
      e.preventDefault();
      waitlistForm.classList.add("hidden");
      successMsg.classList.remove("hidden");
    });
  }
}
