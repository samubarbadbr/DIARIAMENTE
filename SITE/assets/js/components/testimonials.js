/**
 * testimonials.js — Carousel delle recensioni.
 * Mostra le esperienze degli utenti in card affiancate con scorrimento orizzontale.
 */

import { TESTIMONIALS } from "../data.js";
import { icon } from "../icons.js";

function renderTestimonialCard(t, index) {
  return \`
    <div class="glass edge-light rounded-[20px] p-7 min-w-[300px] w-[80vw] max-w-[380px] snap-center shrink-0 flex flex-col reveal" data-reveal-delay="\${index * 100}">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full flex items-center justify-center font-medium text-[0.8rem] text-[#05070d]" style="background: linear-gradient(135deg, #e0e7ff, #a5b4fc)">
          \${t.avatar}
        </div>
        <div>
          <div class="text-[0.9rem] font-medium text-white/90">\${t.name}</div>
          <div class="text-[0.75rem] text-white/50">\${t.role}</div>
        </div>
      </div>
      <p class="body-copy text-[0.95rem] leading-relaxed mt-auto">\${t.text}</p>
      <div class="flex text-indigo-300 gap-1 mt-6">
        \${Array(5).fill(icon("sparkle", "w-3.5 h-3.5", 2)).join("")}
      </div>
    </div>
  \`;
}

export function renderTestimonials() {
  return \`
  <section id="recensioni" class="section section--divided overflow-hidden">
    <div class="container mb-12">
      <h2 class="display-2 metal-text reveal text-center mx-auto" style="max-width:20ch">Chi ha iniziato, non ha più smesso</h2>
    </div>
    
    <div class="w-full relative px-6 md:px-0">
      <div class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-4 md:px-[calc(50vw-190px)] hide-scrollbar" id="testimonials-carousel">
        \${TESTIMONIALS.map(renderTestimonialCard).join("")}
      </div>
      
      <!-- Sfumature ai bordi per indicare lo scroll su desktop -->
      <div class="hidden md:block absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none"></div>
      <div class="hidden md:block absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none"></div>
    </div>
  </section>\`;
}
