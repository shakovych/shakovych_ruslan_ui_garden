import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ $disabled?: boolean }>`
  border: 1px solid #ddd;
  padding: 20px;
  background: ${(props) =>
    props.$disabled ? "#eeeeee" : "#ffffff"};
`;

export const Card = ({
  title,
  content,
  disabled
}: CardProps) => {
  return (
    <StyledCard $disabled={disabled}>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};