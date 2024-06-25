import * as React from "react";
export type UnstyledLinkProps = {
    href: string;
    children: React.ReactNode;
    openNewTab?: boolean;
    className?: string;
} & React.ComponentPropsWithRef<"a">;
declare const UnstyledLink: React.ForwardRefExoticComponent<Omit<UnstyledLinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export default UnstyledLink;
