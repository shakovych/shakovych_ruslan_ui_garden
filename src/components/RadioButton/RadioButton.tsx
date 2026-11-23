import { RadioButtonProps } from "./RadioButton.types";

export const RadioButton = ({
  label,
  disabled
}: RadioButtonProps) => {
  return (
    <label>
      <input
        type="radio"
        disabled={disabled}
      />
      {label}
    </label>
  );
};