import { File } from "./File";
import { useState } from "react";

import type { FileSystemFile } from "../data/fileSystem";

export function Folder({ node }: { node: FileSystemFile }) {
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
                <Folder node={child} />
              ) : (
                <File node={child} />
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

function DirectoryName({
  childrenVisible,
  node,
}: {
  childrenVisible: boolean;
  node: FileSystemFile;
}) {
  return (
    <span className="folder-name">
      {childrenVisible ? <span>📂 </span> : <span>📁 </span>}

      {node.name}
    </span>
  );
}
