import { FindCEPForm } from "@components/FindCEPForm/FindCEPForm";
import { Heading } from "@components/Heading";

export default function FindCEP() {
  return (
    <div className="h-full w-full flex flex-col p-4 gap-4">
      <Heading size="lg">Procurando um CEP?</Heading>
      <FindCEPForm />
    </div>
  );
}
