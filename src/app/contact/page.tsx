import { ContactForm } from "@components/ContactForm/ContactForm";
import { Heading } from "@components/Heading";
import { Text } from "@components/Text";

export default function ContactPage() {
  return (
    <div className="h-full w-full flex flex-col p-4 gap-6 md:flex-row md:p-8 md:gap-12 items-center">
      <div className="flex flex-col w-full gap-6 h-auto md:h-full md:justify-center md:w-1/2">
        <Heading className="text-5xl">Vamos Conversar?</Heading>
        <Text>
          Tem alguma grande ideia ou marca para desenvolver e precisa de ajuda?
          Então entre em contato que adoraríamos ouvir sobre seu projeto e
          fornecer ajuda para transformá-lo em realidade.
        </Text>
      </div>
      <div className="flex flex-col w-full gap-6 h-auto md:h-full md:justify-center md:w-1/2 md:items-center">
        <ContactForm />
      </div>
    </div>
  );
}
