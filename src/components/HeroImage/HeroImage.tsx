import { HeroImageProps } from "./HeroImage.types";

export const HeroImage = ({
  src,
  title,
  disabled
}: HeroImageProps) => {
  return (
    <div
      style={{
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer"
      }}
    >
      <img
        src={src}
        alt={title}
        width="100%"
      />
      <h2>{title}</h2>
    </div>
  );
};