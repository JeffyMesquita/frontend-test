"use client";
import {
  ChangeEvent,
  createContext,
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import {
  TextInputContentProps,
  TextInputData,
  TextInputErrorsProps,
  TextInputIconProps,
  TextInputInputProps,
  TextInputLabelProps,
  TextInputRootProps,
} from "./types";

import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import { cn } from "@lib/utils";

const TextInputContext = createContext<TextInputData>({} as TextInputData);

function TextInputRoot({ children, className }: TextInputRootProps) {
  const [value, setValue] = useState("");

  return (
    <TextInputContext.Provider value={{ setValue, value }}>
      <div className={cn("flex flex-col gap-1", className)}>{children}</div>
    </TextInputContext.Provider>
  );
}

function TextInputLabel({
  description,
  className,
  children,
}: TextInputLabelProps) {
  return (
    <label className={cn("w-full", className)}>
      <Text size="sm" className="font-bold mb-1">
        {description}
      </Text>
      {children}
    </label>
  );
}

function TextInputError({ isInvalid, description }: TextInputErrorsProps) {
  if (!isInvalid) {
    return null;
  }

  return (
    <span className="ml-0.5 text-2xs font-bold text-red-600">
      {description}
    </span>
  );
}

function TextInputContent({ className, children }: TextInputContentProps) {
  return (
    <div
      className={cn(
        "input-theme flex h-10 w-full items-center gap-4 rounded-sm px-4 duration-200 focus-within:ring-2 hover:ring-2 -mb-1.5",
        className
      )}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

const TextInputIcon = forwardRef<HTMLDivElement, TextInputIconProps>(
  ({ asChild, ...props }, forwardedRef) => {
    const innerRef = useRef<any>(null);

    useImperativeHandle(forwardedRef, () => innerRef.current);

    return (
      <span
        {...props}
        className="flex items-center justify-center text-neutral-400"
        ref={innerRef}
      >
        {props.children}
      </span>
    );
  }
);

TextInputIcon.displayName = "TextInput.Icon";

function TextInputInput({ register, type, ...rest }: TextInputInputProps) {
  const [typeInput, setTypeInput] = useState(type);

  const { setValue } = useContext(TextInputContext);

  return (
    <>
      {register ? (
        <input
          className="input"
          type={type === "password" ? typeInput : type}
          {...register.action(register.name, {
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              setValue(event.target.value);
              rest.onChange && rest.onChange(event);
            },
          })}
          {...rest}
        />
      ) : (
        <input
          className="input"
          type={type === "password" ? typeInput : type}
          {...rest}
        />
      )}
      {type === "password" && (
        <TextInputIcon>
          {typeInput !== "password" ? (
            <Icon
              icon="eyeOff"
              size="6"
              className="cursor-pointer"
              onClick={() => {
                setTypeInput("password");
              }}
            />
          ) : (
            <Icon
              icon="eye"
              size="6"
              className="cursor-pointer fill-transparent stroke-zinc-700"
              onClick={() => {
                setTypeInput("text");
              }}
            />
          )}
        </TextInputIcon>
      )}
    </>
  );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Content: TextInputContent,
  Label: TextInputLabel,
  Input: TextInputInput,
  Icon: TextInputIcon,
  Errors: TextInputError,
};
