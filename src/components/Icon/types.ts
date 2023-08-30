import { ReactNode } from 'react'

type IconList =
  | 'angleRight'
  | 'angleUp'
  | 'check'
  | 'checkCircle'
  | 'close'
  | 'envelope'
  | 'exclamation'
  | 'eye'
  | 'eyeOff'
  | 'key'
  | 'loader'
  | 'tire'
  | 'weight'

type sizeList =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '12'
  | '16'
  | '20'
  | '24'
  | '32'
  | '40'
  | '48'
  | '56'
  | '64'
  | '72'
  | '80'
  | '96'
  | '128'

type IconProps = {
  children?: ReactNode
  icon?: IconList
  size?: sizeList
  className?: string
  onClick?: () => void
}

type Props = {
  icon: string
}

export type { IconProps, Props }
