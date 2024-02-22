import type { ButtonSize, ButtonVariant } from "@/@types/variants";
import classNames from "classnames";
import type { ComponentProps } from "react";
import styled from "styled-components";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Element = styled.button<{ variant?: ButtonVariant; size?: ButtonSize }>`
  background-color: ${(props) =>
    props.variant === "primary"
      ? "var(--primary-color)"
      : props.variant === "secondary"
      ? "var(--secondary-color)"
      : props.variant === "info"
      ? "#ccc"
      : props.variant === "error"
      ? "var(--danger-color)"
      : props.variant === "default"
      ? "#FFF"
      : "#FFF"};

  color: ${(props) =>
    props.variant === "primary"
      ? "white"
      : props.variant === "info"
      ? "#111"
      : "#111"};
  padding-left: ${(props) =>
    props.size === "lg"
      ? "2rem"
      : props.size === "md"
      ? "1.5rem"
      : props.size === "sm"
      ? "1rem"
      : ".5rem"};
  padding-right: ${(props) =>
    props.size === "lg"
      ? "2rem"
      : props.size === "md"
      ? "1.5rem"
      : props.size === "sm"
      ? "1rem"
      : ".5rem"};

   padding-top: ${(props) =>
     props.size === "lg"
       ? "1rem"
       : props.size === "md"
       ? "1.25rem"
       : props.size === "sm"
       ? ".75rem"
       : ".5rem"};
  padding-bottom: ${(props) =>
    props.size === "lg"
      ? "1rem"
      : props.size === "md"
      ? "1.25rem"
      : props.size === "sm"
      ? ".75rem"
      : ".5rem"};
  font-size: ${(props) =>
    props.size === "sm"
      ? ".85rem"
      : props.size === "md"
      ? "1rem"
      : props.size === "lg"
      ? "1.5rem"
      : "1rem"};
  }
`;

export default function Button({ ...props }: ButtonProps) {
  return (
    <Element
      {...props}
      variant={props.variant}
      className={classNames("shadow", props.className || "")}
    />
  );
}
