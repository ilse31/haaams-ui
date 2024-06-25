import { IconType } from 'react-icons';
import * as React from "react";
export type InputProps = {
    /** Input label */
    label: string | null;
    /**
     * id to be initialized with React Hook Form,
     * must be the same with the pre-defined types.
     */
    id: string;
    /** Input placeholder */
    placeholder?: string;
    /** Small text below input, useful for additional information */
    helperText?: string;
    /**
     * Input type
     * @example text, email, password
     */
    type?: React.HTMLInputTypeAttribute;
    readOnly?: boolean;
    /** Disable error style (not disabling error validation) */
    hideError?: boolean;
    /** Manual validation using RHF, it is encouraged to use yup resolver instead */
    leftIcon?: IconType | string;
    rightNode?: React.ReactNode;
    containerClassName?: string;
    errorMessage?: string;
    color?: (typeof ButtonColor)[number];
    labelColor?: "primary" | "white" | "danger" | "secondary" | "tertiary";
    variant?: "outline" | "solid" | "underlined";
    required?: boolean;
} & React.ComponentPropsWithoutRef<"input">;
declare const ButtonColor: readonly ["sky", "pink", "green", "yellow", "red", "purple", "blue", "indigo", "gray", "cyan", "emerald"];
export default function Password({ label, placeholder, helperText, id, disabled, readOnly, hideError, leftIcon: LeftIcon, containerClassName, errorMessage, color, labelColor, required, variant, ...rest }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
