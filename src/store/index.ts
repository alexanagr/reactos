import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// storage redux library
import storage from "@/utils/storage";

/**
 *  Impoted reducers
 */
import configReducer from "./slices/configSlice";
import menuReducer from "./slices/menuSlice";

const persistConfig = {
  key: "config",
  storage,
};

const persistedConfigReducer = persistReducer(persistConfig, configReducer);

export const store = configureStore({
  reducer: {
    config: persistedConfigReducer,
    menu: menuReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
