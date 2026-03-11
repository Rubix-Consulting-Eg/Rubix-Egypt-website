"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    600?: string;
    700?: string;
    900?: string;
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BE0E5B",
      dark: "#720837",
      light: "#FF6B9D",
      600: "#980B49",
      700: "#720837",
      900: "#260312",
    },
    background: {
      default: "#0A0A0F",
      paper: "#111118",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A0A0B0",
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    h1: { fontWeight: 700, fontSize: "4rem" },
    h2: { fontWeight: 700, fontSize: "2.5rem" },
    body1: { fontSize: "1rem", fontWeight: 400 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "12px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});
