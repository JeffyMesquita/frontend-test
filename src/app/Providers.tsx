"use client";
import { HourProvider } from "@contexts/HourContext/HourContext";
import { ToastContextProvider } from "@contexts/ToastContext/ToastContext";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ToastContextProvider>
      <HourProvider>
        <div id="portalToast" />
        {children}
      </HourProvider>
    </ToastContextProvider>
  );
}
