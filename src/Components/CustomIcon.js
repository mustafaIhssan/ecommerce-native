import { Icon } from '@ui-kitten/components'
import React from 'react'

export default function CustomIcon({ name, size = 28, color = '#8F9BB3' }) {
  return <Icon style={{ width: size, height: size }} fill={color} name={name} />
}
