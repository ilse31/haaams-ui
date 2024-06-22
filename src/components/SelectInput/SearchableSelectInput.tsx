import clsx from "clsx";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import Select, { components, MultiValue, StylesConfig } from "react-select";

import { ExtractProps } from "../../libs/helpers";
import Text from "../Typhography/Text";

export type SearchableSelectInputProps = {
  label: string | null;
  id: string;
  placeholder?: React.ReactNode;
  helperText?: string;
  type?: string;
  isMulti?: boolean;
  readOnly?: boolean;
  hideError?: boolean;
  //   validation?: any; // Removed RegisterOptions type, not needed now
  options: { value: string; label: string }[];
  containerClassName?: string;
  required?: boolean;
  error?: string;
} & React.ComponentPropsWithoutRef<"select"> &
  ExtractProps<Select>;

export default function SearchableSelectInput({
  disabled,
  readOnly,
  label,
  helperText,
  id,
  isMulti = false,
  placeholder,
  options,
  hideError = false,
  containerClassName,
  error,
  required,
  ...rest
}: SearchableSelectInputProps) {
  const [selectedValue, setSelectedValue] = useState<string | string[] | null>(
    isMulti ? [] : null
  );

  const withLabel = label !== null;

  //#region  //*=========== Styles ===========
  const customStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      border: `1px solid ${error ? "#EF4444" : "#D1D5DB"}`,
      "&:hover": {
        border: `1px solid ${error ? "#EF4444" : "#D1D5DB"}`,
      },
      boxShadow: "none",
      transition: "none",
      "&:focus-within": {
        border: `1px solid ${error ? "#EF4444" : "var(--color-primary-500)"}`,
        boxShadow: `0 0 0 1px ${
          error ? "#EF4444" : "var(--color-primary-500)"
        }`,
      },
      "*": {
        boxShadow: "none !important",
      },
      borderRadius: "0.5rem",
      padding: "0 0.75rem",
      background: disabled || readOnly ? "#F3F4F6" : undefined,
      cursor: "pointer",
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
      gap: "0.5rem",
    }),
    input: (styles) => ({
      ...styles,
      padding: 0,
      margin: 0,
      caretColor: "var(--color-primary-500)",
      color: "#1F201d",
      "::placeholder": {
        color: "#5a5d56",
      },
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      "&>div": {
        padding: 0,
      },
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "#878787",
      "&:hover": {
        color: "#878787",
      },
    }),
    option: (styles, state) => ({
      ...styles,
      color: "black",
      background: state.isFocused
        ? "var(--color-primary-50)"
        : state.isSelected
          ? "var(--color-primary-100)"
          : "white",
      ":hover": {
        background: "#E5E7EB",
      },
      cursor: "pointer",
    }),
    multiValue: (styles) => ({
      ...styles,
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      background: "var(--color-primary-100)",
      borderRadius: "0.375rem",
      padding: "0.25rem 0.75rem",
      margin: 0,
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "var(--color-primary-700)",
      padding: 0,
      paddingLeft: 0,
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "var(--color-primary-700)",
      padding: 0,
      paddingLeft: "0.5rem",
      "&:hover": {
        color: "var(--color-primary-700)",
        backgroundColor: "transparent",
      },
    }),
    menu: (styles) => ({
      ...styles,
      borderRadius: "0.5rem",
      overflow: "hidden",
    }),
  };

  //#endregion  //*======== Styles ===========

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (selectedOptions: any) => {
    if (isMulti) {
      setSelectedValue(
        (selectedOptions as MultiValue<(typeof options)[number]>).map(
          (option) => option?.value ?? ""
        )
      );
    } else {
      setSelectedValue(
        (selectedOptions as (typeof options)[number])?.value ?? ""
      );
    }
  };

  return (
    <div className={containerClassName}>
      {withLabel && (
        <Text as='label' variant='s3' className='block' htmlFor={id}>
          {label} {required && <span className='text-danger'>*</span>}
        </Text>
      )}
      <div
        className={clsx(
          "relative",
          withLabel && "mt-1",
          (disabled || readOnly) && "cursor-not-allowed"
        )}
      >
        <Select
          value={
            isMulti
              ? (selectedValue as string[]).map(
                  (value) =>
                    options.find((option) => option.value === value) ?? null
                )
              : options.find((opt) => opt.value === selectedValue) ?? null
          }
          onChange={handleChange}
          isDisabled={disabled}
          isClearable
          isMulti={isMulti}
          closeMenuOnSelect={!isMulti}
          placeholder={placeholder}
          options={options}
          classNames={{
            control: () => "!min-h-[2.25rem] md:!min-h-[2.5rem]",
          }}
          styles={customStyles}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: (props) => (
              <components.DropdownIndicator {...props}>
                <ChevronDown size={18} />
              </components.DropdownIndicator>
            ),
            ClearIndicator: (props) => (
              <components.ClearIndicator {...props}>
                <X
                  size={18}
                  className='mr-0.5 text-typo-icons hover:text-typo-secondary'
                />
              </components.ClearIndicator>
            ),
            MultiValueRemove: (props) => (
              <components.MultiValueRemove {...props}>
                <X size={18} />
              </components.MultiValueRemove>
            ),
          }}
          {...rest}
        />
        {helperText && (
          <Text variant='c1' color='secondary' className='mt-1'>
            {helperText}
          </Text>
        )}
        {!hideError && error && (
          <Text variant='c1' color='danger' className='mt-1'>
            {error}
          </Text>
        )}
      </div>
    </div>
  );
}
