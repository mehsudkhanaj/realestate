import './Hero.css'
import CountUp from 'react-countup'
import { HiLocationMarker } from 'react-icons/hi'
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth hero-container flexCenter'>
        {/* left section */}
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className='orange-circle' />
            <h1>
              Discover <br /> Most Suitale <br /> Property
            </h1>
          </div>
          <div className='flexColStart hero-des'>
            <span className='secondaryText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, dignissimos?
            </span>
            <span className='secondaryText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className='flexCenter search-bar'>
            <HiLocationMarker color='blue' size={25} />
            <input type='text' />
            <button className='button'>Search</button>
          </div>
          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={8800} end={9000} duration={3} />
                <span>+</span>
              </span>
              
              <span className='secondaryText'>Premium Products</span>
            </div>
          
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={1950} end={2000} duration={3} />
                <span>+</span>
              </span>
              
              <span className='secondaryText'>Happy Customers</span>
            </div>
          
            <div className='flexColCenter stat'>
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              
              <span className='secondaryText'>Achievements</span>
            </div>
          </div>
        </div>
        {/* Right section */}
        <div className='felxCenter hero-right'>
          <div className='image-container'>
            <img src='./hero-image.png' alt='heroimage' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
