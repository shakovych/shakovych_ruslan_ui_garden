import { HeroImage } from "./HeroImage";

export default {
  title: "Components/HeroImage",
  component: HeroImage
};

export const Default = {
  args: {
    src: "https://placehold.co/800x300",
    title: "Hero Section",
    disabled: false
  }
};

export const Disabled = {
  args: {
    src: "https://placehold.co/800x300",
    title: "Hero Section",
    disabled: true
  }
};