import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import frontpage from '../public/frontpage.jpg'
import Link from 'next/link'
import HomePage from '@components/HomePage'
import AboutUs from '@components/AboutUs'
import Development from '@components/Development'
import ContactUs from '@components/ContactUs'
import SideNav from '@components/SideNav'
import sal from 'sal.js'
import Cartoon from '@components/Cartoon'

const montserrat = Montserrat({
  subsets: ['cyrillic-ext'],
  variable: '--font-cyrillic-ext',
  weight: '300',
})

export default function Home() {
  sal()
  return (
    <main className={montserrat.className}>
      <SideNav />
      <HomePage />
      <Cartoon />
      <AboutUs />
      <Development />
      <ContactUs />
    </main>
  )
}
