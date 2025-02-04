import React from 'react'
import './topcat.css'

const topcat = () => {
  return (
    <div className='top'>
        <div className="container">
        <h2>TOP SELLING</h2>
        <div className="product-card">
            <div className="card">
                <img src="products/product1.png" alt="" />
                <h4>T-SHIRT WITH TAPE DETAILS</h4>
                <div className="star">
                ★★★★☆
                </div>
                <div className="price">120$</div>
            </div>
            <div className="card">
                <img src="products/product2.png" alt="" />
                <h4>T-SHIRT WITH TAPE DETAILS</h4>
                <div className="star">
                ★★★★☆
                </div>
                <div className="price">120$</div>
            </div>
            <div className="card">
                <img src="products/product3.png" alt="" />
                <h4>T-SHIRT WITH TAPE DETAILS</h4>
                <div className="star">
                ★★★★☆
                </div>
                <div className="price">120$</div>
            </div>
            <div className="card">
                <img src="products/product4.png" alt="" />
                <h4>T-SHIRT WITH TAPE DETAILS</h4>
                <div className="star">
                ★★★★☆
                </div>
                <div className="price">120$</div>
            </div>
        </div>
        <button className='catBtn'>View All</button>
    </div>
    </div>
  )
}

export default topcat