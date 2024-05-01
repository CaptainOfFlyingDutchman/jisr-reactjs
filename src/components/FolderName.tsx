import type { FileSystemFile } from "../data/fileSystem.ts";

type FolderNameProps = {
  areChildrenVisible: boolean;
  node: FileSystemFile;
};

export function FolderName({ areChildrenVisible, node }: FolderNameProps) {
  return (
    <span className="folder-name">
      {areChildrenVisible ? <span>📂 </span> : <span>📁 </span>}

      {node.name}
    </span>
  );
}
