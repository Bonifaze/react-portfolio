import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {SiUpwork} from 'react-icons/si'

const HeaderSocials = () => {
  return (
   <div className='header_socials'>
   <a href="https://linkedin.com" target="_blank"><BsLinkedin /> </a>
   <a href="https://github.com" target="_blank"><BsGithub /> </a>
   <a href="https://facebook.com" target="_blank"> <BsFacebook /></a>
   <a href="https://twitter.com" target="_blank"> <BsTwitter/></a>
   <a href="https://upwork.com" target="_blank"> <SiUpwork /></a>
   </div>
  )
}

export default HeaderSocials