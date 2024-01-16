import { ReactNode } from "react";

export type TypographyTypes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "base" | "h1" | "h2" | "h4" ;
export type TypographyWeights = "regular" | "bold" | "semibold";
export type TypographyProps = { 
  type?: TypographyTypes;
  weight?: TypographyWeights;
  children: ReactNode;
};
