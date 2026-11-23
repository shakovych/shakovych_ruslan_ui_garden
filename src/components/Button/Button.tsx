import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<Omit<ButtonProps, "label">>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#007bff"};

  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "pointer"};
`;

export const Button = ({
  label,
  backgroundColor,
  disabled
}: ButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};