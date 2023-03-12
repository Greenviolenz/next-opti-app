import { services } from '@data/services'
import ServiceSection from './ServiceSection'

const Services = () => (
  <>
    {services.map((service) => (
      <ServiceSection key={service.title} service={service} />
    ))}
  </>
)

export default Services
