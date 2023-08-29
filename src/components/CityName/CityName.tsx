"use client";
import { ClientOnly } from "@components/ClientOnly/ClientOnly";

interface CityNameProps {
  cityName: string;
  country: string;
}

export function CityName({ cityName, country }: CityNameProps) {
  return (
    <ClientOnly
      fallback={
        <div className="h-6 w-20 bg-neutral-300 animate-pulse rounded" />
      }
    >
      <h1 className="text-xl font-bold">
        {cityName || "Cidade"}, {country || "País"}
      </h1>
    </ClientOnly>
  );
}
