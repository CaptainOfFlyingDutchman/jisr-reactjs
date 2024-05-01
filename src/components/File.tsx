import type {FileSystemFile } from '../data/fileSystem';

export function File({ node }: { node: FileSystemFile}) {
  return (
    <li key={node.name}>
      <span className="file-name">📄 {node.name}</span>
    </li>
  );
}
