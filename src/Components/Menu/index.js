import React from 'react'
import { HeaderDesk } from './HeaderDesk'
import { HeaderMobile } from './HeaderMobile'
import { useMediaQuery } from 'react-responsive'
import './header.scss'

export const Header = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <>
      {isTabletOrMobile ? (<HeaderMobile></HeaderMobile>) : (<HeaderDesk></HeaderDesk>)}
    </>
  )
}
