import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio3.jpg'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio2.jpg'


//
const data = [
  {
    id: 1,
    image: IMG1,
    tiltle: 'Crypto Current Dashboard & Financial Visualization',
    github: 'https://github.com/bonifaze',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  }, 
  {
    id: 2,
    image: IMG2,
    tiltle: 'CHARTS TEMPLATES',
    github: 'https://github.com/bonifaze',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  }, 
  {
    id: 3,
    image: IMG3,
    tiltle: 'UI KIT FOR FIGMA',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  }, 
  {
    id: 4,
    image: IMG1,
    tiltle: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  }, 
  {
    id: 5,
    image: IMG2,
    tiltle: 'just for the sake of code',
    github: 'https://github.com',
    demo: 'https://admissions.veritas.edu.ng'
  }, 
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {/* <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
        <h3>This is a Portfolio item title</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/bonifaze" className='btn ' target='_blank'>Github</a>
        <a href="https://admissions.veritas.edu.ng" className='btn btn-primary' target='_blank'> Live Demo</a>
        </div>
        </article> */}
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn ' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'> Live Demo</a>
            </div>
            </article> 
            )
          }) 
        }
        </div>

    </section>
  )
}

export default Portfolio