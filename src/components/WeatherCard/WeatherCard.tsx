"use client";
import { useHourContext } from "@contexts/HourContext/HourContext";
import { cn } from "@lib/utils";

interface WeatherCardProps {
  children: React.ReactNode;
  className?: string;
}

export function WeatherCard({ children, className }: WeatherCardProps) {
  const { isDay } = useHourContext();

  return (
    <div
      className={cn(
        "flex p-4 w-full rounded-2xl",
        {
          "bg-blue-day-600/60": isDay,
          "bg-blue-night-600/60": !isDay,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
