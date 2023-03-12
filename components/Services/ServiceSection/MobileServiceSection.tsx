import Header from '@components/Header'
import Text from '@components/Text'
import { Service } from '@models/Category'
import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'

type Props = { service: Service }

const MobileServiceSection = ({ service }: Props) => (
  <div className="flex flex-col gap-8 w-full mt-6">
    <Header level="2">{service.title}</Header>

    {service.subcategories.map((category) => (
      <RevealWrapper
        key={category.title}
        origin="bottom"
        className="w-full bg-white bg-opacity-90 rounded-2xl p-6 flex flex-col gap-4"
      >
        <Header level="4" weight="bold">
          {category.title}
        </Header>

        <Text className="">{category.content}</Text>

        <div className="w-[200px] h-[200px] rounded-full overflow-hidden self-center">
          <Image
            alt="kategori-bilde"
            src={category.image}
            sizes="200px"
            width={200}
            height={200}
            className="object-cover h-full w-full"
          />
        </div>
      </RevealWrapper>
    ))}
  </div>
)

export default MobileServiceSection
