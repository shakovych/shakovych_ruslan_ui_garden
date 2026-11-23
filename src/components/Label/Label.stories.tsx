import { Label } from "./Label";

export default {
  title: "Components/Label",
  component: Label
};

export const Default = {
  args: {
    text: "Sample Label"
  }
};

export const Disabled = {
  args: {
    text: "Disabled Label",
    disabled: true
  }
};