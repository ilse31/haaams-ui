import { FileWithPreview } from '../../libs/dropzone';
import * as React from "react";
type FilePreviewProps = {
    file: FileWithPreview;
} & ({
    deleteFile?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, file: FileWithPreview) => void;
    readOnly?: true;
} | {
    deleteFile: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, file: FileWithPreview) => void;
    readOnly?: false;
});
export default function FilePreview({ deleteFile, file, readOnly, }: FilePreviewProps): React.ReactElement;
export {};
