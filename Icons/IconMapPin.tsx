import React from 'react'
import { SvgProps } from '../models/Svg'

const IconMapPin = ({
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
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

export default IconMapPin
