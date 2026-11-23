import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<Pick<LabelProps, "disabled">>`
  color: ${(props) =>
    props.disabled ? "#999999" : "#000000"};
`;

export const Label = ({
  text,
  disabled
}: LabelProps) => {
  return (
    <StyledLabel disabled={disabled}>
      {text}
    </StyledLabel>
  );
};