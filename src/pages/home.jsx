import React from 'react'
import Hero from '../components/Hero/hero'
import Category from '../components/Category/cat'
// import Top from '../components/Topcategory/topcat'
import Grid from '../components/CategoryGrid/catgrid'
import Testimonial from '../components/Happy/happy'
import Newsletter from '../components/Newsletter/Newsletter'





const home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Grid />
      <Testimonial />
      <Newsletter />
    </div>
  )
}

export default home