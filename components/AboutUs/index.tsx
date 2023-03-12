import Header from '@components/Header'
import PageLayout from '@components/PageLayout'
import Text from '@components/Text'
import background from 'public/pillsHand.png'
import { RevealWrapper } from 'next-reveal'

const AboutUs = () => (
  <PageLayout id="omoss" image={background} imageOverlay className="flex">
    <RevealWrapper
      origin="bottom"
      className="flex flex-col gap-16 text-center self-center w-full"
    >
      <Header className="text-white">Om Optipharma</Header>

      <div className="flex gap-x-4 gap-y-4 max-w-5xl flex-wrap self-center">
        <Text className="text-white">
          Optipharma ble etablert i 2010 og har siden den gang utviklet flere
          anerkjente produkter innen helsekost. Vi er en nøytral
          kontraktsprodusent og har derfor ikke egne varemerker. Etter 24 års
          erfaring i bransjen vet vi hva som skal til for å få et produkt ut på
          markedet. Vi er en kunnskapsrik, enkel og effektiv bedrift som
          utvikler og produserer næringsmidler og kosttilskudd for norske
          bedrifter. Vi ønsker å hjelpe våre kunder med deres ideer for å
          utvikle de beste produktene med tanke.
        </Text>

        {/* <Text className="text-white">
          Optipharma ble etablert i 2010 og har siden den gang utviklet flere
          anerkjente produkter innen helsekost. Vi er en nøytral
          kontraktsprodusent og har derfor ikke egne varemerker. Etter 24 års
          erfaring i bransjen vet vi hva som skal til for å få et produkt ut på
          markedet. Vi er en kunnskapsrik, enkel og effektiv bedrift som
          utvikler og produserer næringsmidler og kosttilskudd for norske
          bedrifter. Vi ønsker å hjelpe våre kunder med deres ideer for å
          utvikle de beste produktene med tanke.
        </Text> */}
      </div>
    </RevealWrapper>
  </PageLayout>
)

export default AboutUs
