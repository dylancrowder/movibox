"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const vehicles = [
  {
    src: "/images/fletes/fiorinoflete.webp",
    alt: "Camioneta blanca chica de Movibox",
  },
  {
    src: "/images/camion/camionazul.jpeg",
    alt: "Camión azul de Movibox para mudanzas y fletes",
  },
];

export function VehicleImageCarousel({ initialIndex = 0 }: { initialIndex?: number }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const showPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? vehicles.length - 1 : index - 1));
  };

  const showNext = () => {
    setCurrentIndex((index) => (index === vehicles.length - 1 ? 0 : index + 1));
  };

  return (
    <div className="relative aspect-[903/763] w-full bg-neutral-100">
      <Image
        src={vehicles[currentIndex].src}
        alt={vehicles[currentIndex].alt}
        fill
        quality={70}
        className="object-contain"
        sizes="(max-width: 800px) calc(100vw - 2rem), 768px"
      />
      <button
        type="button"
        onClick={showPrevious}
        aria-label="Ver vehículo anterior"
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label="Ver vehículo siguiente"
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-white/90 px-3 py-2 shadow-md">
        {vehicles.map((vehicle, index) => (
          <button
            key={vehicle.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ver ${vehicle.alt.toLowerCase()}`}
            aria-current={index === currentIndex ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex ? "w-6 bg-primary" : "w-2.5 bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
