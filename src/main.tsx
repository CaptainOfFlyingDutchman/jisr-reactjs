import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { MenuProvider } from "./components/providers/MenuProvider.tsx";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MenuProvider>
      {/* DevTools are tree-shakable in Production builds*/}
      <DevTools />

      <App />
    </MenuProvider>
  </React.StrictMode>,
);
