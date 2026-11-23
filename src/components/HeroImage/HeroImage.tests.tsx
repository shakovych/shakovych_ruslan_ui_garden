import { render } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

test("hero image visible", () => {
  render(
    <HeroImage
      src="test.jpg"
      title="Test Hero"
    />
  );
});

test("hero image disabled", () => {
  render(
    <HeroImage
      src="test.jpg"
      title="Test Hero"
      disabled
    />
  );
});