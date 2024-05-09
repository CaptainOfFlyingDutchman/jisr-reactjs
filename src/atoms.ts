import { atom } from "jotai/index";
import { FileSystemFile } from "./data/fileSystem";

export const filesPreviewsAtom = atom<Record<string, FileSystemFile>>({});
export const selectedFileAtom = atom<FileSystemFile | null>(null);
