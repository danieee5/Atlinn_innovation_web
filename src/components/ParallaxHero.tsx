import Image from "next/image";

export default function ParallaxHero({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full bg-cream">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />
    </div>
  );
}
