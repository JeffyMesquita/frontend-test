"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useEffect } from "react";

import type { ToastContainerProps, ToastProps } from "./types";

import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import { useToast } from "@contexts/ToastContext/ToastContext";
import { cn } from "@lib/utils";

const configType = {
  success: <Icon icon="check" size="5" className="stroke-white" />,
  info: <Icon icon="exclamation" size="6" className="fill-white" />,
  error: <Icon icon="exclamation" size="6" className="fill-white" />,
  warning: <Icon icon="exclamation" size="6" className="fill-white" />,
};

const configPosition: any = {
  "top-right": {
    animation: { x: 386 },
    position: "top-[15px] right-[25px]",
    axle: { x: 0 },
  },
  "top-left": {
    animation: { x: -386 },
    position: "top-[15px] left-[25px]",
    axle: { x: 0 },
  },
  top: {
    animation: { y: 0 },
    position: "top-[10px] left-[50%] translate-x-[-50%]",
    axle: { y: 10 },
  },

  "bottom-right": {
    animation: { x: 30 },
    position: "bottom-[15px] right-[10px]",
    axle: { x: 0 },
  },
  "bottom-left": {
    animation: { x: -386 },
    position: "bottom-[15px] left-[25px]",
    axle: { x: 0 },
  },
  bottom: {
    animation: { y: 10 },
    position: "bottom-[15px] left-[50%] translate-x-[-50%]",
    axle: { y: 0 },
  },
};

export function ToastContainer({ toasts, pos }: ToastContainerProps) {
  return (
    <ul
      className={cn("absolute z-[120] flex flex-col gap-5", {
        "left-[50%] top-[10px] translate-x-[-50%] items-center": pos === "top",
        "left-[25px] top-[15px] items-start": pos === "top-left",
        "right-[25px] top-[15px] items-end": pos === "top-right",
        "bottom-[15px] left-[50%] translate-x-[-50%] items-center":
          pos === "bottom",
        "bottom-[15px] left-[25px] items-start": pos === "bottom-left",
        "bottom-[15px] right-[10px] items-end": pos === "bottom-right",
      })}
    >
      <AnimatePresence mode="popLayout">
        {toasts
          .filter((item) => item.position === pos)
          .map((toast) => {
            const { id, message, title, type, duration, position } = toast;
            return (
              <Fragment key={id}>
                <Toast
                  id={id}
                  title={title}
                  message={message}
                  type={type}
                  duration={duration}
                  position={position}
                />
              </Fragment>
            );
          })}
      </AnimatePresence>
    </ul>
  );
}

export function Toast({
  id,
  message,
  title,
  type,
  duration,
  position = "top",
}: ToastProps) {
  const { closeToast, removeToast } = useToast();

  const animation = configPosition[position];

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, id, removeToast]);

  return (
    <motion.li
      exit={{
        opacity: 0,
        ...animation?.animation,
      }}
      initial={{ opacity: 0, ...animation?.animation }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
        ...animation?.axle,
      }}
      layout
      className={cn(
        "flex min-h-[60px] min-w-[200px] max-w-[600px] items-start gap-4 overflow-hidden rounded-lg border-l-4 p-3 shadow-md max-[400px]:max-w-[370px]",
        {
          "toast-success": type === "success",
          "toast-info": type === "info",
          "toast-error": type === "error",
          "toast-warning": type === "warning",
        }
      )}
    >
      <span
        className={cn("flex rounded-full p-1 text-sm", {
          "bg-[#70D12B]": type === "success",
          "bg-[#416DFC]": type === "info",
          "bg-[#FF515D]": type === "error",
          "bg-[#dd6a1f]": type === "warning",
        })}
      >
        {configType[type]}
      </span>
      <div className="flex flex-1 flex-col">
        <header className="flex w-full items-start justify-between gap-4">
          <Text size="lg" className="font-semibold capitalize text-zinc-700">
            {title}
          </Text>
          <div
            className="cursor-pointer text-zinc-700"
            onClick={() => {
              closeToast(id);
            }}
          >
            <Icon icon="close" size="4" className="stroke-zinc-600" />
          </div>
        </header>
        <Text className="w-full text-zinc-700">{message}</Text>
      </div>
    </motion.li>
  );
}
