import type { Meta, StoryObj } from "@storybook/react";
import { UploadDropzone } from "../components";
import { FileWithPreview } from "../libs/dropzone";
const meta = {
  title: "Component/Inputs/Upload",
  component: UploadDropzone,
  tags: ["autodocs"],
  argTypes: {
    accept: { control: "text" },
    helperText: { control: "text" },
    id: { control: "text" },
    label: { control: "text" },
    maxFiles: { control: "number" },
    readOnly: { control: "boolean" },
    hideError: { control: "boolean" },
    validation: { control: "object" },
    required: { control: "boolean" },
    customError: { control: "text" },
  },
} satisfies Meta<typeof UploadDropzone>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    helperText: "You can upload file with .png, .jpg, atau .jpeg extension.",
    label: "Label",
    maxFiles: 1,
    readOnly: false,
    required: false,
    hideError: false,
    customError: "Image Is Required",

    validation: (files: FileWithPreview[]) => {
      if (files.length > 1) {
        return "Only one file is allowed";
      }
      return null;
    },

    id: "",
  },
};
