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
      <Header className="text-white" level="2">
        Om Optipharma
      </Header>

      <div className="flex gap-x-4 flex-col md:flex-row gap-y-4 md:gap-y-6 max-w-5xl self-center">
        <Text className="text-white flex-1">
          Optipharma ble etablert i 2010 og har siden den gang utviklet flere
          anerkjente produkter innen helsekost. Vi er en nøytral
          kontraktsprodusent og har derfor ikke egne varemerker. Etter 24 års
          erfaring i bransjen vet vi hva som skal til for å få et produkt ut på
          markedet. Vi er en kunnskapsrik, enkel og effektiv bedrift som
          utvikler og produserer næringsmidler og kosttilskudd for norske
          bedrifter. Vi ønsker å hjelpe våre kunder med deres ideer for å
          utvikle de beste produktene med tanke.
        </Text>

        <Text className="text-white flex-1">
          Smak er vår viktigste satsningsområdet. Et av våre viktigste fortrinn
          er at vi er norske. Vi kjenner kravene og regelverket til Mattilsynet
          og det norske markedet. Dette innebærer regler for produktene, merking
          og markedsføring. Vi følger reglene for HACCP (Hazard Analysis and
          Critical Control Point) som er fareanalyse, farevurdering eller
          risikoanalyse for en sikker produksjon. Vi kan også produsere
          økologiske produkter og er DEBIO sertifisert.
        </Text>
      </div>
    </RevealWrapper>
  </PageLayout>
)

export default AboutUs
