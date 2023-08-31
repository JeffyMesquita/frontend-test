"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@components/Button";
import { ClientOnly } from "@components/ClientOnly/ClientOnly";
import { TextInput } from "@components/TextInput/TextInput";
import { headingTextAnimation } from "@styles/animations/animations";

const findCEPSchema = z.object({
  street: z
    .string()
    .min(5, "Nome da rua muito curto (mínimo de 5 caracteres)")
    .max(50, "Nome da rua muito longo (máximo de 50 caracteres)"),
});

type FindCEPFormValues = z.infer<typeof findCEPSchema>;

export function FindCEPForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FindCEPFormValues>({
    resolver: zodResolver(findCEPSchema),
  });

  const onSubmit = useCallback(async (values: FindCEPFormValues) => {
    console.log(values);
  }, []);

  return (
    <ClientOnly>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4"
        autoComplete="off"
        variants={headingTextAnimation}
        initial="hidden"
        animate="visible"
      >
        <TextInput.Root className="gap-2">
          <TextInput.Content>
            <TextInput.Icon>
              <Search className="text-blue-500" size={18} />
            </TextInput.Icon>
            <TextInput.Input
              autoComplete="off"
              type="text"
              register={{
                action: register,
                name: "street",
              }}
              placeholder="Digite o nome da rua"
            />
          </TextInput.Content>
          <TextInput.Errors
            isInvalid={!!errors.street}
            description={errors.street?.message}
          />
        </TextInput.Root>

        <Button type="submit" isLoading={loading} loadingText="Procurando...">
          Procurar
        </Button>
      </motion.form>
    </ClientOnly>
  );
}
