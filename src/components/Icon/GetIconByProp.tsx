import React from 'react'

import {
  AngleRight,
  AngleUp,
  Check,
  CheckCircle,
  Close,
  Envelope,
  Exclamation,
  Eye,
  EyeOff,
  Key,
  Loader,
  Tire,
  Weight,
} from './svg'
import { Props } from './types'

function GetIconByProp(prop: string) {
  const componentMap: {
    [key: string]: React.FC
  } = {
    angleRight: AngleRight,
    angleUp: AngleUp,
    check: Check,
    checkCircle: CheckCircle,
    close: Close,
    envelope: Envelope,
    exclamation: Exclamation,
    eye: Eye,
    eyeOff: EyeOff,
    key: Key,
    loader: Loader,
    tire: Tire,
    weight: Weight,
  }

  return componentMap[prop]
}

export function DynamicIcon({ icon }: Props) {
  const Component = GetIconByProp(icon)

  if (!Component) {
    return null
  }

  return <Component />
}
