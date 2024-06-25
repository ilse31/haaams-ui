import * as React from "react";
import SimpleCard from "./Card";
import Text from "../Typhography/Text";
import clsxm from "../../libs/clsx";

type DevelopmentCardProps = React.ComponentPropsWithoutRef<"div"> & {
  HeaderCard?: string;
};

export default function DevelopmentCard({
  className,
  children,
  HeaderCard,
  ...rest
}: DevelopmentCardProps) {
  const shouldShow = true || process.env.NODE_ENV !== "production";

  return shouldShow ? (
    <SimpleCard
      className={clsxm([
        "border-2 border-dashed border-secondary-500 bg-secondary-50",
        "pt-2",
        className,
      ])}
      size='sm'
      {...rest}
    >
      <Text className='mb-2 text-center text-secondary-700' variant='c1'>
        {HeaderCard || "Development Card"}
      </Text>
      {children}
    </SimpleCard>
  ) : null;
}
