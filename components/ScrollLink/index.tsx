import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren } from 'react'

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>
type Props = AnchorProps &
  LinkProps &
  PropsWithChildren & { onClickEvent?: () => void }

const ScrollLink = ({ children, onClickEvent, ...props }: Props) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    onClickEvent && onClickEvent()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  )
}

export default ScrollLink
