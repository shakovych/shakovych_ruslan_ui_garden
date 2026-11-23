import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card
};

export const Default = {
  args: {
    title: "Card Title",
    content: "Card Content"
  }
};

export const Disabled = {
  args: {
    title: "Disabled Card",
    content: "Disabled Content",
    disabled: true
  }
};