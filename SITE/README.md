# Diariamente — Landing Page

Landing page della PWA **Diariamente**. HTML5 + Tailwind CSS + moduli ES nativi:
nessuno step di build, nessuna dipendenza da installare, pubblicabile su GitHub Pages
copiando la cartella così com'è.

## Struttura

```
.
├── index.html                    documento principale, monta #app
├── build.py                      genera dist/index.html (versione a file singolo)
├── dist/index.html               build opzionale, tutto inline
└── assets/
    ├── css/
    │   ├── tokens.css            colori, raggi, ombre, curve di animazione
    │   ├── base.css              reset, scala tipografica, accessibilità
    │   ├── effects.css           vetro satinato, shimmer, spotlight, reveal
    │   └── components.css        stili dei singoli componenti
    └── js/
        ├── data.js               tutti i testi e l'URL dell'app
        ├── icons.js              icone SVG inline e logo 3D
        ├── effects.js            reveal, parallasse, spotlight, navbar
        ├── app.js                entry point: monta e inizializza
        └── components/
            ├── navbar.js
            ├── hero.js
            ├── phone-mockup.js   frame smartphone, waveform, heatmap
            ├── features.js       bento grid
            ├── install-guide.js  tab iOS / Android
            ├── security.js
            ├── faq.js
            └── footer.js
```

## Modificare i contenuti

Testi, link del menu, funzionalità, passaggi di installazione, FAQ e footer vivono
tutti in `assets/js/data.js`. L'URL della web app è la costante `APP_URL` in cima
al file: cambiandola si aggiornano tutte le call to action in una volta sola.

Colori, raggi e tempi di animazione stanno in `assets/css/tokens.css`.

## Sviluppo in locale

I moduli ES richiedono un server HTTP, il doppio clic su `index.html` non basta:

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

## Pubblicazione su GitHub Pages

1. Copia il contenuto della cartella nella radice del repository.
2. Vai in **Settings → Pages** e imposta la sorgente sul branch `main`, cartella `/ (root)`.
3. Il file `.nojekyll` incluso evita che Jekyll interferisca con la cartella `assets`.

Per un sito su dominio personalizzato (`www.diariamente.it`), aggiungi un file `CNAME`
con dentro il dominio e configura il record DNS come indicato da GitHub.

## Versione a file singolo

```bash
python3 build.py     # crea dist/index.html con CSS e JS inline
```

Utile per anteprime o per hosting che accetta un solo file. La versione modulare
resta quella da mantenere.

## Note tecniche

- **Tailwind** è caricato da CDN. Per un sito ad alto traffico conviene passare alla
  build locale (`npx tailwindcss -i input.css -o assets/css/tailwind.css --minify`)
  e sostituire lo `<script>` con il CSS generato.
- **Movimento ridotto**: con `prefers-reduced-motion: reduce` parallasse, spotlight e
  reveal vengono disattivati e tutti i contenuti restano visibili.
- **Accessibilità**: focus visibile su ogni elemento interattivo, tab con `role="tablist"`,
  accordion con `aria-expanded`, link di salto al contenuto.
- **Icone**: SVG scritti inline in stile Lucide, per non dipendere da un pacchetto esterno.
  Se passi a React, `assets/js/icons.js` è il file da sostituire con `lucide-react`.
