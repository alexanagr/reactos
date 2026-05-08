export interface Background {
  image: string;
  isDark: boolean;
}

export const backgrounds = {
  darkblue: {
    image: "/bg/darkblue.jpg",
    isDark: true,
  },
} as const;
