import { StoryObj } from '@storybook/react';
import { Password } from '../components';

declare const meta: {
    title: string;
    component: typeof Password;
    tags: string[];
    argTypes: {
        label: {
            control: "text";
        };
        placeholder: {
            control: "text";
        };
        helperText: {
            control: "text";
        };
        id: {
            control: "text";
        };
        type: {
            control: "select";
            options: string[];
        };
        readOnly: {
            control: "boolean";
        };
        hideError: {
            control: "boolean";
        };
        containerClassName: {
            control: "text";
        };
        errorMessage: {
            control: "text";
        };
        variant: {
            control: "select";
            options: string[];
        };
        color: {
            control: "select";
            options: string[];
        };
        required: {
            control: "boolean";
        };
        labelColor: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
