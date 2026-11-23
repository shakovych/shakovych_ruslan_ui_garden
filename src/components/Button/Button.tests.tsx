import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("button visible", () => {
  render(<Button label="Test Button" />);
  expect(
    screen.getByText("Test Button")
  ).toBeInTheDocument();
});

test("button disabled", () => {
  render(
    <Button label="Disabled" disabled />
  );

  expect(
    screen.getByText("Disabled")
  ).toBeDisabled();
});