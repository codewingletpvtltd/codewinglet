import React from "react";
import { TypographyProps } from "./types";

const Typography: React.FC<TypographyProps> = ({
  variant,
  className = "",
  children,
  ...rest
}) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={`text-h1 font-secondary` + className} {...rest}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={"text-h2 font-secondary" + className} {...rest}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={"text-h3 font-secondary" + className} {...rest}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={"text-h4 font-secondary" + className} {...rest}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={"text-h5 font-secondary" + className} {...rest}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={"text-h6 font-secondary" + className} {...rest}>
          {children}
        </h6>
      );
    case "body1":
      return (
        <p className={"text-body1" + className} {...rest}>
          {children}
        </p>
      );
    case "body2":
      return (
        <p className={"text-body2" + className} {...rest}>
          {children}
        </p>
      );
    case "subtitle1":
      return (
        <p className={"text-subtitle1" + className} {...rest}>
          {children}
        </p>
      );

    default:
      return (
        <p className={className} {...rest}>
          {children}
        </p>
      );
  }
};

export default Typography;
