import * as React from "react";
declare const CARD_SIZE: readonly ["sm", "base"];
type CardSize = (typeof CARD_SIZE)[number];
type SimpleCardProps = {
    size?: CardSize;
} & React.ComponentPropsWithoutRef<"div">;
export default function SimpleCard({ className, size, ...rest }: SimpleCardProps): import("react/jsx-runtime").JSX.Element;
export {};
