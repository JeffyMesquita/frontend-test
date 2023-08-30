"use client";

import { cn } from "@lib/utils";
import { ButtonProps } from "./types";

import { Icon } from "@components/Icon";

export function Button({
  children = "Default text",
  variant = "default",
  isLoading,
  loadingText = "Carregando",
  className,
  size = "md",
  type = "button",
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "flex items-center justify-center gap-2 truncate rounded-sm font-semibold uppercase",
        {
          "button-default": variant === "default",
          "button-outline": variant === "outline",
          "ring-blue-700 focus:ring-2": variant !== "unstyled",
          "h-8 px-2 text-xs": size === "sm",
          "h-10 px-4 text-sm": size === "md",
          "h-12 px-6 text-lg": size === "lg",
        },
        className
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && (
        <Icon icon="loader" className="h-6 w-6 animate-spin fill-neutral-200" />
      )}
      {isLoading && loadingText ? loadingText : children}
    </button>
  );
}
