import PageLayout from '@components/PageLayout'
import IconMap from 'Icons/IconMap'
import IconMapPin from 'Icons/IconMapPin'
import IconPhone from 'Icons/IconPhone'
import { RevealWrapper } from 'next-reveal'
import GridItem from './GridItem'

const ContactUs = () => (
  <PageLayout
    id="kontakt"
    className="bg-primary"
    wrapperClass="justify-center min-h-screen items-center"
  >
    <RevealWrapper
      origin="bottom"
      className="grid md:grid-cols-3 max-w-6xl gap-8 md:gap-12"
    >
      <GridItem
        icon={<IconMapPin width="40px" height="40px" />}
        title="Kom i kontakt"
        texts={[
          'Ønsker du et nytt produkt eller ønsker å endre/ forbedre ditt produkt innenfor helsekost, velvære produkter og næringsmidler, kontakt oss gjerne for en prat.',
          'Anders\nanders@optipharma.no\n+47 997 41 300',
          'Mari\nmari@optipharma.no\n+47 997 41 301',
        ]}
      />

      <GridItem
        icon={<IconPhone width="40px" height="40px" />}
        title="Adresse"
        texts={['Optipharma AS Hestehagen 2, 1448 Drøbak']}
      />

      <GridItem
        icon={<IconMap width="40px" height="40px" />}
        title="Veibeskrivelse"
        texts={[
          'Optipharma ligger i Drøbak ca. 35 km syd for Oslo.',
          'Fra Oslo: Kjør E18/E6 mot Svinesund. Sving av mot Drøbak etter Nordbytunellen. I rundkjøring nr 3 følg skilting mot Ås (Riksvei 152). Ta til venstre første avkjøring etter Amfi Drøbak City. Ta andre vei til høyre ned bakken. I midten av bakken tar du igjen til høyre. Vi holder til i bygningen til høyre.',
        ]}
      />
    </RevealWrapper>
  </PageLayout>
)

export default ContactUs
