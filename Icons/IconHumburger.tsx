import React from 'react'
import { SvgProps } from '@models/Svg'

const IconHamburger = ({
  height = '24',
  width = '24',
  className = 'text-black',
}: SvgProps) => (
  <svg
    fill="none"
    height={height}
    className={className}
    width={width}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    style={{ zIndex: 1 }}
  >
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </svg>
)

export default IconHamburger
