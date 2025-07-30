import React, { useEffect, useRef, useState } from "react";

// Image imports
import h0 from "../../img/hackathon/h-0.jpeg";
import h1 from "../../img/hackathon/h-1.jpeg";
import h2 from "../../img/hackathon/h-2.jpeg";
import h3 from "../../img/hackathon/h-3.jpeg";
import h4 from "../../img/hackathon/h-4.jpeg";
import h5 from "../../img/hackathon/h-5.jpeg";
import h6 from "../../img/hackathon/h-6.jpeg";
import h7 from "../../img/hackathon/h-7.jpeg";
import h8 from "../../img/hackathon/h-8.jpeg";
import h9 from "../../img/hackathon/h-9.jpeg";
import h10 from "../../img/hackathon/h-10.jpeg";
import h11 from "../../img/hackathon/h-11.jpeg";
import h12 from "../../img/hackathon/h-12.jpeg";
import h13 from "../../img/hackathon/h-13.jpeg";
import h14 from "../../img/hackathon/h-14.jpeg";

// Image list
const allImages = [h0, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14];
const items = allImages.map((img, index) => ({ id: `${index}`, img, url: "" }));

// Preload images
const preloadImages = (srcs: string[]): Promise<void> => {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  ).then(() => undefined);
};

// Auto column count based on screen width
const getColumnCount = () => {
  const width = window.innerWidth;
  if (width >= 1280) return 5;
  if (width >= 1024) return 4;
  if (width >= 768) return 3;
  return 2;
};

// Column component
const CarouselColumn: React.FC<{ images: string[]; speed: number; reverse?: boolean }> = ({
  images,
  speed,
  reverse,
}) => {
  const colRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const imageHeight = Math.max(window.innerHeight / 6, 200);
  const gap = 20;
  const totalHeight = images.length * (imageHeight + gap);

  useEffect(() => {
    let raf: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      setOffset((prev) => {
        let next = prev + (reverse ? -1 : 1) * (speed * dt) / 1000;
        if (!reverse && next >= totalHeight) return next - totalHeight;
        if (reverse && next <= 0) return next + totalHeight;
        return next;
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [speed, reverse, totalHeight]);

  // Duplicate images for seamless vertical loop
  const displayImages = [...images, ...images, ...images];

  return (
    <div
      ref={colRef}
      className="flex flex-col items-center overflow-hidden"
      style={{ height: imageHeight * 3 + gap * 2, width: imageHeight * 1.2 }}
    >
      <div
        className="flex flex-col"
        style={{
          gap: `${gap}px`,
          transform: `translateY(-${offset}px)`,
          transition: "transform 0.1s linear",
          willChange: "transform",
        }}
      >
        {displayImages.map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-cover bg-center hover:scale-[1.05] transition-transform duration-300"
            style={{
              width: imageHeight * 1.2,
              height: imageHeight,
              backgroundImage: `url(${img})`,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Gallery Component
const TiledGallery: React.FC = () => {
  const [imagesReady, setImagesReady] = useState(false);
  const [columnCount, setColumnCount] = useState(getColumnCount());

  useEffect(() => {
    preloadImages(items.map((item) => item.img)).then(() => setImagesReady(true));

    const handleResize = () => setColumnCount(getColumnCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns: string[][] = Array.from({ length: columnCount }, (_, i) =>
    items.filter((_, idx) => idx % columnCount === i).map((item) => item.img)
  );

  const speeds = [40, 60, 50, 55, 45];

  if (!imagesReady) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50">
        <span className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-slate-400" />
        <span className="mt-8 text-slate-500 text-2xl font-semibold">Loading gallery...</span>
      </div>
    );
  }

  return (
    <section className="py-2 overflow-hidden w-screen">
      <div className="w-full max-w-none px-0 overflow-hidden">
        <div className="h-[700px] flex flex-row justify-center gap-4 overflow-hidden">
          {columns.map((col, i) => (
            <CarouselColumn
              key={i}
              images={col}
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
