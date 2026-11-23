import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("visible", () => {
  render(<Card title="Test card" content="Card content" />);
});

test("disabled state", () => {
  render(<Card title="Test card" content="Card content" disabled />);
});