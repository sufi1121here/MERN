import React, { useEffect } from 'react'
import '../CSS/Home.css'

const Home = () => {
  
  return (
    <div className="hero">
        <div className="hero-content">
            <h1 className='hero-text'>Book Shop</h1>
            <p className='hero-description'>
                Browser the collection of our best top interesting books.
                You will definitely find what you are looking for.
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home