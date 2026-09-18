/**
 * quiz.js — Quiz interattivo per consigliare la routine ideale.
 */

import { icon } from "../icons.js";

const QUESTIONS = [
  {
    question: "Quando hai più bisogno di riordinare i pensieri?",
    options: ["La mattina per pianificare", "La sera per svuotare la mente", "Durante la giornata (quando capita)"]
  },
  {
    question: "Cosa ti blocca di solito dal tenere un diario?",
    options: ["Troppo tempo richiesto", "La pagina bianca mi mette ansia", "Mi dimentico di farlo"]
  },
  {
    question: "Come preferisci esprimerti?",
    options: ["Scrivendo veloce", "Parlando a voce alta", "Con grafici e numeri"]
  }
];

export function renderQuiz() {
  return \`
  <section class="section section--divided overflow-hidden">
    <div class="container relative z-10">
      
      <div class="glass border-indigo-500/20 rounded-[28px] p-8 md:p-12 max-w-3xl mx-auto relative reveal overflow-hidden" id="quiz-container">
        <!-- Progress bar in the background -->
        <div class="absolute top-0 left-0 h-1.5 bg-indigo-500/30 w-full">
          <div class="h-full bg-indigo-500 transition-all duration-500 w-1/3" id="quiz-progress"></div>
        </div>

        <div class="text-center mb-8">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-[0.7rem] text-indigo-300 uppercase tracking-widest font-semibold mb-4">
            Test Veloce
          </span>
          <h3 class="text-3xl font-medium text-white/90" id="quiz-title">Scopri la tua routine ideale</h3>
        </div>

        <div id="quiz-content" class="min-h-[220px] flex flex-col justify-center transition-opacity duration-300">
          <p class="text-lg text-white/80 text-center mb-6" id="quiz-question">\${QUESTIONS[0].question}</p>
          <div class="space-y-3" id="quiz-options">
            \${QUESTIONS[0].options.map((opt, i) => \`
              <button type="button" class="quiz-option w-full glass hover:bg-indigo-500/10 hover:border-indigo-500/30 text-white/70 hover:text-white transition-all text-left px-5 py-4 rounded-xl text-sm" data-index="\${i}">
                \${opt}
              </button>
            \`).join("")}
          </div>
        </div>

        <div id="quiz-result" class="min-h-[220px] flex-col justify-center items-center text-center hidden opacity-0 transition-opacity duration-500">
          <div class="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-5">
            \${icon("check", "w-8 h-8")}
          </div>
          <h4 class="text-2xl font-medium text-white/90 mb-3" id="quiz-result-title">Audio-Journaling Serale</h4>
          <p class="text-white/60 text-sm max-w-md mx-auto mb-6" id="quiz-result-desc">
            La tua routine ideale si basa sulla voce. Usa Diariamente per registrare una nota vocale di 2 minuti ogni sera prima di dormire per svuotare la mente.
          </p>
          <a href="#top" class="btn btn--primary">
            Inizia con questa routine
          </a>
        </div>

      </div>

    </div>
  </section>\`;
}

export function initQuiz() {
  const container = document.getElementById("quiz-content");
  const questionEl = document.getElementById("quiz-question");
  const optionsContainer = document.getElementById("quiz-options");
  const progressEl = document.getElementById("quiz-progress");
  const resultContainer = document.getElementById("quiz-result");
  const resultTitle = document.getElementById("quiz-result-title");
  
  if (!container) return;

  let step = 0;
  const answers = [];

  function updateQuestion() {
    if (step >= QUESTIONS.length) {
      showResult();
      return;
    }

    // Fade out
    container.style.opacity = "0";
    
    setTimeout(() => {
      questionEl.textContent = QUESTIONS[step].question;
      optionsContainer.innerHTML = QUESTIONS[step].options.map((opt, i) => \`
        <button type="button" class="quiz-option w-full glass hover:bg-indigo-500/10 hover:border-indigo-500/30 text-white/70 hover:text-white transition-all text-left px-5 py-4 rounded-xl text-sm" data-index="\${i}">
          \${opt}
        </button>
      \`).join("");
      
      progressEl.style.width = \`\${((step + 1) / QUESTIONS.length) * 100}%\`;
      
      bindOptions();
      
      // Fade in
      container.style.opacity = "1";
    }, 300);
  }

  function showResult() {
    container.style.display = "none";
    document.getElementById("quiz-title").textContent = "La tua soluzione personalizzata";
    
    // Logica base: se l'utente seleziona molta voce/sera
    const isAudio = answers[2] === 1;
    if (isAudio) {
      resultTitle.textContent = "Audio-Journaling Veloce";
    } else {
      resultTitle.textContent = "Guided Journaling Serale";
    }

    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("flex");
    
    // Trigger reflow
    void resultContainer.offsetWidth;
    
    resultContainer.style.opacity = "1";
  }

  function bindOptions() {
    const btns = optionsContainer.querySelectorAll(".quiz-option");
    btns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        answers.push(parseInt(e.currentTarget.dataset.index, 10));
        step++;
        updateQuestion();
      });
    });
  }

  bindOptions();
}
