import Image from "next/image";
import type { ReactNode } from "react";
import { pointsOfSale, mapsSearchLink, type PointOfSaleCategory } from "@/lib/pointsOfSale";

const categoryIcons: Record<PointOfSaleCategory["icon"], ReactNode> = {
  pill: (
    <path d="m6.5 17.5 11-11a4 4 0 1 1 5.66 5.66l-11 11a4 4 0 1 1-5.66-5.66Zm4.5-4.5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
  ),
  cart: (
    <path d="M2 3h2l2.4 12.2A2 2 0 0 0 8.35 17H18a2 2 0 0 0 1.95-1.57L21.5 8H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  barbell: (
    <path d="M3 9v6M6 7v10M9 11h6M6 12h12M18 7v10M21 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
  ),
};

const pinIcon = (
  <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
);

export default function PointsOfSaleList({ analyticsPrefix }: { analyticsPrefix: string }) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {pointsOfSale.map((category) => (
        <div key={category.title} className="rounded-xl border border-line-stroke bg-white p-5">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-orange">
              {categoryIcons[category.icon]}
            </svg>
            <h3 className="font-display text-base font-semibold text-forest">{category.title}</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {category.places.map((place) => (
              <li key={place.name}>
                <a
                  href={mapsSearchLink(place.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event={`${analyticsPrefix}_${place.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex min-h-12 items-center gap-3 rounded-lg border border-transparent px-2 py-1.5 text-sm text-charcoal transition-colors hover:border-line-stroke hover:bg-cream"
                >
                  {place.logo ? (
                    <span className="relative flex h-10 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
                      <Image
                        src={place.logo}
                        alt={`Logo de ${place.name}`}
                        fill
                        sizes="56px"
                        className="object-contain p-1"
                      />
                    </span>
                  ) : (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-dark text-stone group-hover:text-orange">
                      <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                        {pinIcon}
                      </svg>
                    </span>
                  )}
                  <span className="font-medium group-hover:underline">{place.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
