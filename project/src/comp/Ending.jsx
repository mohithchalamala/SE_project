import React from 'react'
import './Ending.css'
import Se_pic_2 from '../assets/Se_pic_2.png';
import Se_pic_3 from '../assets/Se_pic_3.png';
import Se_pic_4 from '../assets/Se_pic_4.png';
import Se_pic_5 from '../assets/Se_pic_5.png';
import Se_pic_6 from '../assets/Se_pic_6.png';
import Se_pic_7 from '../assets/Se_pic_7.png';

function Ending() {
  return (
    <div className='ending-cont'>
      <div className='line-cont'></div>
      <div className='ending-title'>
        <p>CONTACT</p>
        <div className='email-sub-title-cont'>
          <div className='sub-title-cont'>
            <span className='sub-title'>LETS CREATE<h1>TOGETHER</h1></span>
          </div>
          <div className='email-cont'>
            <p>Email Us</p>
            <a href="mailto:mohith_chalamala@srmap.edu.in">mohith_chalamala@srmap.edu.in</a>
          </div>
          <div className='email-cont'>
            <p>Book a discovery call</p>
            <a href="mailto:maheswari_somu@srmap.edu.in">Go To Calendly</a>
          </div>
          <div className='email-cont'>
            <p>Join us in Instagram</p>
            <a href="mailto:@PIXCELSINDIA">@PIXCELSINDIA</a>
          </div>
        </div>
      </div>
      <div className='last-cont'>
        <div className='final-img-cont'>
          <img className='final-img-1' src={Se_pic_2} alt="Photography Contest"></img>
          <img className='final-img-2' src={Se_pic_3} alt="Photography Contest"></img>
          <img className='final-img-3' src={Se_pic_4} alt="Photography Contest"></img>
          <img className='final-img-4' src={Se_pic_5} alt="Photography Contest"></img>
          <img className='final-img-5' src={Se_pic_6} alt="Photography Contest"></img>
          <img className='final-img-6' src={Se_pic_7} alt="Photography Contest"></img>
        </div>
        <div className='contest-list-cont'>
          <p className='contest-list-bttn'>VIEW CONTESTS</p>
        </div>
        <h1 className='end-title'>PIXCELS</h1>
        <div className='line-cont'></div>
        <div className='social_media'>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-pinterest-p"></i>
        </div>
      </div>
    </div>
  )
}

export default Ending
