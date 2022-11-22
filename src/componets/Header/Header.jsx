import React from 'react'
import './Header.css'
import CTA from './CTA' 
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>CLINTON BONIFACE</h1>
        <h5 className="text-light">Full stack Developer</h5>
         <CTA  />
         <HeaderSocials />
         <div className="me">
          <img src={ME} alt="me" />
         </div>
         <a href="#contact" className='scroll_down'>SCROLL DOWN </a>
      </div>
    </header>
  )
}

export default Header