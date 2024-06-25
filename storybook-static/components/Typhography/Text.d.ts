import * as React from "react";
export declare const TypographyVariant: readonly ["j1", "j2", "h1", "h2", "h3", "h4", "h5", "h6", "s1", "s2", "s3", "s4", "b1", "b2", "b3", "c1", "c2", "l1", "l2"];
export declare const TypographyColor: readonly ["primary", "secondary", "tertiary", "danger", "white"];
declare const TypographyFont: readonly ["averta", "inter"];
type TypographyProps<T extends React.ElementType> = {
    /** @default <p> tag */
    as?: T;
    className?: string;
    color?: (typeof TypographyColor)[number];
    /**
     * | Variant | Size Class | Font Size | Font Weight |
     * | :------ | :--------- | :-------- | :---------- |
     * | j1      | text-4xl   | 36px      | 700         |
     * | j2      | text-3xl   | 30px      | 700         |
     * | h1      | text-2xl   | 24px      | 600         |
     * | h2      | text-xl    | 20px      | 600         |
     * | h3      | text-lg    | 18px      | 600         |
     * | h4      | text-base  | 16px      | 700         |
     * | h5      | text-base  | 16px      | 600         |
     * | h6      | text-sm    | 14px      | 600         |
     * | s1      | text-lg    | 18px      | 500         |
     * | s2      | text-base  | 16px      | 500         |
     * | s3      | text-sm    | 14px      | 500         |
     * | s4      | text-xs    | 12px      | 500         |
     * | b1      | text-lg    | 18px      | 400         |
     * | b2      | text-base  | 16px      | 400         |
     * | b3      | text-sm    | 14px      | 400         |
     * | c1      | text-xs    | 12px      | 400         |
     * | c2      | -          | 11px      | 400         |
     */
    variant?: (typeof TypographyVariant)[number];
    font?: (typeof TypographyFont)[number];
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;
/** @see https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/ */
type TypographyComponent = <T extends React.ElementType = "p">(props: TypographyProps<T>) => React.ReactNode | null;
declare const Text: TypographyComponent;
export default Text;
