import { NavBar } from "@components/NavBar/NavBar";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Entre em contato",
  description: "Entre em contato com a nossa equipe",
};

export default function ContactLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-0 gap-4 bg-blue-400">
      <NavBar />
      <section className="flex flex-col items-center justify-center w-full h-full max-w-5xl md:m-auto">
        {children}
      </section>
    </main>
  );
}
