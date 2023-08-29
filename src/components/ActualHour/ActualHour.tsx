"use client";
import { ClientOnly } from "@components/ClientOnly/ClientOnly";

interface ActualHourProps {
  currentHour: string;
}

export function ActualHour({ currentHour }: ActualHourProps) {
  return (
    <ClientOnly
      fallback={
        <div className="h-6 w-20 bg-neutral-300 animate-pulse rounded" />
      }
    >
      <p className="text-md font-bold mr-4">{currentHour || "12:00"}</p>
    </ClientOnly>
  );
}
