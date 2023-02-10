import React from 'react'
import './Services.css'
import {ImCheckmark2} from 'react-icons/im'
const Services = () => {
  return (
    <section  id='services'>
      <h5>WHat I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Laravel</h3>
          </div>
          <ul className='service_list'>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Live App.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Designers.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>School App.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Blog.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX TAG  */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>School Portal.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Ecommerce.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Music App.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <pChat App.</p>
            </li>
          </ul>
        </article>
        {/* END OF WED DEV TAG  */}
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Motivation.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Comedy.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Songs.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Articles.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION TAG  */}
      </div>
    </section>
  )
}

export default Services 
