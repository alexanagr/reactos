import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ConfigState } from "@/types/config";
import { backgrounds } from "@/data/backgrounds";
import { type Language } from "@/types/config";
import { type Background } from "@/types/config";

// default state
const initialState: ConfigState = {
  darkMode: backgrounds.darkblue.isDark,
  background: backgrounds.darkblue.image,
  language: "english",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },

    setBackground(state, action: PayloadAction<Background>) {
      state.background = action.payload.image;
      state.darkMode = action.payload.isDark;
    },

    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },

    restoreConfig: (state, action: PayloadAction<ConfigState>) => {
      return action.payload;
    },
  },
});

export const { setLanguage, setBackground, toggleDarkMode, restoreConfig } =
  configSlice.actions;

export default configSlice.reducer;
