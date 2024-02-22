import type { TypographyComponent, TypographyVariant } from "@/@types/variants";
import styled from "styled-components";

type TypographyProps = {
  variant?: TypographyVariant;
  component: TypographyComponent;
  children: React.ReactNode;
};

const Element = styled.div<{ variant?: TypographyVariant }>`
  font-size: ${(props) =>
    props.variant === "titleSmall"
      ? "1rem"
      : props.variant === "titleMedium"
      ? "1.25rem"
      : props.variant === "titleLarge"
      ? "2rem"
      : props.variant === "descriptionSmall"
      ? ".75rem"
      : props.variant === "descriptionMedium"
      ? ".85rem"
      : props.variant === "descriptionLarge"
      ? "1rem"
      : props.variant === "caption"
      ? ".8rem"
      : props.variant === "info"
      ? ".8rem"
      : "1rem"};

  font-weight: ${(props) =>
    props.variant === "titleSmall"
      ? "300"
      : props.variant === "titleMedium"
      ? "500"
      : props.variant === "titleLarge"
      ? "600"
      : props.variant === "descriptionSmall"
      ? "400"
      : props.variant === "descriptionMedium"
      ? "400"
      : props.variant === "descriptionLarge"
      ? "500"
      : props.variant === "caption"
      ? "300"
      : props.variant === "info"
      ? "400"
      : "normal"};
`;

export default function Typography({
  variant,
  component,
  children,
}: TypographyProps) {
  return (
    <Element as={component} variant={variant}>
      {children}
    </Element>
  );
}
