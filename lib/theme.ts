// Design tokens directly matching src/theme.ts from Miko application
export const THEME = {
  colors: {
    // Neutral Palette
    ink: "#241E19",
    ink2: "#554C43",
    ink3: "#6E6358",
    ink4: "#7C7166",
    faint: "#A2988B",
    line: "#EFE7DC",
    surfaceSunken: "#F2EBE1",
    surface: "#FFFFFF",
    paper: "#FBF7F2", // Ground color - never pure white

    // Active Chemistry Color Palette - Color is information, not decoration
    actives: {
      retinoid: "#D97742",
      ahaBha: "#C4574E",
      vitaminC: "#E0AE39",
      barrier: "#5E9E78",
      hydrator: "#6B93B8",
      peptide: "#8E7AB5",
      brightening: "#A97DBA",
      soothing: "#6FA98A",
      fragrance: "#C98BA6",
    },

    // Tint backgrounds for active cards/badges (with high legibility contrast)
    activeTints: {
      retinoid: "#FBF0EB",
      ahaBha: "#FCEEEB",
      vitaminC: "#FAF5E5",
      barrier: "#EFF6F2",
      hydrator: "#EEF4F8",
      peptide: "#F3F0F7",
      brightening: "#F6F1F8",
      soothing: "#EFF7F3",
      fragrance: "#FAF0F4",
    },

    // Verdicts
    verdicts: {
      fine: "#4E8F68",
      separate: "#B07A26",
      avoid: "#B84A3D",
    },
    verdictTints: {
      fine: "#EDF5F0",
      separate: "#FBF4E7",
      avoid: "#FBEDED",
    },

    // 4 Ingredient Evaluation Levels
    levels: {
      good: "#4E8F68",
      neutral: "#7C7166",
      watch: "#B07A26",
      avoid: "#B84A3D",
    },
    levelTints: {
      good: "#EDF5F0",
      neutral: "#F4EFEB",
      watch: "#FBF4E7",
      avoid: "#FBEDED",
    },
  },
  typography: {
    display: "Young Serif, Georgia, serif",
    body: "Instrument Sans, system-ui, -apple-system, sans-serif",
    mono: "IBM Plex Mono, Menlo, monospace",
  },
} as const;
