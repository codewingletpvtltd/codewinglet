import React from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "subtitle1";

type ElementByTypographyVariant = {
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  h5: HTMLHeadingElement;
  h6: HTMLHeadingElement;
  body1: HTMLParagraphElement;
  body2: HTMLParagraphElement;
  subtitle1: HTMLSpanElement;
};

export interface TypographyProps
  extends React.HTMLAttributes<ElementByTypographyVariant[TypographyVariant]> {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}
