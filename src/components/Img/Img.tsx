import { ImgProps } from "./Img.types";

export const Img = ({
  src,
  alt,
  disabled
}: ImgProps) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: "300px",
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer"
    }}
  />
);