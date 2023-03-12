import clsx from 'clsx'

type Props = {
  level?: '1' | '2' | '3' | '4'
  weight?: 'normal' | 'bold'
  primary?: boolean
  className?: string
  children?: React.ReactNode
}

const tagClass = {
  1: 'text-h2 sm:text-h1',
  2: 'text-h3 sm:text-h2',
  3: 'text-h4 sm:text-h3',
  4: 'text-h4',
}

const weightClass = {
  normal: 'font-[300]',
  bold: 'font-[500]',
}

const Header = ({
  level = '1',
  primary,
  weight = 'normal',
  children,
  className,
}: Props) => {
  const Tag: 'h1' | 'h2' | 'h3' | 'h4' = `h${level}`

  return (
    <Tag
      className={clsx(
        tagClass[level],
        weightClass[weight],
        primary && 'text-primary',
        className
      )}
    >
      {children}
    </Tag>
  )
}

export default Header
