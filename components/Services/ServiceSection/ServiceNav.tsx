import Button from '@components/Button'
import { Service, ServiceCategory } from '@models/Category'
import clsx from 'clsx'

type Props = {
  service: Service
  selectedCategory: ServiceCategory
  bgColor: string
  isEven: boolean
  onChange: (category: ServiceCategory) => void
}

const ServiceNav = ({
  service,
  selectedCategory,
  bgColor,
  isEven,
  onChange,
}: Props) => (
  <div className="flex gap-2 h-10">
    {service.subcategories.map((subcategory, i) => (
      <Button
        key={subcategory.title}
        onClick={() => onChange(subcategory)}
        className={clsx([
          'p-2 relative text-body2',
          selectedCategory.title === subcategory.title &&
            'bg-white bg-opacity-90 rounded-t-lg font-[500]',
        ])}
      >
        {subcategory.title}

        {/* Rounded corners outside button */}
        {selectedCategory.title === subcategory.title && (
          <>
            {(!isEven || i !== 0) && (
              <div className="h-4 w-4 bg-white bg-opacity-90 absolute -left-4 bottom-0">
                <div className={`${bgColor} h-4 w-4 rounded-br-lg`}></div>
              </div>
            )}
            <div className="h-4 w-4 bg-white bg-opacity-90 absolute -right-4 bottom-0">
              <div className={`${bgColor} h-4 w-4 rounded-bl-lg`}></div>
            </div>
          </>
        )}
      </Button>
    ))}
  </div>
)

export default ServiceNav
