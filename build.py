#!/usr/bin/env python3
"""
build.py — Genera dist/index.html, una versione a file singolo del sito.

Il sito modulare funziona già così com'è su GitHub Pages: questo script serve
solo quando ti serve un unico file da incollare altrove (anteprime, email,
hosting che non accetta sottocartelle).

Cosa fa:
  1. inserisce i CSS locali dentro un tag <style>;
  2. concatena i moduli JS nell'ordine delle dipendenze, rimuovendo import
     ed export (nessuno di essi usa export default o rinominazioni);
  3. scrive il risultato in dist/index.html.

Uso:  python3 build.py
"""

from pathlib import Path
import re

ROOT = Path(__file__).parent
DIST = ROOT / "dist"

CSS_FILES = [
    "assets/css/tokens.css",
    "assets/css/base.css",
    "assets/css/effects.css",
    "assets/css/components.css",
]

# L'ordine conta: i moduli senza dipendenze vengono per primi.
JS_FILES = [
    "assets/js/icons.js",
    "assets/js/data.js",
    "assets/js/components/phone-mockup.js",
    "assets/js/components/navbar.js",
    "assets/js/components/hero.js",
    "assets/js/components/features.js",
    "assets/js/components/install-guide.js",
    "assets/js/components/security.js",
    "assets/js/components/faq.js",
    "assets/js/components/footer.js",
    "assets/js/effects.js",
    "assets/js/app.js",
]

IMPORT_STATEMENT = re.compile(r"^import\s[\s\S]*?from\s+['\"].*?['\"];\s*$", re.MULTILINE)
EXPORT_KEYWORD = re.compile(r"^export\s+(?=(function|const|let|class))", re.MULTILINE)


def strip_module_syntax(source: str) -> str:
    """Rimuove import ed export per poter concatenare i moduli in un solo scope."""
    source = IMPORT_STATEMENT.sub("", source)
    source = EXPORT_KEYWORD.sub("", source)
    return source.strip()


def build() -> Path:
    html = (ROOT / "index.html").read_text(encoding="utf-8")

    css = "\n\n".join((ROOT / path).read_text(encoding="utf-8") for path in CSS_FILES)
    js = "\n\n".join(strip_module_syntax((ROOT / path).read_text(encoding="utf-8")) for path in JS_FILES)

    # Sostituisce i quattro <link> locali con un unico blocco <style>.
    html = re.sub(
        r'\s*<link rel="stylesheet" href="\./assets/css/[^"]+" />',
        "",
        html,
    ).replace("</head>", f"  <style>\n{css}\n  </style>\n</head>")

    # Sostituisce il modulo d'ingresso con lo script concatenato.
    html = html.replace(
        '<script type="module" src="./assets/js/app.js"></script>',
        f"<script>\n{js}\n</script>",
    )

    DIST.mkdir(exist_ok=True)
    output = DIST / "index.html"
    output.write_text(html, encoding="utf-8")
    return output


if __name__ == "__main__":
    result = build()
    size_kb = result.stat().st_size / 1024
    print(f"Creato {result} ({size_kb:.1f} KB)")
