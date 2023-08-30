"use client";
import { ClientOnly } from "@components/ClientOnly/ClientOnly";
import { Heading } from "@components/Heading";
import { Text } from "@components/Text";
import { infoCardAnimation } from "@styles/animations/animations";
import { motion } from "framer-motion";

function LoadingComponent() {
  return (
    <div className="h-auto w-full flex flex-col gap-8">
      <div className="h-12 w-3/4 bg-neutral-500 animate-pulse rounded-md" />
      <div className="w-full flex flex-col gap-1">
        {Array.from("123", (index) => (
          <div
            key={index}
            className="h-3 w-full rounded-[2px] bg-neutral-500 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

export function ContactText() {
  return (
    <ClientOnly fallback={<LoadingComponent />}>
      <motion.div
        className="flex flex-col w-full gap-6 h-auto md:h-full md:justify-center md:w-1/2"
        variants={infoCardAnimation}
        initial="hidden"
        animate="visible"
      >
        <Heading className="text-5xl">Vamos Conversar?</Heading>
        <Text>
          Tem alguma grande ideia ou marca para desenvolver e precisa de ajuda?
          Então entre em contato que adoraríamos ouvir sobre seu projeto e
          fornecer ajuda para transformá-lo em realidade.
        </Text>
      </motion.div>
    </ClientOnly>
  );
}
