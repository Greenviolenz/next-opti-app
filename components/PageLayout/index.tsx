import clsx from 'clsx'
// import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

type Props = {
  image?: string
  imageOverlay?: boolean
  id?: string
  className?: string
  wrapperClass?: string
  children?: ReactNode | ReactNode[]
}

const PageLayout = ({
  image,
  imageOverlay,
  id,
  className,
  children,
  wrapperClass,
}: Props) => (
  <div
    className={clsx(
      'min-h-screen w-full overflow-x-hidden',
      image && 'relative',
      className
    )}
    id={id}
  >
    {image && (
      <img
        src={image}
        alt="Bagrunnsbilde"
        // fill
        // priority
        // quality={80}
        className="object-cover z-0 pointer-events-none absolute w-screen h-screen"
        sizes="1500px"
        placeholder="blur"
      />
    )}

    {imageOverlay && (
      <div className="bg-primary absolute inset-0 bg-opacity-90" />
    )}

    <div className={clsx('p-4 flex w-full', image && 'relative', wrapperClass)}>
      {children}
    </div>
  </div>
)

export default PageLayout
