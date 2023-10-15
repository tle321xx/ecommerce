import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribr to our newsletter and stay updated</p>
        <div className="">
            <input type="email" placeholder='Enter your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter