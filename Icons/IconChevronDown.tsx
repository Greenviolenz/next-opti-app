import { SvgProps } from '@models/Svg'

const IconChevronDown = ({ className, height, width }: SvgProps) => {
  return (
    <svg
      height={height}
      width={width}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M6 9L12 15 18 9"></path>
    </svg>
  )
}

export default IconChevronDown
