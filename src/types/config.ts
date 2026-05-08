export interface Background {
  image: string;
  isDark: boolean;
}

// language types
const languages = {
  greek: { name: "greek", key: "elGR" },
  english: { name: "english", key: "enUS" },
} as const;

export type Language = keyof typeof languages;

// entire config init state
export interface ConfigState {
  darkMode: boolean;
  background: string;
  language: Language;
}