"use client";

import { FindCEPForm } from "@components/FindCEPForm/FindCEPForm";
import { FIndCEPResults } from "@components/FindCEPResults/FindCEPResults";
import { Heading } from "@components/Heading";

export default function FindCEP() {
  /*
   * Essas funções são apenas para testar a API do CEP Aberto
   * e a API do FindCEP
   * Porém, elas não são usadas no projeto por enquanto
   * pois houve problemas na integração delas com o projeto
   */

  // const getCepFindCEP = useCallback(async (street: string) => {
  //   const { data } = await cepAbertoApi.get(street);
  //   console.log(data);
  // }, []);

  // const getCepCEPAberto = useCallback(async (street: string) => {
  //   const { data } = await cepAbertoApi.get(`address?logradouro=${street}`);
  //   console.log(data);
  // }, []);

  // useEffect(() => {
  //   getCepCEPAberto("Rua das Flores");
  //   getCepFindCEP("Rua+das+Flores");
  // }, [getCepCEPAberto, getCepFindCEP]);
  return (
    <div className="h-full w-full flex flex-col p-4 gap-4">
      <Heading size="lg">Procurando um CEP?</Heading>
      <FindCEPForm />
      <FIndCEPResults />
    </div>
  );
}
