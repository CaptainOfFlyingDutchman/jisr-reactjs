import {FileIcon, defaultStyles} from 'react-file-icon';
import {ReactNode} from "react";

export const Icons: Record<string, ReactNode> = {
    'js': <FileIcon extension="js" {...defaultStyles['js']} />,
    'ts': <FileIcon extension="ts" {...defaultStyles['ts']} />,
    'html': <FileIcon extension="html" {...defaultStyles['html']} />,
    'svg': <FileIcon extension="svg" {...defaultStyles['svg']} />,
    'png': <FileIcon extension="png" {...defaultStyles['png']} />,
    'img': <FileIcon extension="jpg" {...defaultStyles['jpg']} />,
}
