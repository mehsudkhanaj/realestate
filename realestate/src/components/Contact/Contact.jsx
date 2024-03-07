import React from 'react'
import './Contact.css'
import { IoMdCall } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { FcVideoCall } from "react-icons/fc";
const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        {/* left */}
        <div className='flexColStart c-left'>
          <span className='orangeText'>Our Contact</span>
          <span className='primaryText'>Easy to Contact</span>
          <span className='secondaryText'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, itaque.
          </span>
          <div className='flexCOlStart contactModes'>
            {/* first row */}
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <IoMdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>0092 3029015909</span>
                    
                  </div>
                  </div>
                  <div className="flexCenter button">
                    CallNow

                  </div>
                
              </div>

              {/* second mode */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <CiChat1 size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>0092 3029015909</span>
                    
                  </div>
                  </div>
                  <div className="flexCenter button">
                    ChatNow

                  </div>
                
              </div>

              {/*  */}
            </div>

            {/* second row */}
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <FcVideoCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>0092 3029015909</span>
                    
                  </div>
                  </div>
                  <div className="flexCenter button">
                    VideoCall

                  </div>
                
              </div>

              {/* second mode */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <CiChat1 size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>0092 3029015909</span>
                    
                  </div>
                  </div>
                  <div className="flexCenter button">
                    Message

                  </div>
                
              </div>

              {/*  */}
            </div>
          </div>
        </div>

        {/* right */}
        <div className='c-right'>
          <img src='./contact.jpg' alt='' className='image-container' />
          
        </div>
      </div>
    </section>
  )
}

export default Contact
