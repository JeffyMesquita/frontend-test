"use client";
import { HourProvider } from "@contexts/HourContext/HourContext";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return <HourProvider>{children}</HourProvider>;
}
