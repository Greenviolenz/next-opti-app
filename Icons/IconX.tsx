import React from 'react'
import { SvgProps } from '@models/Svg'

const IconX = ({
  height = '24',
  width = '24',
  className = 'stroke-black',
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    className={className}
    width={width}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="close nav"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

export default IconX
