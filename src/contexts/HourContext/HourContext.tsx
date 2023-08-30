"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export interface HourContextData {
  isDay: boolean;
}

const HourContext = createContext<HourContextData>({} as HourContextData);

interface HourProviderProps {
  children: React.ReactNode;
}

const HourProvider = ({ children }: HourProviderProps) => {
  const [isDay, setIsDay] = useState(true);

  const getHour = useCallback(() => {
    const now = new Date();
    const hour = now.toLocaleTimeString("pt-BR", {});

    if (hour >= "06:00:00" && hour <= "18:00:00") {
      setIsDay(true);
    } else {
      setIsDay(false);
    }
  }, []);

  useEffect(() => {
    getHour();
  }, [getHour]);

  return (
    <HourContext.Provider value={{ isDay }}>{children}</HourContext.Provider>
  );
};

const useHourContext = (): HourContextData => {
  const context = useContext(HourContext);

  if (!context) {
    throw new Error("useHourContext must be used within an HourProvider");
  }

  return context;
};

export { HourProvider, useHourContext };
