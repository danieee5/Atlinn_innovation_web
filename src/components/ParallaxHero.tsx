"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const maskStyle = {
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
  maskImage:
    "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
};

export default function ParallaxHero({ src, alt }: { src: string; alt: string }) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (layerRef.current) {
          layerRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden" style={maskStyle}>
      <div
        ref={layerRef}
        className="absolute inset-x-0 -top-16 h-[130%] w-full will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
