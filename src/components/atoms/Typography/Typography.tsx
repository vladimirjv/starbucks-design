import {
  TypographyProps,
  TypographyTypes,
  TypographyWeights
} from "./Typography.types";
import { twMerge, twJoin } from "tailwind-merge";

const xlStyles =
  "text-size-6 xs:text-size-8 md:text-size-9 leading-[1.29] tracking-normal";
const mdStyles =
  "text-size-4 md:text-size-7 leading-normal tracking-normal ";
const xxsStyles = "text-size-1 md:text-size-2 leading-normal tracking-normal ";
const stylesClasses: Record<TypographyTypes, string> = {
  xxs: xxsStyles,
  xs: "text-size-2 md:text-size-3 leading-normal tracking-normal",
  sm: "text-size-3 md:text-size-4 leading-normal tracking-normal",
  md: mdStyles,
  lg: "text-size-5 xs:text-size-7  md:text-size-8 leading-[1.385] tracking-normal",
  xl: xlStyles,
  xxl: "text-size-7 xs:text-size-8 md:text-size-9 leading-[1.2] tracking-normal",
  base: "text-size-2 md:text-size-3 leading-normal tracking-normal font-normal text-black",
  h1: xlStyles, // xl
  h2: mdStyles, // md
  h4: twJoin(xxsStyles, "font-bold uppercase", "text-[rgba(0,0,0,0.58)]") // xs
};

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h4: "h4",
};
const weights: Record<TypographyWeights, string> = {
  regular: "font-normal",
  bold: "font-bold",
  semibold: "font-semibold"
};
export default function Typography({
  type = "base",
  weight = "regular",
  children
}: TypographyProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const Component = variantsMapping[type] ?? "p";
  return (
    <Component className={twMerge("font-", weights[weight], stylesClasses[type])}>{children}</Component>
  );
}
