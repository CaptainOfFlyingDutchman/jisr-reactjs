import type { FileSystemFile } from "../data/fileSystem";
import { useState } from "react";
import { Menu } from "./Menu.tsx";

export type FileProps = { node: FileSystemFile };

export function File({ node }: FileProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <li key={node.name}>
        <span
          className="file-name"
          onContextMenu={(e) => {
            e.preventDefault();
            setMenuOpen((prev) => !prev);
          }}
          onClick={() => setMenuOpen(false)}
        >
          📄 {node.name}
        </span>

        {menuOpen && (
          <div
            className="menu-placement"
            style={{
              position: "absolute",
              zIndex: 1,
              top: "1.5rem",
              left: "3rem",
            }}
          >
            <Menu fileName={node.name} closeMenu={() => setMenuOpen(false)} />
          </div>
        )}
      </li>
    </>
  );
}
