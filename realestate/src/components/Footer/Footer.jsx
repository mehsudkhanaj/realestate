import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='f-wrapper'>
      <div className='paddings innerWidth flexCenter f-container'>
        {/* left */}
        <div className='flexColStart f-left'>
          <img src='./logo2.png' alt='' width={120} />
          <span className='secondaryText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            ipsam.
          </span>
        </div>
        {/* right side */}
        <div className='flexColStart f-right'>
          <span className='primaryText'>Information</span>
          <span className='secondaryText'>Gulberg2 Lahore Pakistan</span>
          <div className='flexCenter f-menu'>
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About us</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
