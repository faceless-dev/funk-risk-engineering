import classNames from "classnames";
import React from "react";

export enum HEADING_VARIANTS {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
}

export interface HeadingProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  variant?: HEADING_VARIANTS;
}

const Heading = ({
  children,
  className,
  variant = HEADING_VARIANTS.H1,
  ...rest
}: HeadingProps) => {
  if (variant === HEADING_VARIANTS.H2)
    return (
      <h2
        className={classNames(
          "text-[21px] font-normal font-noto-serif",
          className
        )}
        {...rest}
      >
        {children}
      </h2>
    );

  if (variant === HEADING_VARIANTS.H3)
    return (
      <h3 className="text-[16px] font-[800] font-noto-sans" {...rest}>
        {children}
      </h3>
    );

  if (variant === HEADING_VARIANTS.H4)
    return (
      <h4 className="text-[13px] font-normal font-noto-sans" {...rest}>
        {children}
      </h4>
    );

  // H1
  return (
    <h1 className="text-[29px] font-normal font-noto-serif" {...rest}>
      {children}
    </h1>
  );
};

export default Heading;
