import React from "react";
import { TypographyProps } from "./types";
import { getClassNames } from "../../utils";

const Typography: React.FC<TypographyProps> = ({
  variant,
  className = "",
  children,
  ...rest
}) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={getClassNames("text-h1 font-secondary", className)}
          {...rest}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={getClassNames("text-h2 font-secondary", className)}
          {...rest}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={getClassNames("text-h3 font-secondary", className)}
          {...rest}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={getClassNames("text-h4 font-secondary", className)}
          {...rest}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={getClassNames("text-h5 font-secondary", className)}
          {...rest}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={getClassNames("text-h6 font-secondary", className)}
          {...rest}
        >
          {children}
        </h6>
      );
    case "body1":
      return (
        <p className={getClassNames("text-body1", className)} {...rest}>
          {children}
        </p>
      );
    case "body2":
      return (
        <p className={getClassNames("text-body2", className)} {...rest}>
          {children}
        </p>
      );
    case "subtitle1":
      return (
        <p className={getClassNames("text-subtitle1", className)} {...rest}>
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
