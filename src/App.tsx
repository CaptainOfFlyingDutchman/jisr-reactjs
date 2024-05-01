import "./App.css";
import { Tree } from "./components/Tree.tsx";
import { useEffect } from "react";
import { useMenu } from "./components/providers/MenuProvider.tsx";

export function App() {
  const { closeAllMenus } = useMenu();

  useEffect(() => {
    document.body.addEventListener("click", () => {
      closeAllMenus();
    });
  }, [closeAllMenus]);

  return (
    <div className="page">
      <div className="topbar">
        <h2>Business Logo</h2>
      </div>

      <div className="body">
        <div className="sidebar">
          <Tree />
        </div>

        <div className="content">
          <h1>Body content</h1>
        </div>
      </div>
    </div>
  );
}
