import { StoryObj } from '@storybook/react';
import { UploadDropzone } from '../components';

declare const meta: {
    title: string;
    component: typeof UploadDropzone;
    tags: string[];
    argTypes: {
        accept: {
            control: "text";
        };
        helperText: {
            control: "text";
        };
        id: {
            control: "text";
        };
        label: {
            control: "text";
        };
        maxFiles: {
            control: "number";
        };
        readOnly: {
            control: "boolean";
        };
        hideError: {
            control: "boolean";
        };
        validation: {
            control: "object";
        };
        required: {
            control: "boolean";
        };
        customError: {
            control: "text";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
