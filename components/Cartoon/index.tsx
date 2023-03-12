import Header from '@components/Header'
import PageLayout from '@components/PageLayout'
import { RevealWrapper } from 'next-reveal'

const Cartoon = () => (
  <PageLayout
    wrapperClass="justify-center min-h-screen items-center"
    className="bg-white"
  >
    <div className="flex flex-col h-full text-center max-w-4xl">
      <img src="/cartoon.png" alt="tegneserie" sizes="1000px" />
      <RevealWrapper origin="bottom">
        <Header level="2">Fra Ideutvikling til ferdig produkt</Header>
      </RevealWrapper>
    </div>
  </PageLayout>
)

export default Cartoon
