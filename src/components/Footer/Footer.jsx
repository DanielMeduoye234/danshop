import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
   
    <div className='Footer'>
        <div className="container">
            <div className="column-right">
                <div className="logo">
                <Link to='/'><h2>DANSHOP</h2></Link>
                </div>
                <h4>We have clothes that suits your style and which you’re proud to wear. From women to men.</h4>
                <div className="socials">
                    <img src="./1.png" alt="" />
                    <img src="./2.png" alt="" />
                    <img src="./3.png" alt="" />
                    <img src="./4.png" alt="" />
                </div>
            </div>
            <div className="column">
                <h3>COMPANY</h3>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Careers</p>
            </div>
            <div className="column">
            <h3>HELP</h3>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Careers</p>
            </div>
            <div className="column">
            <h3>FAQ</h3>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Careers</p>
            </div>
            <div className="column">
            <h3>RESOURCES</h3>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Careers</p>
            </div>
        </div>
    </div>
  )
}

export default Footer