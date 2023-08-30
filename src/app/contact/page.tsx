import { ContactForm } from "@components/ContactForm/ContactForm";
import { ContactText } from "@components/ContactText/ContactText";

export default function ContactPage() {
  return (
    <div className="h-full w-full flex flex-col p-4 gap-6 md:flex-row md:p-8 md:gap-12 items-center">
      <ContactText />
      <div className="flex flex-col w-full gap-6 h-auto md:h-full md:justify-center md:w-1/2 md:items-center">
        <ContactForm />
      </div>
    </div>
  );
}
