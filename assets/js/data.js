/**
 * data.js — Tutti i contenuti della pagina in un unico posto.
 * Modificando questo file si aggiorna la landing senza toccare i componenti.
 */

/** Destinazione unica di ogni call to action. */
export const APP_URL = "https://samubarbadbr.github.io/CURAMENTE/";

export const SITE = {
  name: "Diariamente",
  domain: "www.diariamente.it",
  email: "ciao@diariamente.it"
};

export const NAV_LINKS = [
  { label: "Funzionalità", href: "#funzionalita" },
  { label: "Come funziona", href: "#installazione" },
  { label: "Sicurezza", href: "#sicurezza" },
  { label: "Domande", href: "#faq" }
];

export const HERO = {
  badge: "Si installa dal browser in dieci secondi",
  title: "Ogni giorno lascia una traccia. Qui diventa leggibile.",
  lede:
    "Diariamente è un diario guidato che vive nel browser. Rispondi a poche domande, registra un pensiero a voce " +
    "e guarda come cambiano umore, energia e abitudini nel tempo. Niente App Store, niente Play Store: lo aggiungi " +
    "alla schermata Home di iPhone o Android e si apre come un'app.",
  primaryCta: "Inizia ora",
  secondaryCta: "Aggiungi alla Home"
};

/**
 * Funzionalità della bento box.
 * `layout` decide l'occupazione nella griglia asimmetrica.
 */
export const FEATURES = [
  {
    id: "diario",
    icon: "notebook",
    layout: "tall",
    title: "Diario guidato",
    body:
      "Domande mirate che cambiano con il tuo momento e slider per registrare umore, energia e sonno " +
      "in pochi secondi. Nessuna pagina bianca da riempire nelle sere in cui non hai voglia di scrivere.",
    visual: "prompt"
  },
  {
    id: "audio",
    icon: "mic",
    layout: "wide",
    title: "Note audio con trascrizione",
    body: "Premi il microfono e parla. La nota viene trascritta e archiviata insieme alla giornata.",
    visual: "waveform"
  },
  {
    id: "heatmap",
    icon: "grid",
    layout: "wide",
    title: "Heatmap della costanza",
    body: "Una griglia in stile GitHub mostra mese dopo mese le serie piene e i vuoti, a colpo d'occhio.",
    visual: "heatmap"
  },
  {
    id: "privacy",
    icon: "shield",
    layout: "wide",
    title: "Privacy come impostazione predefinita",
    body: "Voci legate solo al tuo account, protette da regole di accesso per riga su Supabase e cifrate in transito.",
    visual: "none"
  },
  {
    id: "pwa",
    icon: "phone",
    layout: "wide",
    title: "Esperienza nativa, zero installazioni",
    body: "Icona sulla Home, apertura a schermo intero, aggiornamenti automatici e pochi megabyte occupati.",
    visual: "none"
  }
];

/** Passaggi della guida all'installazione, divisi per piattaforma. */
export const INSTALL_GUIDE = {
  ios: {
    label: "iPhone e iPad",
    hint: "Serve Safari: da Chrome su iOS il pulsante di installazione non compare.",
    steps: [
      {
        icon: "compass",
        title: "Apri Diariamente in Safari",
        body: "Tocca “Inizia ora” in questa pagina oppure digita l'indirizzo nella barra."
      },
      {
        icon: "share",
        title: "Tocca il pulsante Condividi",
        body: "È il quadrato con la freccia verso l'alto, in basso al centro dello schermo."
      },
      {
        icon: "plusSquare",
        title: "Scegli “Aggiungi a Home”",
        body: "Scorri l'elenco, conferma il nome e tocca Aggiungi: l'icona compare tra le tue app."
      }
    ]
  },
  android: {
    label: "Android",
    hint: "Su alcuni telefoni la voce si chiama “Installa app”.",
    steps: [
      {
        icon: "compass",
        title: "Apri Diariamente in Chrome",
        body: "Spesso appare già un banner in basso che propone l'installazione: puoi usare quello."
      },
      {
        icon: "dots",
        title: "Apri il menu con i tre puntini",
        body: "In alto a destra, accanto alla barra degli indirizzi."
      },
      {
        icon: "download",
        title: "Scegli “Aggiungi a schermata Home”",
        body: "Conferma e trovi Diariamente insieme alle altre app, senza passare dal Play Store."
      }
    ]
  }
};

export const SECURITY_POINTS = [
  {
    icon: "lock",
    title: "Il diario è tuo e basta",
    body: "Le voci sono legate al tuo account e protette da regole di accesso per riga: nessun altro utente può leggerle."
  },
  {
    icon: "shield",
    title: "Cifratura in transito e a riposo",
    body: "Connessione TLS verso Supabase e archiviazione cifrata sui server, con backup gestiti."
  },
  {
    icon: "eye",
    title: "Nessuna pubblicità, nessuna profilazione",
    body: "Non vendiamo i dati e non li usiamo per costruire profili pubblicitari. Non c'è niente da vendere."
  },
  {
    icon: "download",
    title: "Esporta o cancella quando vuoi",
    body: "Scarichi l'archivio completo in un file oppure elimini l'account: i dati spariscono con lui."
  }
];

export const FAQ_ITEMS = [
  {
    q: "Perché non è sugli store?",
    a: "Perché non serve. Diariamente è una PWA: si installa dal browser, si aggiorna da sola e occupa pochi megabyte. Funziona allo stesso modo su iPhone, Android e desktop."
  },
  {
    q: "Funziona senza connessione?",
    a: "Le voci recenti restano consultabili offline. Quando torni online, le nuove risposte si sincronizzano da sole."
  },
  {
    q: "Quanto tempo richiede al giorno?",
    a: "Due o tre minuti. Le domande guidate e gli slider servono proprio a evitare la pagina bianca."
  },
  {
    q: "Le note audio vengono ascoltate da qualcuno?",
    a: "No. L'audio viene trascritto in automatico e resta nel tuo archivio privato, come qualsiasi altra voce del diario."
  },
  {
    q: "Posso portare via i miei dati?",
    a: "Sì, in qualsiasi momento. Esporti l'archivio completo in un file oppure elimini l'account e tutto quello che contiene."
  }
];

export const FOOTER_COLUMNS = [
  {
    title: "Prodotto",
    links: [
      { label: "Apri la web app", href: APP_URL },
      { label: "Funzionalità", href: "#funzionalita" },
      { label: "Come si installa", href: "#installazione" },
      { label: "Sicurezza", href: "#sicurezza" }
    ]
  },
  {
    title: "Legale",
    links: [
      { label: "Informativa privacy", href: "#privacy" },
      { label: "Termini di servizio", href: "#termini" },
      { label: "Cookie", href: "#cookie" }
    ]
  },
  {
    title: "Contatti",
    links: [
      { label: SITE.email, href: `mailto:${SITE.email}` },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "X", href: "https://x.com" }
    ]
  }
];
