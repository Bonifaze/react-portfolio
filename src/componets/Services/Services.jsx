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
            <h3>UI/UX Design </h3>
          </div>
          <ul className='service_list'>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
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
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
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
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li> 
              <ImCheckmark2 className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION TAG  */}
      </div>
    </section>
  )
}

export default Services 