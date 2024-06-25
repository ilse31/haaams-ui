import { StoryObj } from '@storybook/react';
import { DevelopmentCard } from '../components';

declare const meta: {
    title: string;
    component: typeof DevelopmentCard;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {
        onClick: import('@vitest/spy').Mock<[event: import('../../node_modules/react').MouseEvent<HTMLDivElement, MouseEvent>], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
