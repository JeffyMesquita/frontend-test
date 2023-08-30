import { DynamicIcon } from './GetIconByProp'
import { IconProps, Props } from './types'

function Icon({ children, className, onClick, icon, size = '5' }: IconProps) {
  const svgIcon = DynamicIcon({ icon } as Props)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      className={`w-${size} h-${size} flex items-center justify-center p-0.5 ${className}`}
      onClick={onClick}
      fill="none"
    >
      {svgIcon || children}
    </svg>
  )
}

export { Icon }
