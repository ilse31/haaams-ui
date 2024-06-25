import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../node_modules/react').ForwardRefExoticComponent<Omit<import('../components/Button/Button').ButtonProps, "ref"> & import('../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            options: readonly ["primary", "secondary", "danger", "outline", "ghost", "warning", "sky", "rose", "pink", "purple", "violet", "indigo", "cyan"];
            control: "select";
        };
        size: {
            options: string[];
            control: "radio";
        };
        isLoading: {
            control: "boolean";
        };
        children: {
            control: "text";
        };
        onClick: {
            action: string;
        };
        disabled: {
            control: "boolean";
        };
    };
    args: {
        onClick: import('@vitest/spy').Mock<[event: import('../../node_modules/react').MouseEvent<HTMLButtonElement, MouseEvent>], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const HasLeftIcon: Story;
export declare const HasRightIcon: Story;
export declare const Danger: Story;
export declare const Outline: Story;
export declare const Ghost: Story;
export declare const Warning: Story;
export declare const Sky: Story;
export declare const Rose: Story;
export declare const Pink: Story;
export declare const Purple: Story;
export declare const Violet: Story;
export declare const Indigo: Story;
export declare const Cyan: Story;
