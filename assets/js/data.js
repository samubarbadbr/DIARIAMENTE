/**
 * data.js — Dati centralizzati per la landing page di Diariamente.
 */

export const APP_URL = "https://samubarbadbr.github.io/CURAMENTE/";

export const SITE = {
  name: "Diariamente",
  domain: "www.diariamente.it",
  email: "ciao@diariamente.it"
};

export const NAV_LINKS = [
  { label: "Preview App", href: "#top" },
  { label: "Confronto", href: "#confronto" },
  { label: "Funzionalità", href: "#funzionalita" },
  { label: "Test Routine", href: "#quiz" },
  { label: "Sicurezza", href: "#sicurezza" },
  { label: "FAQ", href: "#faq" }
];

export const HERO = {
  badge: "Stile Apple Minimal • Tema Scuro Neon Active",
  title: "Ogni giorno lascia una traccia. Qui diventa consapevolezza.",
  lede:
    "Diariamente è il diario guidato e la suite CBT che vive nel tuo browser. Monitora umore, ansia e pensieri con schede cliniche e note vocali in 3 minuti al giorno. Zero installazioni dagli store: si aggiunge subito alla Home.",
  primaryCta: "Prova l'App Gratis",
  secondaryCta: "Installa su Home"
};

export const STATS = [
  { value: 12400, suffix: "+", label: "Riflessioni & Schede CBT" },
  { value: 98, suffix: "%", label: "Indice di Privacy & Cifratura" },
  { value: 3, suffix: " min", label: "Tempo medio giornaliero" },
  { value: 4.9, suffix: "/5", label: "Gradimento utenti Beta" }
];

export const PROBLEM_SOLUTION = {
  title: "Dai voce ai tuoi pensieri, elimina il disordine mentale",
  subtitle: "Confronta la routine quotidiana priva di tracciamento con la struttura guidata di Diariamente.",
  problem: {
    title: "Prima: Disordine & Sovraccarico Mental",
    items: [
      "Pensieri ed emozioni confusi a fine giornata senza una struttura",
      "Stati d'ansia o frustrazione che si ripetono senza identificare la causa",
      "Pagine bianche dei diari tradizionali che scoraggiano la costanza",
      "Dati sparsi su app diverse senza alcuna cifratura garantita"
    ]
  },
  solution: {
    title: "Dopo: Chiarezza & Calma con Diariamente",
    items: [
      "Schede CBT guidate per identificare e disinnescare i pensieri distorti",
      "Tracciamento immediato di Ansia, Paura, Rabbia e Gratitudine",
      "Note vocali con trascrizione automatica per catturare le idee al volo",
      "Sincronizzazione Cloud Supabase ultra-sicura con cifratura TLS per riga"
    ]
  }
};

export const FEATURES = [
  {
    id: "cbt",
    icon: "brain",
    layout: "wide",
    title: "Schede CBT & Diario Emozioni",
    body: "Strumenti di Terapia Cognitivo-Comportamentale per analizzare pensieri automatici e tracciare Ansia, Rabbia, Gratitudine e Paura in tempo reale.",
    visual: "cbt-preview"
  },
  {
    id: "supabase",
    icon: "cloud",
    layout: "wide",
    title: "Sincronizzazione Cloud Sicura Supabase",
    body: "Tutti i tuoi dati cifrati in transito e a riposo con Row-Level Security. Il tuo diario resta accessibile solo a te su ogni tuo dispositivo.",
    visual: "cloud-preview"
  },
  {
    id: "custom",
    icon: "settings",
    layout: "wide",
    title: "Personalizzazione Totale & Privacy",
    body: "Crea le tue domande custom giornaliere, attiva la modalità Privacy PIN e scegli tra il tema Scuro Neon e la modalità minimalista.",
    visual: "custom-preview"
  },
  {
    id: "audio",
    icon: "mic",
    layout: "wide",
    title: "Note Audio con Trascrizione",
    body: "Premi il microfono e sfogati a voce. La trascrizione automatica converte le tue parole in testo per l'archivio.",
    visual: "waveform"
  },
  {
    id: "heatmap",
    icon: "grid",
    layout: "wide",
    title: "Heatmap della Costanza",
    body: "Visualizza mese dopo mese i tuoi progressi e la costanza con la griglia interattiva in stile GitHub.",
    visual: "heatmap"
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Qual è il tuo obiettivo principale con il diario?",
    options: [
      { text: "Gestire l'ansia e i pensieri intrusivi", tag: "CBT & Ansia" },
      { text: "Tracciare le mie emozioni e l'umore quotidiano", tag: "Emozioni" },
      { text: "Scrivere riflessioni veloci senza pagine bianche", tag: "Note & Voice" }
    ]
  },
  {
    id: 2,
    question: "Quanto tempo desideri dedicare ogni giorno?",
    options: [
      { text: "1 - 3 minuti (domande rapide guidate)", tag: "Express" },
      { text: "5 minuti (schede CBT + note vocali)", tag: "Standard" },
      { text: "Quando ho bisogno di sfogarmi", tag: "On demand" }
    ]
  },
  {
    id: 3,
    question: "Qual è la funzionalità che ritieni più indispensabile?",
    options: [
      { text: "Analisi guidata CBT delle emozioni (Ansia/Rabbia)", tag: "Schede CBT" },
      { text: "Note vocali con trascrizione istantanea", tag: "Audio" },
      { text: "Sincronizzazione sicura Supabase & Privacy totale", tag: "Cloud Sync" }
    ]
  }
];

export const INSTALL_GUIDE = {
  ios: {
    label: "iPhone e iPad",
    hint: "Apri in Safari per aggiungere l'icona alla schermata Home.",
    steps: [
      {
        icon: "compass",
        title: "Apri Diariamente in Safari",
        body: "Tocca “Inizia ora” in questa pagina oppure apri l'indirizzo."
      },
      {
        icon: "share",
        title: "Tocca il pulsante Condividi",
        body: "Icona con il quadrato e la freccia verso l'alto nel menu inferiore."
      },
      {
        icon: "plusSquare",
        title: "Scegli “Aggiungi a Home”",
        body: "Conferma ed ecco Diariamente pronta all'uso come un'app nativa."
      }
    ]
  },
  android: {
    label: "Android",
    hint: "Funziona su Chrome e tutti i browser moderni.",
    steps: [
      {
        icon: "compass",
        title: "Apri Diariamente in Chrome",
        body: "Spesso il browser mostra subito il banner di installazione."
      },
      {
        icon: "dots",
        title: "Menu con tre puntini",
        body: "In alto a destra, accanto alla barra degli indirizzi."
      },
      {
        icon: "download",
        title: "Scegli “Aggiungi a schermata Home”",
        body: "Troverai l'icona di Diariamente nella schermata Home."
      }
    ]
  }
};

export const SECURITY_POINTS = [
  {
    icon: "lock",
    title: "Privacy per riga con Supabase",
    body: "Ogni voce è crittografata e protetta da Row-Level Security: nessuno può leggere i tuoi pensieri."
  },
  {
    icon: "shield",
    title: "Cifratura end-to-end in transito",
    body: "Connessioni protette via TLS/SSL e server ad elevato standard di sicurezza europea."
  },
  {
    icon: "eye",
    title: "Zero profilazione commerciale",
    body: "Non vendiamo dati né tracciamo per pubblicità. La tua mente è uno spazio privato."
  },
  {
    icon: "download",
    title: "Esportazione immediata o cancellazione",
    body: "Scarica un backup JSON/PDF dei tuoi dati in qualsiasi momento con un solo clic."
  }
];

export const FAQ_ITEMS = [
  {
    q: "Cos'è Diariamente e come funziona la PWA?",
    a: "Diariamente è una Progressive Web App (PWA). Significa che offre le prestazioni e l'interfaccia di un'app iOS/Android nativa ma si installa direttamente dal browser senza passare dagli store ufficiali, occupando meno di 5 MB."
  },
  {
    q: "Come funzionano le schede CBT e il tracciamento delle emozioni?",
    a: "Le schede CBT (Terapia Cognitivo-Comportamentale) ti guidano nel decostruire i pensieri negativi o ansiosi. Identifichi l'emozione (Ansia, Rabbia, Gratitudine, Paura), la valuti da 1 a 10 e rielabori il pensiero in modo costruttivo."
  },
  {
    q: "La mia privacy e i dati su Supabase sono al sicuro?",
    a: "Assolutamente sì. Utilizziamo la tecnologia Row-Level Security (RLS) di Supabase. I tuoi dati sono cifrati sia durante il trasferimento che nel database e accessibili esclusivamente tramite la tua sessione autenticata."
  },
  {
    q: "Le note vocali vengono ascoltate o condivise?",
    a: "No. L'audio viene trascritto in locale o tramite API cifrata e il testo risultante viene salvato nel tuo archivio privato. Nessun umano ascolterà mai le tue registrante."
  },
  {
    q: "Posso usarlo gratis e personalizzare le domande?",
    a: "Sì! Diariamente offre tutte le funzioni base trasversali e ti permette di definire domande custom personalizzate per rispecchiare i tuoi obiettivi personali."
  }
];

export const FOOTER_COLUMNS = [
  {
    title: "Prodotto",
    links: [
      { label: "Apri l'App Web", href: APP_URL },
      { label: "Confronto prima/dopo", href: "#confronto" },
      { label: "Funzionalità", href: "#funzionalita" },
      { label: "Guida Installazione", href: "#installazione" }
    ]
  },
  {
    title: "Sicurezza",
    links: [
      { label: "Architettura Supabase", href: "#sicurezza" },
      { label: "Politica sulla Privacy", href: "#privacy" },
      { label: "Esportazione Dati", href: "#export" }
    ]
  },
  {
    title: "Contatti",
    links: [
      { label: SITE.email, href: `mailto:${SITE.email}` },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter / X", href: "https://x.com" }
    ]
  }
];
