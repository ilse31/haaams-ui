import { FileWithPreview } from '../../libs/dropzone';
import * as React from "react";
export type FilePreviewProps = {
    file: FileWithPreview;
} & ({
    deleteFile?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, file: FileWithPreview) => void;
    readOnly?: true;
} | {
    deleteFile: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, file: FileWithPreview) => void;
    readOnly?: false;
});
