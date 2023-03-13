import Header from '@components/Header'
import IconGroup from '@components/IconGroup'
import Text from '@components/Text'
import IconBooks from 'Icons/IconBooks'
import IconDiploma from 'Icons/IconDiploma'
import IconFlag from 'Icons/IconFlag'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Overlay = () => (
  <div className="absolute h-screen w-full md:w-[500px] bg-primary right-0 top-0 overflow-hidden md:animate-slidein bg-opacity-90">
    <div className="flex flex-col justify-between h-full gap-6 p-8">
      <div className="flex flex-col gap-6">
        <Header level="1" className="text-white md:hidden">
          Optipharma
        </Header>

        <Header level="2" className="text-white">
          Produktutvikling av helsekost
        </Header>
        <Text className="text-white">
          Vi produserer markedsledende helskostprodukter for norske bedrifter.
          Vi hjelper deg fra idé til ferdig produkt.
        </Text>
        <div className="mt-[20%]">
          <Slide
            indicators={false}
            arrows={false}
            canSwipe={false}
            autoplay
            duration={1500}
            transitionDuration={600}
            easing="ease"
          >
            <IconGroup
              text="24 års erfaring"
              textWhite
              icon={<IconDiploma width="50px" className="fill-border" />}
            />
            <IconGroup
              text="Kunnskapsrik"
              textWhite
              icon={<IconBooks width="50px" className="fill-border" />}
            />
            <IconGroup
              text="Norskprodusert"
              textWhite
              icon={
                <span className="w-[70px] h-[70px] overflow-hidden rounded-full [&>svg]:-ml[15px]">
                  <IconFlag width="100px" />
                </span>
              }
            />
          </Slide>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Text className="text-white">Kontakt oss på:</Text>
        <div className="flex gap-4">
          <Text className="text-white">+47 997 41 300</Text>
          <Text className="text-white">anders@optipharma.no</Text>
        </div>
      </div>
    </div>
  </div>
)

export default Overlay
