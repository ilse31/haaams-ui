import * as React from "react";
type DevelopmentCardProps = React.ComponentPropsWithoutRef<"div"> & {
    HeaderCard?: string;
};
export default function DevelopmentCard({ className, children, HeaderCard, ...rest }: DevelopmentCardProps): import("react/jsx-runtime").JSX.Element | null;
export {};
