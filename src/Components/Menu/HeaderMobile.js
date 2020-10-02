import React from 'react'

import './header-mb.scss'
import { BurgerButton } from './BurgerButton'
import { RightBar } from './RightBar'
export const HeaderMobile = (props) => {
  const [openRight, setOpenRight] = React.useState(false)

  const handleOpen = () => {
    if (openRight) {
      setOpenRight(false)
    } else {
      setOpenRight(true)
    }
  }

  return (
    <>
      <div className="header-mb">
        <div className="header-mb-img-container">
          <img src="/img/logo.png" alt="logo"></img>
        </div>

        <button onClick={handleOpen}>
          <BurgerButton />
        </button>
        <div>
          <RightBar handleOpen={handleOpen} open={openRight} />
        </div>
      </div>

    </>
  )
}
