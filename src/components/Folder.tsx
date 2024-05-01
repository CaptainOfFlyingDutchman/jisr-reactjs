import { File, FileProps } from "./File";
import { useState } from "react";
import { DirectoryName } from "./DirectoryName.tsx";

type FolderProps = { node: FileProps["node"] };

export function Folder({ node }: FolderProps) {
  const [childrenVisible, setChildrenVisible] = useState(false);

  if (node.data) {
    return (
      <>
        <li key={node.name} className="folder">
          {childrenVisible ? (
            <button onClick={() => setChildrenVisible(false)}>➖</button>
          ) : (
            <button onClick={() => setChildrenVisible(true)}>➕</button>
          )}

          <DirectoryName childrenVisible={childrenVisible} node={node} />
        </li>

        {childrenVisible && (
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

      <DirectoryName childrenVisible={childrenVisible} node={node} />
    </li>
  );
}
