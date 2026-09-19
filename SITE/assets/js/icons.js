/**
 * icons.js — Set di icone SVG inline per Diariamente.
 * Vettori puliti e autonomi, senza dipendenze esterne.
 */

const ICON_PATHS = {
  arrowRight: ["M5 12h13", "m12 5 7 7-7 7"],
  check: ["M20 6 9 17l-5-5"],
  chevronDown: ["m6 9 6 6 6-6"],
  menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  close: ["M18 6 6 18", "M6 6l12 12"],
  mic: [
    "M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z",
    "M19 11v1a7 7 0 0 1-14 0v-1",
    "M12 19v2"
  ],
  shield: [
    "M20 12.5c0 5-3.6 7.6-7.7 9a1 1 0 0 1-.6 0C7.6 20.1 4 17.5 4 12.5V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z",
    "m9.2 12 2 2 3.6-3.8"
  ],
  phone: ["M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z", "M11 18.5h2"],
  grid: [
    "M4 5.5h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z",
    "M8 2.5v5",
    "M16 2.5v5",
    "M3 11h18"
  ],
  notebook: [
    "M15.5 3.5H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h7",
    "m17.5 12.5 3.2-3.2a1.6 1.6 0 0 0 0-2.3l-.7-.7a1.6 1.6 0 0 0-2.3 0L14.5 9.5v3h3Z",
    "M8 8h4"
  ],
  lock: [
    "M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z",
    "M8 11V7.5a4 4 0 0 1 8 0V11",
    "M12 15v2"
  ],
  cloud: ["M17.2 19H8.5a5.5 5.5 0 1 1 5-7.8h3.7a4 4 0 0 1 0 7.8Z"],
  share: ["M12 15V3", "m8.5 6.5 3.5-3.5 3.5 3.5", "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"],
  plusSquare: [
    "M5.5 4h13a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13A1.5 1.5 0 0 1 5.5 4Z",
    "M12 8.5v7",
    "M8.5 12h7"
  ],
  dots: ["M12 6.2v.01", "M12 12v.01", "M12 17.8v.01"],
  sparkle: [
    "m12 3 1.7 5.1a2 2 0 0 0 1.2 1.2L20 11l-5.1 1.7a2 2 0 0 0-1.2 1.2L12 19l-1.7-5.1a2 2 0 0 0-1.2-1.2L4 11l5.1-1.7a2 2 0 0 0 1.2-1.2Z"
  ],
  bolt: ["M13 3 5.5 13H11l-1 8 8.5-10.5H13l1-7.5Z"],
  compass: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z", "m14.8 9.2-1.6 4.1a1 1 0 0 1-.6.6l-4 1.5 1.6-4.1a1 1 0 0 1 .6-.6Z"],
  download: ["M12 3v11", "m8 10.5 4 4 4-4", "M5 20h14"],
  eye: ["M12 5c5 0 9 4.3 9 7s-4 7-9 7-9-4.3-9-7 4-7 9-7Z", "M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"],
  sun: [
    "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
    "M12 2v2", "M12 20v2", "M4.93 4.93l1.41 1.41", "M17.66 17.66l1.41 1.41",
    "M2 12h2", "M20 12h2", "M6.34 17.66l-1.41 1.41", "M19.07 4.93l-1.41 1.41"
  ],
  plus: ["M12 5v14", "M5 12h14"],
  search: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "m21 21-4.35-4.35"],
  clock: ["M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M12 7v5l3 3"],
  chart: ["M3 3v18h18", "M18 17V9", "M13 17V5", "M8 17v-3"],
  helpCircle: ["M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", "M12 17h.01"],
  settings: [
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"
  ],
  brain: [
    "M9.5 4a3.5 3.5 0 0 0-3.4 4.3 3.5 3.5 0 0 0-.8 6.5 3.5 3.5 0 0 0 4.2 4.2 3.5 3.5 0 0 0 5 0 3.5 3.5 0 0 0 4.2-4.2 3.5 3.5 0 0 0-.8-6.5A3.5 3.5 0 0 0 14.5 4a3.5 3.5 0 0 0-5 0Z",
    "M12 4v16"
  ],
  calendar: [
    "M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z",
    "M16 2v4", "M8 2v4", "M3 10h18"
  ],
  heart: ["M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"],
  star: ["m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"],
  zap: ["M13 2L3 14h9l-1 8 10-12h-9l1-8z"],
  apple: [
    "M12 2a3 3 0 0 0-2.3 1.2A3 3 0 0 0 9 5.5a3 3 0 0 0 2.3-1.2A3 3 0 0 0 12 2Z",
    "M15.5 7.5c-1.3 0-2.4.7-3.1.7-.7 0-1.7-.7-3-.7-2.3 0-4.4 1.7-4.4 4.8 0 3 2.6 7.2 4.4 7.2 1.1 0 1.9-.8 3-.8 1.1 0 1.7.8 3 .8 1.8 0 4.1-3.9 4.4-4.8-2.6-1.1-2.9-4.8-.3-6.2-.8-1-2.4-1-4-1Z"
  ],
  playStore: [
    "M4.5 3.5l14 8.5-14 8.5v-17z",
    "M4.5 3.5l10.5 10.5",
    "M4.5 20.5l10.5-10.5"
  ]
};

export function icon(name, className = "w-5 h-5", strokeWidth = 1.5) {
  const paths = ICON_PATHS[name] || [];
  const body = paths.map((d) => `<path d="${d}" />`).join("");

  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}"
    stroke-linecap="round" stroke-linejoin="round" class="${className}" aria-hidden="true">${body}</svg>`;
}

export function brandMark(size = 44, animated = true) {
  const glyph = Math.round(size * 0.64);
  const uid = `bm${Math.random().toString(36).slice(2, 8)}`;

  return `
    <span class="brand-mark ${animated ? "mark-sweep" : ""}" style="width:${size}px;height:${size}px">
      <svg viewBox="0 0 24 24" width="${glyph}" height="${glyph}" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="${uid}-stroke" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#ffffff" />
            <stop offset=".44" stop-color="#c6d1e2" />
            <stop offset=".72" stop-color="#7d8ca6" />
            <stop offset="1" stop-color="#eaf0f8" />
          </linearGradient>
          <linearGradient id="${uid}-fill" x1="6" y1="20" x2="18" y2="4" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="rgba(99,102,241,.55)" />
            <stop offset="1" stop-color="rgba(226,232,240,.1)" />
          </linearGradient>
        </defs>
        <path d="M12 4.1c4 0 6.8 2.7 6.8 6.3 0 1.3-.4 2.4-1.1 3.4.4 2.6-1.6 4.8-4.2 4.8-.5 0-1-.1-1.5-.3-.5.2-1 .3-1.5.3-2.6 0-4.6-2.2-4.2-4.8-.7-1-1.1-2.1-1.1-3.4C5.2 6.8 8 4.1 12 4.1Z"
              fill="url(#${uid}-fill)" stroke="url(#${uid}-stroke)" stroke-width="1.15" stroke-linejoin="round" />
        <g stroke="url(#${uid}-stroke)" stroke-width="1" stroke-linecap="round" opacity=".92">
          <path d="M12 4.6v13.6" />
          <path d="M9.4 7.3c-1.1.4-1.8 1.4-1.8 2.5 0 .8.4 1.5 1 2" />
          <path d="M14.6 7.3c1.1.4 1.8 1.4 1.8 2.5 0 .8-.4 1.5-1 2" />
          <path d="M9.5 14.6c.7-.7 1.6-1.1 2.5-1.1" />
          <path d="M14.5 14.6c-.7-.7-1.6-1.1-2.5-1.1" />
        </g>
      </svg>
    </span>`;
}
