import { DropdownProps } from "./Dropdown.types";

export const Dropdown = ({
  label = "Select Option",
  options,
  disabled
}: DropdownProps) => {
  return (
    <div>
      <label htmlFor="dropdown">
        {label}
      </label>

      <select
        id="dropdown"
        aria-label={label}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};