import Header from '@components/Header'
import PageLayout from '@components/PageLayout'
import Text from '@components/Text'
import { Service } from '@models/Category'
import clsx from 'clsx'
import { useIsMobile } from 'hooks/useIsMobile'
import { RevealWrapper } from 'next-reveal'
import { useState } from 'react'
import MobileServiceSection from './MobileServiceSection'
import ServiceNav from './ServiceNav'

type Props = { service: Service }

const isNumberEven = (number: number) => number % 2 == 0

const ServiceSection = ({ service }: Props) => {
  const isMobile = useIsMobile()
  const [selectedCategory, setSelectedCategory] = useState(
    service.subcategories[0]
  )
  const isEven = isNumberEven(service.priority)

  const bgColor = isEven ? 'bg-primaryLight' : 'bg-secondary'

  if (isMobile)
    return (
      <PageLayout
        id={service.title.toLowerCase()}
        className={clsx(['flex', bgColor])}
        wrapperClass="justify-center py-6 pb-12 overflow-y-hidden"
      >
        <MobileServiceSection service={service} />
      </PageLayout>
    )

  return (
    <PageLayout
      className={clsx(['flex', bgColor])}
      id={service.title.toLowerCase()}
      wrapperClass="justify-center py-6 overflow-y-hidden"
    >
      <RevealWrapper
        origin="bottom"
        className="flex flex-col gap-4 w-full max-w-6xl mt-[8%] px-8"
      >
        <Header
          level="2"
          className={clsx([
            'max-w-[300px] w-full text-center',
            isEven && 'self-end',
          ])}
        >
          {service.title}
        </Header>
        <div
          className={clsx(['flex w-full gap-4', isEven && 'flex-row-reverse'])}
        >
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden z-10">
            <img
              alt="kategori-bilde"
              src={selectedCategory.image}
              sizes="300px"
              width={300}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>

          <div className="flex-1 flex flex-col self-center -mt-10">
            <ServiceNav
              service={service}
              selectedCategory={selectedCategory}
              bgColor={bgColor}
              isEven={isEven}
              onChange={setSelectedCategory}
            />

            <div
              className={clsx([
                'w-auto bg-white bg-opacity-90 rounded-2xl min-h-[180px]',
                isEven ? '-mr-20 pr-20' : '-ml-20 pl-20',
                isEven &&
                  selectedCategory.title === service.subcategories[0].title &&
                  'rounded-tl-none',
              ])}
            >
              <Text className="p-4">{selectedCategory.content}</Text>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </PageLayout>
  )
}

export default ServiceSection
