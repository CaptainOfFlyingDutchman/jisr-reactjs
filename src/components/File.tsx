import type { FileSystemFile } from "../data/fileSystem";
import { Menu } from "./Menu.tsx";
import { Icons } from "./Icons.tsx";
import { useMenu } from "./providers/MenuProvider.tsx";
import { useAtom, useSetAtom } from "jotai";

import { filesPreviewsAtom, selectedFileAtom } from "../atoms.ts";

export type FileProps = { node: FileSystemFile };

export function File({ node }: FileProps) {
  const setFilesPreviews = useSetAtom(filesPreviewsAtom);
  const [selectedFile, setSelectedFile] = useAtom(selectedFileAtom);

  const { fileMenus, closeMenu, closeAllMenus, openMenu } = useMenu();

  return (
    <>
      <li key={node.name}>
        <span
          className={`file-name ${selectedFile?.name === node.name ? "file-highlighted" : ""}`}
          onContextMenu={(e) => {
            e.preventDefault();

            openMenu(node.name);
          }}
          onClick={() => {
            closeAllMenus();

            setFilesPreviews((prev) => ({ ...prev, [node.name]: node }));
            setSelectedFile(() => node);
          }}
        >
          <span className="file-icon">{Icons[node.meta as string]}</span>
          <span>{node.name}</span>
        </span>

        {fileMenus[node.name] && (
          <div
            className="menu-placement"
            style={{
              position: "absolute",
              zIndex: 1,
              top: "1.5rem",
              left: "3rem",
            }}
          >
            <Menu fileName={node.name} closeMenu={() => closeMenu(node.name)} />
          </div>
        )}
      </li>
    </>
  );
}
