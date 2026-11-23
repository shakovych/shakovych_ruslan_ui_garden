import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

test("visible", () => {
  render(<Table />);
});

test("disabled state", () => {
  render(<Table disabled />);
});