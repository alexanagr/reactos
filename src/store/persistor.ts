import { store } from "@/store";
import { restoreConfig } from "./slices/configSlice";

const STATE_KEY = "reactos_state";

export const saveState = () =>
  localStorage.setItem(
    STATE_KEY,
    JSON.stringify({
      config: store.getState().config,
      menu: store.getState().menu,
    }),
  );

export const loadState = () => {
  const state = JSON.parse(localStorage.getItem(STATE_KEY) || "null");
  if (state?.config) {
    store.dispatch(restoreConfig(state.config));
  }
};

export const setupPersistor = () => {
  loadState();
  store.subscribe(saveState);
};
