import React from 'react'

import Header from './componets/Header/Header'
import Nav from './componets/Nav/Nav'
import About from './componets/About/About'
import Experience from './componets/Experience/Experience'
import Services from './componets/Services/Services'
import Portfolio from './componets/Portfolio/Portfolio'
import Testimonials from './componets/Testimonials/Testimonials'
import Contact from './componets/Contact/Contact'
import Footer from './componets/Footer/Footer'

const App = () => {
  return (
    <>
      <Header  />
      <Nav />
      <About  />
      <Experience />
      <Services  />
      <Portfolio />
      <Testimonials  />
      <Contact />
      <Footer  />
      
    </>
    
  )
}

export default App