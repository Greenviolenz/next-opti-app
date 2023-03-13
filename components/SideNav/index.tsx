import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import clsx from 'clsx'
import IconMenu from 'Icons/IconMenu'
import IconX from 'Icons/IconX'
import Text from '@components/Text'
import ScrollLink from '@components/ScrollLink'

const SideNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuIconVisible, setMenuIconVisible] = useState(true)
  const wrapperRef = useRef(null)

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
          'fixed z-10 bg-white md:rounded-br-lg maxmd:rounded-bl-lg maxmd:right-0',
          !menuIconVisible && 'shadow-md',
        ])}
      >
        <div className="flex flex-col items-center gap-4 p-2 border-br-lg">
          <ScrollLink
            className="z-30"
            href="/#hjem"
            onClick={handleClose}
            onClickEvent={handleClose}
          >
            <img src="/logosmall2.png" alt="logo" sizes="40px" width={40} />
          </ScrollLink>

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
          'fixed h-screen transition-all z-20 overflow-hidden shadow-md	bg-white maxmd:right-0',
          menuOpen ? 'w-[270px]' : 'w-0',
        ])}
        ref={wrapperRef}
      >
        <div className="relative flex flex-col">
          <div className="absolute top-2 md:right-2 maxmd:left-2">
            <Button onClick={handleClose} aria-label="">
              <IconX aria-label="close nav" />
            </Button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-20">
            <ScrollLink
              className="nav-item"
              href="/#omoss"
              onClickEvent={handleClose}
            >
              <Text variant="caption">Om oss</Text>
            </ScrollLink>
            <ScrollLink
              className="nav-item"
              href="/#produktutvikling"
              onClickEvent={handleClose}
            >
              <Text variant="caption">Produktutvikling</Text>
            </ScrollLink>
            <ScrollLink
              className="nav-item"
              href="/#produktgrupper"
              onClickEvent={handleClose}
            >
              <Text variant="caption">Produktgrupper</Text>
            </ScrollLink>
            <ScrollLink
              className="nav-item"
              href="/#forpakning"
              onClickEvent={handleClose}
            >
              <Text variant="caption">Forpakning</Text>
            </ScrollLink>
            <ScrollLink
              className="nav-item"
              href="/#kontakt"
              onClickEvent={handleClose}
            >
              <Text variant="caption">Kontakt</Text>
            </ScrollLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default SideNav
