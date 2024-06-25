import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: <T extends import('../../node_modules/react').ElementType<any, keyof import("react").JSX.IntrinsicElements> = "p">(props: {
        as?: T | undefined;
        className?: string | undefined;
        color?: "primary" | "secondary" | "danger" | "tertiary" | "white" | undefined;
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "j1" | "j2" | "s1" | "s2" | "s3" | "s4" | "b1" | "b2" | "b3" | "c1" | "c2" | "l1" | "l2" | undefined;
        font?: "averta" | "inter" | undefined;
        children: import('../../node_modules/react').ReactNode;
    } & import('../../node_modules/react').PropsWithoutRef<import('../../node_modules/react').ComponentProps<T>>) => import('../../node_modules/react').ReactNode;
    tags: string[];
    argTypes: {
        children: {
            control: "text";
        };
        variant: {
            control: "select";
            options: readonly ["j1", "j2", "h1", "h2", "h3", "h4", "h5", "h6", "s1", "s2", "s3", "s4", "b1", "b2", "b3", "c1", "c2", "l1", "l2"];
        };
        color: {
            control: "select";
            options: string[];
        };
        align: {
            control: "select";
            options: string[];
        };
        noWrap: {
            control: "boolean";
        };
        as: {
            control: "select";
            options: string[];
        };
        gutterBottom: {
            control: "boolean";
        };
        paragraph: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
