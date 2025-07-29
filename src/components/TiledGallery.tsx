import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";

// Import all images from the img/imgs folder
import innovest0 from "../img/imgs/innovest-0.jpg";
import innovest1 from "../img/imgs/innovest-1.png";
import innovest2 from "../img/imgs/innovest-2.png";
import innovest3 from "../img/imgs/innovest-3.png";
import innovest4 from "../img/imgs/innovest-4.png";
import innovest5 from "../img/imgs/innovest-5.png";
import innovest6 from "../img/imgs/innovest-6.png";
import innovest7 from "../img/imgs/innovest-7.jpg";
import innovest8 from "../img/imgs/innovest-8.jpg";
import innovest9 from "../img/imgs/innovest-9.jpg";
import innovest10 from "../img/imgs/innovest-10.jpg";
import innovest11 from "../img/imgs/innovest-11.jpg";
/**iimport innovest12 from "../img/imgs/innovest-12.jpg";
import innovest13 from "../img/imgs/innovest-13.jpg";
import innovest14 from "../img/imgs/innovest-14.jpg";
import innovest15 from "../img/imgs/innovest-15.jpg";
import innovest16 from "../img/imgs/innovest-16.jpg";
import innovest17 from "../img/imgs/innovest-17.jpg";
import innovest18 from "../img/imgs/innovest-18.jpg";
import innovest19 from "../img/imgs/innovest-19.jpg";
 import innovest20 from "../img/imgs/innovest-20.jpg";
import innovest21 from "../img/imgs/innovest-21.jpg";
import innovest22 from "../img/imgs/innovest-22.jpg";
import innovest23 from "../img/imgs/innovest-23.jpg";
import innovest24 from "../img/imgs/innovest-24.jpg";
import innovest25 from "../img/imgs/innovest-25.jpg";
import innovest26 from "../img/imgs/innovest-26.jpg";
import innovest27 from "../img/imgs/innovest-27.jpg";
import innovest28 from "../img/imgs/innovest-28.jpg";
import innovest29 from "../img/imgs/innovest-29.jpg";
import innovest30 from "../img/imgs/innovest-30.jpg";
import innovest31 from "../img/imgs/innovest-31.jpg";
import innovest32 from "../img/imgs/innovest-32.jpg";
**/

// Array of all imported images
const allImages = [
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
 /**  innovest12,
  innovest13,
  innovest14,
   innovest15,
  innovest16,
  innovest17,
  innovest18,
  innovest19,
  innovest20,
  innovest21,
  innovest22,
  innovest23,
  innovest24,
  innovest25,
  innovest26,
  innovest27,
  innovest28,
  innovest29,
  innovest30,
  innovest31,
  innovest32**/,
];

// Available heights for random selection
const availableHeights = [300, 200,400,500];
const getRandomHeight = () => availableHeights[Math.floor(Math.random() * availableHeights.length)];

// Create items array with random heights
const items = allImages.map((img, index) => ({
  id: (index + 1).toString(),
  img,
  url: "",
  height: getRandomHeight(),
}));

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
): number => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState<number>(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

interface Item {
  id: string;
  img: string;
  url: string;
  height: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "bottom" | "top" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = (item: any) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[
        Math.floor(Math.random() * dirs.length)
      ] as typeof animateFrom;
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement;
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement;
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content"
          style={{ willChange: "transform, width, height, opacity" }}
          onClick={() => window.open(item.url, "_blank", "noopener")}
          onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
        >
          <div
            className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {colorShiftOnHover && (
              <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// TiledGallery component that uses the Masonry component with local images
const TiledGallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === galleryRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={galleryRef} className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-8">
          Gallery
        </h2>
        <p className="text-center text-slate-600 text-lg mb-12">
          Explore highlights from InnovestHack 2025.
        </p>
        <div className="w-full h-[600px]">
          {isVisible && (
            <Masonry
              items={items}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="random"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={false}
              colorShiftOnHover={false}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TiledGallery;
export { Masonry };



