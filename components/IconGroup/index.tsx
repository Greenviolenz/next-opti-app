import Text from '../Text'

type Props = {
  icon: React.ReactNode
  text?: string
  textWhite?: boolean
}

const IconGroup = ({ text, icon, textWhite }: Props) => (
  <div className="flex items-center gap-8">
    <span className="flex bg-white rounded-full items-center justify-center w-20 h-20">
      {icon}
    </span>
    {text && (
      <Text variant="caption" className={textWhite ? 'text-white' : undefined}>
        {text}
      </Text>
    )}
  </div>
)

export default IconGroup
