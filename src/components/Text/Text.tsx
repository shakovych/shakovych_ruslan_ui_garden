import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{ disabled?: boolean }>`
  color: ${(props) =>
    props.disabled ? "#999999" : "#000000"};
`;

export const Text = ({
  text,
  disabled
}: TextProps) => (
  <StyledText disabled={disabled}>
    {text}
  </StyledText>
);