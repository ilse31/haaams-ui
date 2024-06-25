import { StoryObj } from '@storybook/react';
import { StaticCard } from '../components';

declare const meta: {
    title: string;
    component: typeof StaticCard;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        isLoading: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
