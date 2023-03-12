import { Montserrat } from 'next/font/google'
import HomePage from '@components/HomePage'
import AboutUs from '@components/AboutUs'
import Services from '@components/Services'
import ContactUs from '@components/ContactUs'
import SideNav from '@components/SideNav'
import Cartoon from '@components/Cartoon'
import ScrollDown from '@components/ScrollDown'

const montserrat = Montserrat({
  subsets: ['cyrillic-ext'],
  variable: '--font-cyrillic-ext',
  weight: ['300', '500'],
})

export default function Home() {
  return (
    <main className={montserrat.className}>
      <SideNav />
      <HomePage />
      <Cartoon />
      <AboutUs />
      <Services />
      <ContactUs />
      {/* <ScrollDown /> */}
    </main>
  )
}
