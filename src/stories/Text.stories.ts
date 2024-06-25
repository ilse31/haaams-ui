import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../components";
import { TypographyVariant } from "../components/Typhography/Text";

const meta = {
  title: "Component/Display/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "select",
      options: TypographyVariant,
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "danger", "white"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
    },
    noWrap: { control: "boolean" },
    as: {
      control: "select",
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    gutterBottom: { control: "boolean" },
    paragraph: { control: "boolean" },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
    color: "primary",
    variant: "b1",
    as: "p",
  },
};
