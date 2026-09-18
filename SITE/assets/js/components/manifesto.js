/**
 * manifesto.js — Blocco testuale curato per trasmettere fiducia e la visione dei founder.
 */

export function renderManifesto() {
  return \`
  <section class="section section--divided relative overflow-hidden">
    
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#10172a]/20 to-transparent pointer-events-none"></div>

    <div class="container max-w-4xl mx-auto relative z-10 text-center reveal">
      
      <span class="text-indigo-400 font-serif italic text-xl mb-6 block">Il nostro manifesto</span>
      
      <h2 class="text-3xl md:text-5xl font-medium text-white/95 leading-tight tracking-tight mb-10" style="text-wrap: balance;">
        Abbiamo costruito Diariamente perché eravamo stanchi di sentirci in colpa per non aver riempito la pagina bianca.
      </h2>
      
      <div class="space-y-6 text-[1.1rem] text-white/60 leading-relaxed max-w-2xl mx-auto text-left">
        <p>
          Viviamo nell'era della distrazione continua. I nostri pensieri si accumulano e lo stress cresce silenziosamente. Sapevamo che tenere un diario era la soluzione, ma gli strumenti tradizionali ci chiedevano troppo sforzo dopo una lunga giornata.
        </p>
        <p>
          Così abbiamo ripensato tutto. Abbiamo rimosso la frizione della scrittura manuale introducendo l'audio. Abbiamo eliminato la sindrome da pagina bianca con domande mirate. E abbiamo reso visibile l'invisibile con la heatmap della costanza.
        </p>
        <p class="font-medium text-white/80">
          Non volevamo creare un'altra app che richiede la tua attenzione. Volevamo creare un rifugio privato che ti restituisce la chiarezza mentale in tre minuti al giorno.
        </p>
      </div>

    </div>
  </section>\`;
}
