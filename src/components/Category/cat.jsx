import React from 'react'
import './cat.css'
import { Link } from 'react-router-dom'


const cat = () => {
  return (
    <div className='category'>
        <div className="container">
            <h2>OUR PRODUCT OFFERINGS</h2>
            <div className="product-card">
                <div className="card">
                    <img src="products/product11.png" alt="" />
                    <h4>HOODIES</h4>
                    <div className="star">
                    
                    </div>
                </div>
                <div className="card">
                    <img src="products/product6.png" alt="" />
                    <h4>CASUAL T-SHIRTS</h4>
                    <div className="star">
                    
                    </div>
                </div>
                <div className="card">
                    <img src="products/product7.png" alt="" />
                    <h4>SHORTS WEARS</h4>
                    <div className="star">
                    
                    </div>
                </div>
                <div className="card">
                    <img src="products/product8.png" alt="" />
                    <h4>FORMAL WEARS</h4>
                    <div className="star">
                    
                    </div>
                </div>
            </div>
           <Link to='/shop'> <button  className='catBtn'>View All Products</button></Link>
        </div>
    </div>
  )
}

export default cat