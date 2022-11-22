import React from 'react'
import './Experience.css'
import {BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Whats Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
                  <h4>HTML</h4>
                <small className='text_light'>Experienced</small>
                {/* <progress id="file" value="99" max="100"> </progress> */}
            </div>

          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
                <h4>React</h4>
                <small className='text_light'>Intermediate</small>
                {/* <progress  id="file" value="70" max="100"> </progress> */}
            </div>
          </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
           <div>
              <h4>JavaScript</h4>
                <small className='text_light'>Intermediate</small>
                {/* <progress id="file" value="79" max="100"> </progress> */}
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
           <div>
              <h4>Bootstrap</h4>
                <small className='text_light'>Experienced</small>
                {/* <progress id="file" value="95" max="100"> </progress> */}
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
                <h4>CSS</h4>
                <small className='text_light'>Experienced</small>
                {/* <progress id="file" value="80" max="100"> </progress> */}
            </div>
          </article>
          </div>
       </div>
       {/* END OF FRONTEND */}
      <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
                <h4>PHP</h4>
                <small className='text_light'>Experienced</small>
                {/* <progress id="file" value="99" max="100"> </progress> */}
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
                <h4>Laravel </h4>
                <small className='text_light'>Intermediate</small>
                {/* <progress id="file" value="50" max="100"> </progress> */}
            </div>
          </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
                <h4>Mysql</h4>
                <small className='text_light'>Intermediate</small>
                {/* <progress id="file" value="79" max="100"> </progress> */}
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
                <h4>Java</h4>
                <small className='text_light'>Experienced</small>
                {/* <progress id="file" value="95" max="100"> </progress> */}
            </div>
          </article>
       
          </div>
      </div>

      </div>
     </section>
  )
}

export default Experience