import React from 'react'
import './hero.css'
import Logos from '../Logos/logos'
import { Link } from 'react-router-dom'


const hero = () => {




  return (
    <div className='hero-section'>
        <div className="container">
            <div className="hero-text">
                <h1 className='animated-text'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <Link to="./shop">
                  <button className="herobtn">Shop Now</button>
                </Link>
            </div>
            <div className="hero-img">
  <img src="./heri.png" alt="hero image" className="animated-image" />
</div>
  
        </div>
        <Logos />
    </div>
  )
}

export default hero