import React, { useEffect, useState } from 'react';
import './photo_display.css';
import Se_pic_2 from '../assets/Se_pic_2.png';
import Se_pic_3 from '../assets/Se_pic_3.png'; 
import Se_pic_4 from '../assets/Se_pic_4.png'; 
import Se_pic_5 from '../assets/Se_pic_5.png'; 
import Se_pic_6 from '../assets/Se_pic_6.png'; 
import Se_pic_7 from '../assets/Se_pic_7.png'; 
import Se_pic_8 from '../assets/Se_pic_8.png'; 
import Se_pic_9 from '../assets/Se_pic_9.png'; 


function PhotoDisplay() {
  const myArr = ['Mohith','Srinivas','Maheswari','Karthikeya','Harshini','Anoosha','Bhavana'] 
  // const [adminname, setadminname] = useState(myArr)
  // const handleadminname = () => {
  //   if (adminname == '') {
  //     setadminname('Mohith Chalamala')
  //   }
  // }
  // useEffect(() => {
  //   handleadminname()
  // }, [])
  return (
    <div className='photo-display-cont'>
      <div className='line-cont'></div>
      <div className='info-cont'>
        <span>WE BRING PHOTOGRAPHY<p>TO LIFE THROUGH</p>CONTESTS</span>
        <div className='photo-graphs-main-cont'>
          <div className='photo-graphs-cont'>
            <div className='img-cont'>
              <img className='Se_pic_2' src={Se_pic_2} alt="Photography Contest"></img> {/* Use the imported image */}
            </div>
            <div className='img-cont-info'>
              <p>{myArr[0]}</p>
              <p>29-04-2024</p>
            </div>
          </div>

          <div className='photo-graphs-cont p-g-c-2'>
            <div className='img-cont'>
              <img className='Se_pic_2' src={Se_pic_3} alt="Photography Contest"></img> {/* Use the imported image */}
            </div>
            <div className='img-cont-info'>
              <p>{myArr[1]}</p>
              <p>29-04-2024</p>
            </div>
          </div>

          <div className='photo-graphs-cont p-g-c-3'>
            <div className='img-cont'>
              <img className='Se_pic_2' src={Se_pic_4} alt="Photography Contest"></img> {/* Use the imported image */}
            </div>
            <div className='img-cont-info'>
              <p>{myArr[2]}</p>
              <p>29-04-2024</p>
            </div>
          </div>

          <div className='photo-graphs-cont p-g-c-4'>
            <div className='img-cont'>
              <img className='Se_pic_2' src={Se_pic_5} alt="Photography Contest"></img> {/* Use the imported image */}
            </div>
            <div className='img-cont-info'>
              <p>{myArr[3]}</p>
              <p>29-04-2024</p>
            </div>
          </div>
          
          <div className='photo-graphs-cont p-g-c-5'>
            <div className='img-cont'>
              <img style={{height:'60vh'}} className='Se_pic_2' src={Se_pic_6} alt="Photography Contest"></img> {/* Use the imported image */}
            </div>
            <div className='img-cont-info'>
              <p>{myArr[4]}</p>
              <p>29-04-2024</p>
            </div>
          </div>

          <div className='photo-graphs-cont p-g-c-6'>
            <div className='img-cont'>
              <img className='Se_pic_2' src={Se_pic_7} alt="Photography Contest"></img> {/* Use the imported image */}
            </div>
            <div className='img-cont-info'>
              <p>{myArr[5]}</p>
              <p>29-04-2024</p>
            </div>
          </div>

          <div className='photo-graphs-cont p-g-c-7'>
            <div className='img-cont'>
              <img className='Se_pic_2' src={Se_pic_8} alt="Photography Contest" style={{height:'90vh'}}></img> {/* Use the imported image */}
            </div>
            <div className='img-cont-info'>
              <p>{myArr[6]}</p>
              <p>29-04-2024</p>
            </div>
          </div>

          <div className='photo-graphs-cont p-g-c-8'>
            <div className='img-cont'>
              <img className='Se_pic_2' src={Se_pic_9} alt="Photography Contest" style={{height:'70vh'}}></img> {/* Use the imported image */}
            </div>
            <div className='img-cont-info'>
              <p>{myArr[0]}</p>
              <p>29-04-2024</p>
            </div>
          </div>

          <div className='photo-graphs-cont p-g-c-9'>
            <div className='img-cont'>
              <img className='Se_pic_2' src={Se_pic_5} alt="Photography Contest"  style={{height:'70vh'}}></img> {/* Use the imported image */}
            </div>
            <div className='img-cont-info'>
              <p>{myArr[1]}</p>
              <p>29-04-2024</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PhotoDisplay;
