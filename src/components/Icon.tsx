import { IconSizes } from "@/@types/variants";
import { useMemo } from "react";

type IconProps = {
  src: string;
  alt: string;
  size?: IconSizes;
};

export default function Icon({ src, alt, size }: IconProps) {
  const sizeStyle = useMemo(() => {
    let currentSize = "";
    switch (size) {
      case "xs":
        currentSize = "w-4 h-4";
        break;
      case "sm":
        currentSize = "w-6 h-6";
        break;

      case "md":
        currentSize = "w-8 h-8";
        break;

      case "lg":
        currentSize = "w-10 h-10";
        break;
      default:
        currentSize = "w-4 h-4";
        break;
    }
    return currentSize;
  }, [size]);

  return <img src={src} alt={alt} loading="lazy" className={sizeStyle} />;
}
