"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  return (
    <div
      ref={emblaRef}
      style={{
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.3s ease",
          willChange: "transform",
        }}
      >
        <div
          style={{
            flexShrink: 0,
            width: "50%",
            backgroundColor: "#f87171", // Red
            height: "240px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            margin: "0 16px",
          }}
        >
          Slide 1
        </div>
        <div
          style={{
            flexShrink: 0,
            width: "50%",
            backgroundColor: "#34d399", // Green
            height: "240px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            margin: "0 16px",
          }}
        >
          Slide 2
        </div>
        <div
          style={{
            flexShrink: 0,
            width: "50%",
            backgroundColor: "#60a5fa", // Blue
            height: "240px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            margin: "0 16px",
          }}
        >
          Slide 3
        </div>
        <div
          style={{
            flexShrink: 0,
            width: "50%",
            backgroundColor: "#facc15", // Yellow
            height: "240px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            margin: "0 16px",
          }}
        >
          Slide 4
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
