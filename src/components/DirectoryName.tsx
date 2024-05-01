import type { FileSystemFile } from "../data/fileSystem.ts";

type DirectoryNameProps = {
  childrenVisible: boolean;
  node: FileSystemFile;
};

export function DirectoryName({ childrenVisible, node }: DirectoryNameProps) {
  return (
    <span className="folder-name">
      {childrenVisible ? <span>📂 </span> : <span>📁 </span>}

      {node.name}
    </span>
  );
}
