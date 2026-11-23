import { Img } from "./Img";

export default {
  title: "Components/Img",
  component: Img
};

export const Default = {
  args: {
    src: "https://placehold.co/300x200",
    alt: "Sample Image",
    disabled: false
  }
};

export const Disabled = {
  args: {
    src: "https://placehold.co/300x200",
    alt: "Sample Image",
    disabled: true
  }
};