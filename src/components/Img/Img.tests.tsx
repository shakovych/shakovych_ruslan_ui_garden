import { render } from "@testing-library/react";
import { Img } from "./Img";

test("image visible", () => {
  render(
    <Img
      src="test.jpg"
      alt="Test image"
    />
  );
});

test("image disabled", () => {
  render(
    <Img
      src="test.jpg"
      alt="Test image"
      disabled
    />
  );
});