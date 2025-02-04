import React from 'react'
import './Newsletter.css'


const Newsletter = () => {
  return (
    <div className='Newsletter'>
        <div className="container">
            <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            <div className="newsform">
            <input type="email"  placeholder='Enter Your Email' className='Email' />
                <button className='NewsBtn'>Subscribe to Our Newsletter</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter