
export type FileSystem = FileSystemFile[];

export type FileSystemFile = {
  type: "file" | "folder";
  name: string;
  content?: string;
  data?: FileSystemFile[];
  meta?: string;
};

export const fileSystem: FileSystem = [
  {
    type: "folder",
    name: "parent",
    data: [
      {
        type: "folder",
        name: "root",
        data: [
          {
            type: "folder",
            name: "src",
            data: [
              {
                type: "file",
                meta: "js",
                name: "index.js",
                content: "export function getCurrentDate() {return new Date()}\n",
              },
            ],
          },
          {
            type: "folder",
            name: "public",
            data: [
              {
                type: "file",
                meta: "ts",
                name: "index.ts",
                content: "export type InsuranceRecords = Record<string, Insurance>\n",
              },
            ],
          },
          {
            type: "file",
            meta: "html",
            name: "index.html",
            content: "<!doctype html><html lang='en'><head><meta charset='UTF-8'>             <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>                         <meta http-equiv='X-UA-Compatible' content='ie=edge'>             <title>Document</title></head><body> <span>index.html</span> </body></html>",
          },
          {
            type: "folder",
            name: "data",
            data: [
              {
                type: "folder",
                name: "images",
                data: [
                  {
                    type: "file",
                    meta: "img",
                    name: "image.png",
                  },
                  {
                    type: "file",
                    meta: "img",
                    name: "image2.webp",
                  },
                ],
              },
              {
                type: "file",
                meta: "svg",
                name: "logo.svg",
              },
            ],
          },
        ],
      },
    ],
  },
];
