import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components";
import { ButtonVariant } from "../components/Button/Button";
import { AiFillAccountBook } from "react-icons/ai";

// import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { options: ButtonVariant, control: "select" },
    size: { options: ["sm", "base", "lg"], control: "radio" },
    isLoading: { control: "boolean" },
    children: { control: "text" },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "base",
    isLoading: false,
    children: "Base Button",
  },
};

export const HasLeftIcon: Story = {
  args: {
    variant: "primary",
    size: "base",
    isLoading: false,
    children: "Base Button",
    leftIcon: AiFillAccountBook,
  },
};

export const HasRightIcon: Story = {
  args: {
    variant: "primary",
    size: "base",
    isLoading: false,
    children: "Base Button",
    rightIcon: AiFillAccountBook,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Sky: Story = {
  args: {
    variant: "sky",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Rose: Story = {
  args: {
    variant: "rose",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Pink: Story = {
  args: {
    variant: "pink",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Purple: Story = {
  args: {
    variant: "purple",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Violet: Story = {
  args: {
    variant: "violet",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Indigo: Story = {
  args: {
    variant: "indigo",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};

export const Cyan: Story = {
  args: {
    variant: "cyan",
    size: "lg",
    isLoading: false,
    children: "Base Button",
  },
};
