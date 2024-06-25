import { default as Select } from 'react-select';
import { ExtractProps } from '../../libs/helpers';

export type SearchableSelectInputProps = {
    label: string | null;
    id: string;
    placeholder?: React.ReactNode;
    helperText?: string;
    type?: string;
    isMulti?: boolean;
    readOnly?: boolean;
    hideError?: boolean;
    options: {
        value: string;
        label: string;
    }[];
    containerClassName?: string;
    required?: boolean;
    error?: string;
} & React.ComponentPropsWithoutRef<"select"> & ExtractProps<Select>;
export default function SearchableSelectInput({ disabled, readOnly, label, helperText, id, isMulti, placeholder, options, hideError, containerClassName, error, required, ...rest }: SearchableSelectInputProps): import("react/jsx-runtime").JSX.Element;
