import "./App.css";
import { Tree } from "./components/Tree.tsx";
import { useEffect } from "react";
import { useMenu } from "./components/providers/MenuProvider.tsx";
import { useAtomValue } from "jotai";
import { filesPreviewsAtom, selectedFileAtom } from "./atoms";
import { FilePreview } from "./components/FilePreview";

export function App() {
  const filesPreviews = useAtomValue(filesPreviewsAtom);
  const selectedFile = useAtomValue(selectedFileAtom);

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
          <FilePreview file={filesPreviews[selectedFile?.name || ""]} />
        </div>
      </div>
    </div>
  );
}
