"use client";
import { useHourContext } from "@contexts/HourContext/HourContext";
import { cn } from "@lib/utils";
import { footerCardAnimation } from "@styles/animations/animations";
import { motion } from "framer-motion";

interface WeatherCardProps {
  children: React.ReactNode;
  className?: string;
}

export function WeatherCard({ children, className }: WeatherCardProps) {
  const { isDay } = useHourContext();

  return (
    <motion.div
      className={cn(
        "flex p-4 w-full rounded-2xl",
        {
          "bg-blue-day-600/60": isDay,
          "bg-blue-night-600/60": !isDay,
        },
        className
      )}
      initial="hidden"
      animate="visible"
      variants={footerCardAnimation}
    >
      {children}
    </motion.div>
  );
}
