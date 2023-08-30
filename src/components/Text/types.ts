import { ReactNode } from 'react'

interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export type { TextProps }
