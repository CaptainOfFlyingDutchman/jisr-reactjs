import { FileSystemFile } from "../data/fileSystem.ts";

type FilePreviewProps = { file: FileSystemFile | null };

export function FilePreview({ file }: FilePreviewProps) {
  if (!file || file.type === "folder") {
    return <p>Please select a file to preview</p>;
  }

  if (["svg", "img"].includes(file.meta as string)) {
    return <img src={`/public/images/${file.name}`} alt="" />;
  }

  return <p>{file.content}</p>;
}
