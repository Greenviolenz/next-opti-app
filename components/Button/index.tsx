import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button = ({ children, onClick }: Props) => (
  <button
    type="button"
    className="bg-transparent p-0 border-none"
    onClick={onClick}
  >
    {children}
  </button>
)
export default Button
