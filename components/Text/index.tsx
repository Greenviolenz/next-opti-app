import clsx from 'clsx'

type Props = {
  variant?: 'body1' | 'body2' | 'caption'
  weight?: 'normal' | 'bold'
  className?: string
  children: React.ReactNode
}

const variantClass = {
  body1: 'text-body1',
  body2: 'text-body2',
  caption: 'text-caption',
}

const weightClass = {
  normal: 'font-[300]',
  bold: 'font-[500]',
}

const Text = ({
  variant = 'body1',
  className,
  children,
  weight = 'normal',
}: Props) => (
  <p
    className={clsx(
      'whitespace-pre-wrap',
      variantClass[variant],
      weightClass[weight],
      className
    )}
  >
    {children}
  </p>
)

export default Text
