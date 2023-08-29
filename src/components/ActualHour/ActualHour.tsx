"use client";
import { ClientOnly } from "@components/ClientOnly/ClientOnly";
import { formatTimeBrazilian } from "@utils/datesFormatter";

interface ActualHourProps {
  currentHour: Date;
}

export function ActualHour({ currentHour }: ActualHourProps) {
  return (
    <ClientOnly
      fallback={
        <div className="h-6 w-20 bg-neutral-300 animate-pulse rounded" />
      }
    >
      <p className="text-md font-bold mr-4">
        {formatTimeBrazilian(currentHour) ?? "00:00"}
      </p>
    </ClientOnly>
  );
}
