import Header from '@components/Header'
import IconGroup from '@components/IconGroup'
import Text from '@components/Text'
import { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  texts: string[]
}

const GridItem = ({ icon, title, texts }: Props) => (
  <div className="flex flex-col items-center text-center gap-4 md:gap-6">
    <IconGroup icon={icon} />
    <Header level="4" className="text-white">
      {title}
    </Header>
    {texts.map((text, i) => (
      <Text key={i} className="text-white" variant="body2">
        {text}
      </Text>
    ))}
  </div>
)

export default GridItem
