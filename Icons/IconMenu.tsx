import React from 'react'
import { SvgProps } from '@models/Svg'

const IconMenu = ({
  height = '24',
  width = '24',
  className = 'stroke-black',
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    stroke="black"
    className={className}
    width={width}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="open nav"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

export default IconMenu
