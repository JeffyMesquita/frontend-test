"use client";
import { motion } from "framer-motion";
import { PackageSearch } from "lucide-react";
import { useEffect, useState } from "react";

import { Heading } from "@components/Heading";
import { InfoText } from "@components/InfoText/InfoText";
import {
  footerCardAnimation,
  infoCardAnimation,
} from "@styles/animations/animations";

const results = [
  {
    cep: "01001-000",
    logradouro: "Praça da Sé",
    complemento: "lado ímpar",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107",
  },
  {
    cep: "12345-000",
    logradouro: "Rua das Flores",
    complemento: "",
    bairro: "Centro",
    localidade: "Jacareí",
    uf: "SP",
    ibge: "3524403",
    gia: "3505",
    ddd: "12",
    siafi: "6450",
  },
  {
    cep: "14702-182",
    logradouro: "Rua Raimundo Viana",
    complemento: "",
    bairro: "Centro",
    localidade: "Bebedouro",
    uf: "SP",
    ibge: "3506102",
    gia: "3509",
    ddd: "17",
    siafi: "6107",
  },
];

export function FIndCEPResults() {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsEmpty(!isEmpty);
    }, 3500);
  }, [isEmpty]);

  return (
    <div className="flex w-full rounded-sm bg-neutral-100/80 min-h-[300px] h-auto">
      {!isEmpty ? (
        <motion.div
          className="flex flex-col items-center justify-center gap-6 m-auto"
          initial="hidden"
          animate="visible"
          variants={infoCardAnimation}
        >
          <PackageSearch className="w-20 h-20 text-blue-400" />
          <Heading size="lg" className="text-blue-400">
            Procure um CEP
          </Heading>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-2 p-3 w-full">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="border-sky-500/30 border-2 rounded w-full flex flex-col p-4 gap-2"
              initial="hidden"
              animate="visible"
              variants={footerCardAnimation}
            >
              <div className="flex flex-row items-center justify-between">
                <InfoText infoText="CEP" text={result.cep} />
                <InfoText infoText="UF" text={result.uf} />
              </div>
              <div className="flex flex-row items-center justify-between">
                <InfoText infoText="Logradouro" text={result.logradouro} />
                <InfoText infoText="Bairro" text={result.bairro} />
              </div>
              <div className="flex flex-row items-center justify-between">
                <InfoText infoText="DDD" text={result.ddd} />
                <InfoText infoText="Localidade" text={result.localidade} />
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
