import { render, screen } from "@testing-library/react";
import { RadioButton } from "./RadioButton";

test("visible", () => {
  render(<RadioButton label="Test radio button" />);
});

test("disabled state", () => {
  render(<RadioButton label="Test radio button" disabled />);
});