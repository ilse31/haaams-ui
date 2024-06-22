import type { Meta, StoryObj } from "@storybook/react";
import SearchableSelectInput from "../components/Forms/SearchableSelectInput";

const meta = {
  title: "Component/SearchableSelectInput",
  component: SearchableSelectInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    isMulti: { control: "boolean" },
    options: { control: "object" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    helperText: { control: "text" },
    id: { control: "text" },
    placeholder: { control: "text" },
    hideError: { control: "boolean" },
    containerClassName: { control: "text" },
    error: { control: "text" },
    required: { control: "boolean" },
  },
} as Meta<typeof SearchableSelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
    isMulti: true,
    disabled: false,
    readOnly: false,
    helperText: "Helper Text",
    id: "input",
    placeholder: "Placeholder",
    hideError: false,
    containerClassName: "container",
    error: "Error Message",
    required: false,
    type: "text",
  },
};
