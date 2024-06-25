import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../components";

import { AiOutlineSearch } from "react-icons/ai";

const meta = {
  title: "Component/Inputs/Input",
  component: Input,
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
    type: "text",
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

export const HasLeftIcon: Story = {
  args: {
    label: "Label",
    placeholder: "Search for something",
    helperText: "You can search for anything",
    id: "inputleftIcon",
    type: "text",
    readOnly: false,
    hideError: false,
    leftIcon: AiOutlineSearch,
    containerClassName: "container",
    errorMessage: "Search cannot be empty",
    variant: "outline",
    color: "sky",
    required: false,
    labelColor: "primary",
  },
};

export const HasRightNode: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper Text",
    id: "inputRightIcon",
    type: "text",
    readOnly: false,
    hideError: false,
    rightNode: "rightNode",
    containerClassName: "container",
    errorMessage: "Error Message",
    variant: "outline",
    color: "sky",
    required: false,
    labelColor: "primary",
  },
};
