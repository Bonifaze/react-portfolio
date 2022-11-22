import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram}from 'react-icons/fi'
import {IoLogoTwitter}from 'react-icons/io'

const Footer = () => {
  return (
    <footer >
      <a href="" className='footer_logo'>CLINTON</a>
      <ul className='permalinks'>
      <li> <a href="#">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Experience</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">Portfolio</a></li>
      <li><a href="">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com/clintonfaze"><FaFacebook/></a>
        <a href="https://instagram/clintonfaze"><FiInstagram/></a>
        <a href="https://twitter/clintonfaze"><IoLogoTwitter/></a>
      
      </div>
      <div className="footer_copyright">
        <small>&copy; Clintonfaze Porfolio. All right Reserved 2022 version 1.0</small>
      </div>
    </footer>
  )
}

export default Footer