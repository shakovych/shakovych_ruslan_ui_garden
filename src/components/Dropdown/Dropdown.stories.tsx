import { Dropdown } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown
};

export const Default = {
  args: {
    label: "Choose Option",
    options: [
      "One",
      "Two",
      "Three"
    ]
  }
};

export const Disabled = {
  args: {
    label: "Choose Option",
    options: [
      "One",
      "Two",
      "Three"
    ],
    disabled: true
  }
};