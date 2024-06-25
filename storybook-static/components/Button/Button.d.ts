import { default as React } from '../../../node_modules/react';
import { IconType } from 'react-icons';

export declare const ButtonVariant: readonly ["primary", "secondary", "danger", "outline", "ghost", "warning", "sky", "rose", "pink", "purple", "violet", "indigo", "cyan"];
export declare const ButtonSize: readonly ["sm", "base", "lg"];
export type ButtonProps = {
    isLoading?: boolean;
    variant?: (typeof ButtonVariant)[number];
    size?: (typeof ButtonSize)[number];
    leftIcon?: IconType;
    rightIcon?: IconType;
    leftIconClassName?: string;
    rightIconClassName?: string;
} & React.ComponentPropsWithRef<"button">;
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
