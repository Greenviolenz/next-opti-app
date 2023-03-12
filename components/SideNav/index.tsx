import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import clsx from 'clsx'
import IconMenu from 'Icons/IconMenu'
import IconX from 'Icons/IconX'
import Link from 'next/link'
import Text from '@components/Text'

const SideNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuIconVisible, setMenuIconVisible] = useState(true)
  const wrapperRef = useRef(null)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault()
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: 'smooth',
    })

    handleClose()
  }

  useEffect(() => {
    /**
     * Close if clicked outside of nav
     */
    const handleClickOutside = (event: any) => {
      if (!menuOpen) return
      if (
        wrapperRef.current &&
        !(wrapperRef.current as any).contains(event.target)
      ) {
        handleClose()
        return
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef, menuOpen])

  const handleOpen = () => {
    setMenuOpen(true)
    setMenuIconVisible(false)
  }

  const handleClose = () => {
    if (!menuOpen) return
    setMenuOpen(false)
    setTimeout(() => {
      setMenuIconVisible(true)
    }, 100)
  }

  return (
    <>
      <div
        className={clsx([
          'fixed z-10 bg-white rounded-br-lg',
          !menuIconVisible && 'shadow-md',
        ])}
      >
        <div className="flex flex-col items-center gap-4 p-2 border-br-lg">
          <Link
            className="z-30"
            href="/#hjem"
            onClick={handleScroll}
            scroll={false}
          >
            <img src="/logosmall2.png" alt="logo" sizes="40px" width={40} />
          </Link>

          {menuIconVisible ? (
            <Button onClick={handleOpen}>
              <IconMenu
                width="30px"
                height="30px"
                className="stroke-[#5E5E5E]"
              />
            </Button>
          ) : (
            <span className="w-7 h-7" />
          )}
        </div>
      </div>

      <nav
        className={clsx([
          'fixed h-screen transition-all z-20 overflow-hidden shadow-md	bg-white',
          menuOpen ? 'w-[270px]' : 'w-0',
        ])}
        ref={wrapperRef}
      >
        <div className="relative flex flex-col">
          <div className="absolute top-2 right-2">
            <Button onClick={handleClose} aria-label="">
              <IconX aria-label="close nav" />
            </Button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-20">
            <Link
              className="nav-item"
              href="/#omoss"
              onClick={handleScroll}
              scroll={false}
            >
              <Text variant="caption">Om oss</Text>
            </Link>
            <Link
              className="nav-item"
              href="/#produktutvikling"
              onClick={handleScroll}
              scroll={false}
            >
              <Text variant="caption">Produktutvikling</Text>
            </Link>
            <Link
              className="nav-item"
              href="/#produktgrupper"
              onClick={handleScroll}
              scroll={false}
            >
              <Text variant="caption">Produktgrupper</Text>
            </Link>
            <Link
              className="nav-item"
              href="/#forpakning"
              onClick={handleScroll}
              scroll={false}
            >
              <Text variant="caption">Forpakning</Text>
            </Link>
            <Link
              className="nav-item"
              href="/#kontakt"
              onClick={handleScroll}
              scroll={false}
            >
              <Text variant="caption">Kontakt</Text>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default SideNav
