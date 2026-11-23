import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

test("visible", () => {
  render(<Label text="Test label" />);
});

test("disabled state", () => {
  render(<Label text="Test label" disabled />);
});