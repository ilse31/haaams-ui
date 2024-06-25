import * as React from "react";
import { IconType } from "react-icons";
import Input from "./Input";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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

const ButtonColor = [
  "sky",
  "pink",
  "green",
  "yellow",
  "red",
  "purple",
  "blue",
  "indigo",
  "gray",
  "cyan",
  "emerald",
] as const;

export default function Password({
  label,
  placeholder = "",
  helperText,
  id,
  disabled,
  readOnly = false,
  hideError = false,
  leftIcon: LeftIcon,
  containerClassName,
  errorMessage,
  color = "sky",
  labelColor = "primary",
  required = false,
  variant = "outline",
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const withLabel = label !== null;

  return (
    <Input
      label={withLabel ? label : null}
      placeholder={placeholder}
      helperText={helperText}
      id={id}
      type={showPassword ? "text" : "password"}
      disabled={disabled}
      readOnly={readOnly}
      hideError={hideError}
      leftIcon={LeftIcon}
      rightNode={
        showPassword ? (
          <AiFillEye
            onClick={() => setShowPassword(!showPassword)}
            className='cursor-pointer'
          />
        ) : (
          <AiFillEyeInvisible
            onClick={() => setShowPassword(!showPassword)}
            className='cursor-pointer'
          />
        )
      }
      containerClassName={containerClassName}
      errorMessage={errorMessage}
      color={color}
      labelColor={labelColor}
      required={required}
      variant={variant}
      {...rest}
    />
  );
}
