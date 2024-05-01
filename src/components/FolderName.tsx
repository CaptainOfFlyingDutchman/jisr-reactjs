import type { FileSystemFile } from "../data/fileSystem.ts";

type FolderNameProps = {
  childrenVisible: boolean;
  node: FileSystemFile;
};

export function FolderName({ childrenVisible, node }: FolderNameProps) {
  return (
    <span className="folder-name">
      {childrenVisible ? <span>📂 </span> : <span>📁 </span>}

      {node.name}
    </span>
  );
}
