import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

test("visible", () => {
  render(<Dropdown options={[]} />);
});

test("disabled state", () => {
  render(<Dropdown options={[]} disabled />);
});