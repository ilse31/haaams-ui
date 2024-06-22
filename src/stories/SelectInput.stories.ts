import type { Meta, StoryObj } from "@storybook/react";

import { SelectInput } from "../components";

const meta = {
  title: "Component/SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    id: { control: "text" },
    type: { control: "select", options: ["text", "password", "email"] },
    readOnly: { control: "boolean" },
    hideError: { control: "boolean" },
    containerClassName: { control: "text" },
    error: { control: "text" },
    options: { control: "object" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof SelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper Text",
    id: "inputSelect",
    type: "text",
    readOnly: false,
    hideError: false,
    containerClassName: "container",
    error: "Error Message",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
    ],
    required: false,
  },
};

export const IsMultiValue: Story = {
  args: {
    isMulti: true,
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper Text",
    id: "inputSelect",
    type: "text",
    readOnly: false,
    hideError: false,
    containerClassName: "container",
    error: "Error Message",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
    ],
    required: false,
  },
};
