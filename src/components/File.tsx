import type { FileSystemFile } from "../data/fileSystem";
import { useState } from "react";
import { Menu } from "./Menu.tsx";
import { Icons } from "./Icons.tsx";
import { useMenu } from "./providers/MenuProvider.tsx";

export type FileProps = { node: FileSystemFile };

export function File({ node }: FileProps) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const { fileMenus, closeMenu, closeAllMenus, openMenu } = useMenu();

  return (
    <>
      <li key={node.name}>
        <span
          className={`file-name ${isHighlighted ? "file-highlighted" : ""}`}
          onContextMenu={(e) => {
            e.preventDefault();

            openMenu(node.name);
          }}
          onClick={() => {
            closeAllMenus();

            setIsHighlighted((prev) => !prev);
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
