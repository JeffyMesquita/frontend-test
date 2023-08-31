import { NavBar } from "@components/NavBar/NavBar";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Busque um CEP",
  description: "Busque um CEP através do nome da rua",
};

export default function FindCEPLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-0 gap-4 bg-sky-300">
      <NavBar />
      <section className="flex flex-col items-center justify-center w-full h-full max-w-lg md:mx-auto">
        {children}
      </section>
    </main>
  );
}
