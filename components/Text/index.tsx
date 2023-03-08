import clsx from 'clsx'

type Props = {
  variant?: 'body1' | 'body2' | 'caption'
  className?: string
  children: React.ReactNode
}

const variantClass = {
  body1: 'text-body1',
  body2: 'text-body2',
  caption: 'text-caption',
}

const Text = ({ variant = 'body1', className, children }: Props) => (
  <p className={clsx('whitespace-pre-wrap', variantClass[variant], className)}>
    {children}
  </p>
)

export default Text
