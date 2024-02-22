import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const imgError = "/assets/images/image-error.svg";

export default function Image({ src, alt }: ImageProps) {
  const [source, setSource] = useState(src);

  const handleError = () => {
    setSource(imgError);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src={source}
        onError={handleError}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
