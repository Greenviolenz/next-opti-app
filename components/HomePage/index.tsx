import Header from '@components/Header'
import PageLayout from '@components/PageLayout'
import Overlay from './Overlay'

const HomePage = () => (
  <PageLayout image="/frontpage-min.jpg" id="hjem">
    <Header primary className="pt-4 pl-16 hidden md:block">
      Optipharma
    </Header>

    <Overlay />
  </PageLayout>
)

export default HomePage
