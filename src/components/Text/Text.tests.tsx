import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

test("visible", () => {
  render(<Text text="Visible text" />);
});

test("disabled state", () => {
  render(<Text text="Disabled text" disabled />);
});