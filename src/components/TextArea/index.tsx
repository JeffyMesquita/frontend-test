"use client";
import { ChangeEvent, createContext, useContext, useState } from "react";

import {
  TextAreaContentProps,
  TextAreaData,
  TextAreaErrorsProps,
  TextAreaInputProps,
  TextAreaLabelProps,
  TextAreaRootProps,
} from "./types";

import { Text } from "@components/Text";
import { cn } from "@lib/utils";

const TextAreaContext = createContext<TextAreaData>({} as TextAreaData);

function TextAreaRoot({ children, width, className }: TextAreaRootProps) {
  const [value, setValue] = useState("");
  return (
    <TextAreaContext.Provider value={{ setValue, value }}>
      <div
        className={cn("flex flex-col gap-1", className)}
        style={width ? { width } : {}}
      >
        {children}
      </div>
    </TextAreaContext.Provider>
  );
}

TextAreaRoot.displayName = "TextArea.Root";

function TextAreaLabel({
  description,
  className,
  children,
}: TextAreaLabelProps) {
  return (
    <label className={cn("w-full", className)}>
      <Text size="sm" className="font-bold mb-1">
        {description}
      </Text>
      {children}
    </label>
  );
}

TextAreaLabel.displayName = "TextArea.Label";

function TextAreaError({ isInvalid, description }: TextAreaErrorsProps) {
  if (!isInvalid) {
    return null;
  }

  return (
    <span className="ml-0.5 text-2xs font-bold text-red-600">
      {description}
    </span>
  );
}

TextAreaError.displayName = "TextArea.Error";

function TextAreaContent({ className, children }: TextAreaContentProps) {
  return (
    <div
      className={cn(
        "textarea-theme rounded-sm duration-200 hover:ring-2 focus:ring-2 -mb-1.5",
        className
      )}
    >
      {children}
    </div>
  );
}

TextAreaContent.displayName = "TextArea.Content";

function TextAreaInput({ className, register, ...rest }: TextAreaInputProps) {
  const { setValue } = useContext(TextAreaContext);
  return (
    <>
      {register ? (
        <textarea
          className={cn("textarea", className)}
          {...(register.action(register.name),
          {
            onChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
              setValue(event.target.value);
              rest.onChange && rest.onChange(event);
            },
          })}
          {...rest}
        />
      ) : (
        <textarea className={cn("textarea", className)} {...rest} />
      )}
    </>
  );
}

TextAreaInput.displayName = "TextArea.Input";

export const TextArea = {
  Root: TextAreaRoot,
  Label: TextAreaLabel,
  Error: TextAreaError,
  Content: TextAreaContent,
  Input: TextAreaInput,
};
