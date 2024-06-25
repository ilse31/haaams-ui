import { StoryObj } from '@storybook/react';
import { Skeleton } from '../components';

declare const meta: {
    title: string;
    component: typeof Skeleton;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
