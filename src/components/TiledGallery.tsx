
import innovest0 from '../img/imgs/innovest-0.jpg';
import innovest1 from '../img/imgs/innovest-1.png';
import innovest2 from '../img/imgs/innovest-2.png';
import innovest3 from '../img/imgs/innovest-3.png';
import innovest4 from '../img/imgs/innovest-4.png';
import innovest5 from '../img/imgs/innovest-5.png';
import innovest6 from '../img/imgs/innovest-6.png';
import innovest7 from '../img/imgs/innovest-7.jpg';
import innovest8 from '../img/imgs/innovest-8.jpg';
import innovest9 from '../img/imgs/innovest-9.jpg';
import innovest10 from '../img/imgs/innovest-10.jpg';
import innovest11 from '../img/imgs/innovest-11.jpg';
import innovest12 from '../img/imgs/innovest-12.jpg';
import innovest13 from '../img/imgs/innovest-13.jpg';
import innovest14 from '../img/imgs/innovest-14.jpg';
import innovest15 from '../img/imgs/innovest-15.jpg';
import React, { useEffect, useState, useRef } from "react";

// Preload images to avoid flicker
const preloadImages = (srcs: string[]): Promise<void> => {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  ).then(() => undefined);
};

// Carousel row with animated scrolling
const CarouselRow: React.FC<{ images: string[]; speed: number; reverse?: boolean }> = ({
  images,
  speed,
  reverse,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [imageWidth, setImageWidth] = useState(320);

  // Responsive image width
  useEffect(() => {
    const handleResize = () => {
      setImageWidth(Math.max(window.innerWidth / 5, 320));
    };
    handleResize(); // Initial sizing
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gap = 28;
  const totalWidth = images.length * (imageWidth + gap);

  // Animation logic
  useEffect(() => {
    let raf: number;
    let lastTime = performance.now();
    const animate = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      setOffset((prev) => {
        let next = prev + (reverse ? -1 : 1) * (speed * dt) / 1000;
        if (next > totalWidth) next = 0;
        if (next < 0) next = totalWidth;
        return next;
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [speed, reverse, totalWidth]);

  const displayImages = [...images, ...images]; // Duplicate for seamless scroll

  return (
    <div className="flex items-center w-screen overflow-hidden" style={{ height: imageWidth * 0.65 }}>
      <div
        className="flex"
        style={{
          gap: `${gap}px`,
          transform: `translateX(-${offset}px)`,
          transition: "transform 0.1s linear",
          willChange: "transform",
        }}
        ref={rowRef}
      >
        {displayImages.map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-2xl bg-cover bg-center"
            style={{
              width: imageWidth,
              height: imageWidth * 0.65,
              backgroundImage: `url(${img})`,
              cursor: "pointer",
            }}
            onClick={() => window.open(img, "_blank", "noopener")}
          />
        ))}
      </div>
    </div>
  );
};


// Main gallery component
const TiledGallery: React.FC = () => {
  const [imagesReady, setImagesReady] = useState(false);

  const images = [
    innovest0,
    innovest1,
    innovest2,
    innovest3,
    innovest4,
    innovest5,
    innovest6,
    innovest7,
    innovest8,
    innovest9,
    innovest10,
    innovest11,
    innovest12,
    innovest13,
    innovest14,
    innovest15,
  ];

  useEffect(() => {
    // Preload images for smooth experience
    preloadImages(images).then(() => setImagesReady(true));
  }, [images]);

  const rowCount = 3;
  const rows: string[][] = Array.from({ length: rowCount }, (_, i) =>
    images.filter((_, idx) => idx % rowCount === i)
  );
  const speeds = [15, 20, 30];

  return (
    <section className="py-16 bg-slate-50">
      <div className="w-screen px-0">
        <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-8">Gallery</h2>
        <p className="text-center text-slate-600 text-lg mb-12">Explore highlights from InnovestHack 2025.</p>
        <div className="w-screen h-[700px] flex flex-col justify-center gap-12 overflow-x-hidden">
          {imagesReady &&
            rows.map((row, i) => (
              <CarouselRow
                key={i}
                images={row}
                speed={speeds[i % speeds.length]}
                reverse={i % 2 === 1}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TiledGallery;
