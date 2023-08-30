"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FilePlus, MailOpen, MessagesSquare, Phone, User2 } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@components/Button";
import { ClientOnly } from "@components/ClientOnly/ClientOnly";
import { Text } from "@components/Text";
import { TextArea } from "@components/TextArea";
import { TextInput } from "@components/TextInput/TextInput";
import { useToast } from "@contexts/ToastContext/ToastContext";
import { headingTextAnimation } from "@styles/animations/animations";
import { phoneMask } from "@utils/masks";
import { motion } from "framer-motion";

const MAX_FILE_SIZE = 500000;
const SUPPORTED_FORMATS = ["application/pdf"];

const contactSchema = z.object({
  name: z.string().min(3, "Nome muito curto").max(50, "Nome muito longo"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(14, "Telefone inválido").max(15, "Telefone inválido"),
  file: z
    .custom<FileList>()
    .refine((file) => file.length == 1, {
      message: "O arquivo não pode ser vazio",
    })
    .transform((file) => file.length > 0 && file.item(0))
    .refine((file) => !file || (!!file && file.size <= MAX_FILE_SIZE), {
      message: `O arquivo deve ter no máximo ${MAX_FILE_SIZE / 1000}kb`,
    })
    .refine(
      (file) => !file || (!!file && SUPPORTED_FORMATS.includes(file.type)),
      {
        message: `O arquivo deve ser do tipo pdf`,
      }
    ),

  subject: z
    .string()
    .min(8, "Assunto muito curto")
    .max(50, "Assunto muito longo"),
  message: z
    .string({
      description: "Mensagem",
      required_error: "Mensagem é obrigatória",
    })
    .trim()
    .min(10, "Mensagem muito curta"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function LoadingForm() {
  return (
    <div className="flex h-auto w-full animate-pulse flex-col gap-9 pt-5">
      {Array.from("12345", (index) => (
        <div key={index} className="h-10 w-full rounded-sm bg-neutral-500" />
      ))}
      <div className="h-24 w-full rounded-sm bg-neutral-500 -mt-2" />
      <div className="h-10 w-full rounded-sm bg-neutral-500 -mt-6" />
    </div>
  );
}

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onlyNumberKeyPress = useCallback((e: any) => {
    if ((e.which < 48 || e.which > 57) && e.key !== "-") {
      e.preventDefault();
    }
  }, []);

  const onSubmit = useCallback(
    async (data: ContactFormValues) => {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        console.log("Form =>", data);
        addToast({
          type: "success",
          title: "Sucesso!",
          message: "Mensagem enviada com sucesso!",
        });
        reset();
      }, 2000);
    },
    [reset, addToast]
  );
  return (
    <ClientOnly fallback={<LoadingForm />}>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 h-full"
        autoComplete="off"
        variants={headingTextAnimation}
        initial="hidden"
        animate="visible"
      >
        <TextInput.Root>
          <TextInput.Label description="Nome">
            <TextInput.Content>
              <TextInput.Icon>
                <User2 className="text-blue-500" size={18} />
              </TextInput.Icon>
              <TextInput.Input
                autoComplete="off"
                type="text"
                register={{
                  action: register,
                  name: "name",
                }}
                placeholder="Digite seu nome"
              />
            </TextInput.Content>
            <TextInput.Errors
              isInvalid={!!errors.name}
              description={errors.name?.message}
            />
          </TextInput.Label>
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Label description="Email">
            <TextInput.Content>
              <TextInput.Icon>
                <MailOpen className="text-blue-500" size={18} />
              </TextInput.Icon>
              <TextInput.Input
                autoComplete="off"
                type="email"
                register={{
                  action: register,
                  name: "email",
                }}
                placeholder="Digite seu email"
              />
            </TextInput.Content>
            <TextInput.Errors
              isInvalid={!!errors.email}
              description={errors.email?.message}
            />
          </TextInput.Label>
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Label description="Telefone">
            <TextInput.Content>
              <TextInput.Icon>
                <Phone className="text-blue-500" size={18} />
              </TextInput.Icon>
              <TextInput.Input
                autoComplete="off"
                type="tel"
                register={{
                  action: register,
                  name: "phone",
                }}
                maxLength={15}
                placeholder="Ex: (00) 00000-0000"
                onKeyPress={(e) => {
                  onlyNumberKeyPress(e);
                }}
                onChange={(event) => {
                  setValue("phone", phoneMask(event.target.value));
                }}
              />
            </TextInput.Content>
            <TextInput.Errors
              isInvalid={!!errors.phone}
              description={errors.phone?.message}
            />
          </TextInput.Label>
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Label description="Seu Projeto">
            <TextInput.Content>
              <TextInput.Icon>
                <FilePlus className="text-blue-500" size={18} />
              </TextInput.Icon>
              <TextInput.Input
                type="file"
                accept="application/pdf"
                placeholder="Seu Projeto"
                register={{
                  action: register,
                  name: "file",
                }}
              />
            </TextInput.Content>
            <TextInput.Errors
              isInvalid={!!errors.file}
              description={errors.file?.message}
            />
            <Text className="text-[10px] mt-1.5">
              Envie seu projeto para analisarmos. (apenas pdf)
            </Text>
          </TextInput.Label>
        </TextInput.Root>

        <TextInput.Root>
          <TextInput.Label description="Assunto">
            <TextInput.Content>
              <TextInput.Icon>
                <MessagesSquare className="text-blue-500" size={18} />
              </TextInput.Icon>
              <TextInput.Input
                autoComplete="off"
                type="text"
                register={{
                  action: register,
                  name: "subject",
                }}
                placeholder="Digite o assunto"
              />
            </TextInput.Content>
            <TextInput.Errors
              isInvalid={!!errors.subject}
              description={errors.subject?.message}
            />
          </TextInput.Label>
        </TextInput.Root>

        <TextArea.Root>
          <TextArea.Label description="Mensagem">
            <TextArea.Content>
              <TextArea.Input
                placeholder="Escreva sua mensagem aqui"
                rows={4}
                register={{
                  action: register,
                  name: "message",
                }}
                onChange={(event) => {
                  setValue("message", event.target.value || "some text");
                }}
              />
            </TextArea.Content>
            <TextArea.Error
              isInvalid={!!errors.message}
              description={errors.message?.message}
            />
          </TextArea.Label>
        </TextArea.Root>

        <Button type="submit" isLoading={loading} loadingText="Enviando...">
          Enviar
        </Button>
      </motion.form>
    </ClientOnly>
  );
}
