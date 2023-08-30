import { ButtonHTMLAttributes, ReactNode } from 'react'

type IVariant = 'default' | 'outline' | 'unstyled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: IVariant
  isLoading?: boolean
  loadingText?: string
  size?: 'sm' | 'md' | 'lg'
}

export type { ButtonProps, IVariant }
