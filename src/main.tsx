import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "@/store";
import { setupPersistor } from "./store/persistor";
import "./index.css";
import "./i18n";
setupPersistor();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);