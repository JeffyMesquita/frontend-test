"use client";
import { useHourContext } from "@contexts/HourContext/HourContext";
import { cn } from "@lib/utils";

interface WeatherBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function WeatherBody({ children, className }: WeatherBodyProps) {
  const { isDay } = useHourContext();
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center p-4 pt-0 gap-4",
        {
          "bg-night": !isDay,
          "bg-day": isDay,
        },
        className
      )}
    >
      {children}
    </main>
  );
}
