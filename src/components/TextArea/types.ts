import { ReactNode, SetStateAction, TextareaHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface TextAreaData {
  setValue: (value: SetStateAction<string>) => void
  value: string
}

interface TextAreaRootProps {
  children: ReactNode
  width?: string
  className?: string
}

interface TextAreaLabelProps {
  description: string
  className?: string
  children: ReactNode
}

interface TextAreaErrorsProps {
  isInvalid: boolean
  description?: string
}

interface TextAreaContentProps {
  className?: string
  children: ReactNode
}

interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  register?: {
    action: UseFormRegister<any>
    name: string
  }
}

export type {
  TextAreaData,
  TextAreaRootProps,
  TextAreaLabelProps,
  TextAreaErrorsProps,
  TextAreaContentProps,
  TextAreaInputProps,
}
