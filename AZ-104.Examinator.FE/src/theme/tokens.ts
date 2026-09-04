export interface ThemeTokens {
  bg: string;
  card: string;
  bd: string;
  bd2: string;
  bd3: string;
  tx: string;
  tx2: string;
  mu: string;
  fa: string;
  fa2: string;
  ac: string;
  acs: string;
  ok: string;
  okbg: string;
  okbd: string;
  er: string;
  erbg: string;
  erbd: string;
  sub: string;
  sh: string;
  head: string;
  track: string;
  dis: string;
  warn: string;
  warnbg: string;
  warnbd: string;
}

export const LIGHT: ThemeTokens = {
  bg: "#f4f3ef", card: "#ffffff", bd: "#e3e1dc", bd2: "#eeece7", bd3: "#ddd9d2",
  tx: "#17181a", tx2: "#3d4147", mu: "#6b6f76", fa: "#8a8f97", fa2: "#9aa0a7",
  ac: "#1f6feb", acs: "#eaf1fe", ok: "#147a4b", okbg: "#f2faf6", okbd: "#cfe6da",
  er: "#b3261e", erbg: "#fdf5f4", erbd: "#f0d4d1", sub: "#fbfaf8",
  sh: "rgba(20,22,26,.06)", head: "rgba(244,243,239,.94)", track: "#e7e5e0", dis: "#b9bcc1",
  warn: "#7a5c00", warnbg: "#fdf6e3", warnbd: "#e0a800",
};

export const DARK: ThemeTokens = {
  bg: "#141517", card: "#1c1e21", bd: "#2c2f34", bd2: "#26292d", bd3: "#3a3e44",
  tx: "#f0efec", tx2: "#c9ccd1", mu: "#9aa0a7", fa: "#82878e", fa2: "#71767d",
  ac: "#5b9bff", acs: "#16283f", ok: "#4cc38a", okbg: "#12241b", okbd: "#22503a",
  er: "#f0736a", erbg: "#2a1614", erbd: "#5a2620", sub: "#1f2225",
  sh: "rgba(0,0,0,.45)", head: "rgba(20,21,23,.94)", track: "#2c2f34", dis: "#5a5f66",
  warn: "#e8c46a", warnbg: "#2a2313", warnbd: "#7a6420",
};
