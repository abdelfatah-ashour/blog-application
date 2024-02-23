import { ComponentProps } from "react";
import styled from "styled-components";

interface InputProps extends ComponentProps<"input"> {
  error?: string;
}

const InputBase = styled.input<InputProps>`
  border-radius: 0.3rem;
  outline: none;
  border: 1px solid var(--primary-color);
  border-color: ${(props) =>
    props.error ? "var(--danger-color)" : "var(--primary-color)"};
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  &:focused: {
    border-color: var(--primary-light-color);
  }
`;

export default function Input({ ...props }: InputProps) {
  return <InputBase {...props} />;
}
