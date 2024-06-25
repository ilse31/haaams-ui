import { Accept } from 'react-dropzone';
import { FileWithPreview } from '../../libs/dropzone';

type DropzoneInputProps = {
    accept?: Accept;
    helperText?: string;
    id?: string;
    label: string | null;
    maxFiles?: number;
    readOnly?: boolean;
    hideError?: boolean;
    required?: boolean;
    customError?: string;
    validation?: (files: FileWithPreview[]) => string | null;
};
export default function DropzoneInput({ accept, helperText, id, label, maxFiles, readOnly, hideError, customError, required, validation, }: DropzoneInputProps): import("react/jsx-runtime").JSX.Element;
export {};
