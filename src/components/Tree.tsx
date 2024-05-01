import { Folder } from "./Folder.tsx";
import { File } from "./File";
import { fileSystem } from "../data/fileSystem.ts";

export function Tree() {
  return (
    <div className="tree">
      <ul>
        {fileSystem.map((node) => {
          return node.type === "folder" ? (
            <Folder node={node} />
          ) : (
            <File node={node} />
          );
        })}
      </ul>
    </div>
  );
}
