import { NavBar } from "@components/NavBar/NavBar";
import { WeatherBody } from "@components/WeatherBody/WeatherBody";
import { PropsWithChildren } from "react";

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
