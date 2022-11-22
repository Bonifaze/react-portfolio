import React from 'react'
import './Testimonials.css' 
import AVT1 from '../../assets/ta1.jpg'
import AVT2 from '../../assets/ta2.jpg'
import AVT3 from '../../assets/ta3.jpg'

import { Pagination} from 'swiper';
import{ Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
  avatar: AVT1,
  name: 'Tina Snow',
  review: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis epudiandae magni quasi distinctio! Laudantium, impedit! Veniam beatae repellat consectetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, accusamus'
  

  },
  {
    avatar: AVT2,
    name: 'Michael',
    review: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis epudiandae magni quasi distinctio! Laudantium, impedit! Veniam beatae repellat consectetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, accusamus'
    
  
    },
  {
    avatar: AVT3,
    name: 'Cinton bbb',
    review: '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis epudiandae magni quasi distinctio! Laudantium, impedit! Veniam beatae repellat consectetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, accusamus'
  },
  {
    avatar: AVT3,
    name: 'Cinton bbb',
    review: '5Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis epudiandae magni quasi distinctio! Laudantium, impedit! Veniam beatae repellat consectetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, accusamus'
  },
  {
    avatar: AVT3,
    name: 'Cinton bbb',
    review: '6Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis epudiandae magni quasi distinctio! Laudantium, impedit! Veniam beatae repellat consectetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, accusamus'
  },
]
const Testimonials = () => { 
  return (
    

    
      <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
       // install Swiper modules
      modules={[ Pagination]}
      navigation
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
    >
      
      {/* pagination={{ clickable: true }} */}
      
      {
        data.map(({avatar, name, review}, index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt="avatar for client" />
            </div>
            <h5 className='client_name'>{name} </h5>
              <small className='client_review'>{review} </small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials