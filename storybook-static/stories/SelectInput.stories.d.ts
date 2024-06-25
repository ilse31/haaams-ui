import { StoryObj } from '@storybook/react';
import { SelectInput } from '../components';

declare const meta: {
    title: string;
    component: typeof SelectInput;
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
        error: {
            control: "text";
        };
        options: {
            control: "object";
        };
        required: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const IsMultiValue: Story;
