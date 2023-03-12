import { HTMLProps, ReactNode } from 'react'
import clsx from 'clsx'

type Props = HTMLProps<HTMLButtonElement> & {
  children: ReactNode
  // onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button = ({ children, className, ...restProps }: Props) => (
  <button
    {...restProps}
    type="button"
    className={clsx(['bg-transparent p-0 border-none', className])}
  >
    {children}
  </button>
)
export default Button
