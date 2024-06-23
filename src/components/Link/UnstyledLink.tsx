import * as React from "react";
import clsxm from "../../libs/clsx";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithRef<"a">;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, className, ...rest }, ref) => {
    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={clsxm("cursor-newtab", className)}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
