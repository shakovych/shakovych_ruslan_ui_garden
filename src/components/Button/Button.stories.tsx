import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button
};

export const Default = {
  args: {
    label: "Click Me",
    backgroundColor: "#007bff",
    disabled: false
  }
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true
  }
};