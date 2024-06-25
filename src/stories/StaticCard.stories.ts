import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { StaticCard } from "../components";
import { LucideAArrowDown } from "lucide-react";

// import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Surfaces/Card/StaticCard",
  component: StaticCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
    },
    isLoading: {
      control: "boolean",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof StaticCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: LucideAArrowDown,
    label: "Label",
    value: 10,
    isLoading: false,
  },
};
