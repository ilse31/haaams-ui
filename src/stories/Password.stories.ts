import type { Meta, StoryObj } from "@storybook/react";

import { Input, Password } from "../components";

const meta = {
  title: "Component/Inputs/Password",
  component: Password,
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
    errorMessage: { control: "text" },
    variant: { control: "select", options: ["outline", "solid", "underlined"] },
    color: {
      control: "select",
      options: [
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
      ],
    },
    required: { control: "boolean" },
    labelColor: {
      control: "select",
      options: ["primary", "white", "danger", "secondary", "tertiary"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper Text",
    id: "input",
    readOnly: false,
    hideError: false,
    containerClassName: "container",
    errorMessage: "Error Message",
    variant: "outline",
    color: "sky",
    required: false,
    labelColor: "primary",
  },
};
