import clsx from 'clsx'

type Props = {
  level?: '1' | '2' | '3' | '4'
  primary?: boolean
  className?: string
  children?: React.ReactNode
}

const tagClass = {
  1: 'text-h1',
  2: 'text-h2',
  3: 'text-h3',
  4: 'text-h4',
}

const Header = ({ level = '1', primary, children, className }: Props) => {
  const Tag: 'h1' | 'h2' | 'h3' | 'h4' = `h${level}`

  return (
    <Tag
      className={clsx(
        'text-h1',
        tagClass[level],
        primary && 'text-primary',
        className
      )}
    >
      {children}
    </Tag>
  )
}

export default Header
