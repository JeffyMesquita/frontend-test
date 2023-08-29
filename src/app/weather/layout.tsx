import { NavBar } from "@components/NavBar/NavBar";
import { WeatherBody } from "@components/WeatherBody/WeatherBody";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Clima Tempo",
  description: "Informações sobre o clima de qualquer cidade do mundo",
};

export default function WeatherLayout({ children }: PropsWithChildren) {
  return (
    <WeatherBody>
      <NavBar />
      <section className="flex flex-col items-center justify-center w-full h-full mt-8">
        {children}
      </section>
    </WeatherBody>
  );
}
