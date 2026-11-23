import { RadioButton } from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton
};

export const Default = {
  args: {
    label: "Option A"
  }
};

export const Disabled = {
  args: {
    label: "Disabled Option",
    disabled: true
  }
};