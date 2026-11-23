import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text
};

export const Default = {
  args: {
    text: "Sample Text"
  }
};

export const Disabled = {
  args: {
    text: "Disabled Text",
    disabled: true
  }
};