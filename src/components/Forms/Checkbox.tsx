import * as React from "react";

import Text from "../Typhography/Text";
import clsxm from "../../libs/clsx";

enum CheckboxSize {
  "sm",
  "base",
}

export type CheckboxProps = {
  /** Input label */
  label: string;
  name: string;
  /** Add value only if you're using grouped checkbox, omit value if using a single checkbox */
  value?: string | number;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  errorMessage?: string;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  //   validation?: RegisterOptions;
  size?: keyof typeof CheckboxSize;
} & Omit<React.ComponentPropsWithoutRef<"input">, "size">;

export default function Checkbox({
  label,
  name,
  value,
  placeholder = "",
  helperText,
  readOnly = false,
  hideError = false,
  //   validation,
  size = "base",
  disabled,
  errorMessage,
  ...rest
}: CheckboxProps) {
  //   const {
  //     register,
  //     formState: { errors },
  //   } = useFormContext();

  //   const error = get(errors, name);

  return (
    <div>
      <div className='flex items-start gap-2'>
        <input
          //   {...register(name, validation)}
          {...rest}
          type='checkbox'
          name={name}
          id={`${name}_${value}`}
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          className={clsxm(
            // add top margin so the checkbox align with the text
            "mt-[0.25em]",
            "shrink-0 cursor-pointer",
            "rounded-sm focus:ring-0 focus:ring-offset-0",
            "checked:bg-primary-500 checked:hover:bg-primary-600 checked:focus:bg-primary-500 checked:active:bg-primary-700",
            (readOnly || disabled) &&
              "cursor-not-allowed bg-gray-100 disabled:checked:bg-primary-400",
            errorMessage && "border-danger-400 bg-danger-100",
            size === "sm" && "h-3.5 w-3.5"
          )}
          placeholder={placeholder}
          aria-describedby={name}
        />
        <Text
          className={clsxm((readOnly || disabled) && "cursor-not-allowed")}
          as='label'
          htmlFor={`${name}_${value}`}
          variant={
            clsxm([size === "base" && "b2", size === "sm" && "b3"]) as
              | "b2"
              | "b3"
          }
        >
          {label}
        </Text>
      </div>
      {helperText && (
        <Text variant='c1' color='secondary' className='mt-1'>
          {helperText}
        </Text>
      )}
      {!hideError && errorMessage && (
        <Text variant='c1' color='danger' className='mt-1'>
          {errorMessage}
        </Text>
      )}
    </div>
  );
}
