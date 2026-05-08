import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type MenuItem, type MenuState } from "@/types/menu";

const initialState: MenuState = {
  items: {
    "apps-menu": {
      id: "apps-menu",
      shown: false,
    },

    "context-menu": {
      id: "context-menu",
      shown: false,
    },
  },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,

  reducers: {
    toggleMenu(state, action: PayloadAction<string>) {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id].shown = !state.items[id].shown;
      }
    },

    // open specific menu
    openMenu(state, action: PayloadAction<string>) {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id].shown = true;
      }
    },

    // close specific menu
    closeMenu(state, action: PayloadAction<string>) {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id].shown = false;
      }
    },

    registerMenu(state, action: PayloadAction<MenuItem>) {
      state.items[action.payload.id] = action.payload;
    },
  },
});

export const { toggleMenu, openMenu, closeMenu, registerMenu } =
  menuSlice.actions;

export default menuSlice.reducer;
