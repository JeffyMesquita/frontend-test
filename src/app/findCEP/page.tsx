"use client";
import { cepAbertoApi } from "@services/APIs/cepAbertoApi";

import { FindCEPForm } from "@components/FindCEPForm/FindCEPForm";
import { Heading } from "@components/Heading";
import { useCallback, useEffect } from "react";

export default function FindCEP() {
  const getCepFindCEP = useCallback(async (street: string) => {
    const { data } = await cepAbertoApi.get(street);
    console.log(data);
  }, []);

  const getCepCEPAberto = useCallback(async (street: string) => {
    const { data } = await cepAbertoApi.get(`address?logradouro=${street}`);
    console.log(data);
  }, []);

  useEffect(() => {
    getCepCEPAberto("Rua das Flores");
    getCepFindCEP("Rua+das+Flores");
  }, [getCepCEPAberto, getCepFindCEP]);
  return (
    <div className="h-full w-full flex flex-col p-4 gap-4">
      <Heading size="lg">Procurando um CEP?</Heading>
      <FindCEPForm />
    </div>
  );
}
