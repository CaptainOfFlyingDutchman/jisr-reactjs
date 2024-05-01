import { File, FileProps } from "./File";
import { useState } from "react";
import { FolderName } from "./FolderName.tsx";

type FolderProps = { node: FileProps["node"] };

export function Folder({ node }: FolderProps) {
  const [areChildrenVisible, setAreChildrenVisible] = useState(false);

  if (node.data) {
    return (
      <>
        <li key={node.name} className="folder">
          {areChildrenVisible ? (
            <button onClick={() => setAreChildrenVisible(false)}>➖</button>
          ) : (
            <button onClick={() => setAreChildrenVisible(true)}>➕</button>
          )}

          <FolderName areChildrenVisible={areChildrenVisible} node={node} />
        </li>

        {areChildrenVisible && (
          <ul className="folder-children">
            {node.data.map((child) => {
              return child.type === "folder" ? (
                <Folder key={child.name} node={child} />
              ) : (
                <File key={child.name} node={child} />
              );
            })}
          </ul>
        )}
      </>
    );
  }

  return (
    <li key={node.name} className="folder">
      <button>➕</button>

      <FolderName areChildrenVisible={areChildrenVisible} node={node} />
    </li>
  );
}
