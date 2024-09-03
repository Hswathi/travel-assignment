import React from 'react'
import '../styles/discover.css'
import  experience1 from "../images/experience1.jpg";
import  experience2 from "../images/experience2.jpg";
import video from '../videos/video.mp4';
const Dicover = () => {
  
  return (
    <div className='discover-main'>
        <h2 className='h22'>With Our Experience <br />
        We Will Serve You</h2>
        <div className='discover-para'>
          <p className='p1'> <b className='b1'>20</b> <br /> Year <br />Experience</p>
          <p className='p2'> <b className='b2'>75</b> <br /> Completebr <br /> tours</p>
          <p className='p3'><b className='b3'>650+</b> <br />Tourist <br />Destination</p>
          
        </div>  
        <div className='ims'>
               <img src={experience1} className='im1'  />
              <img src={experience2}  className='im2' />
        </div>
      <div video-main>
        <h2 className='videoh2'>Video Tour</h2>
        <p className='videopara'>Find out more with our video of the most beautiful and <br /> pleasant places for you and your family.</p>
        <video controls autostart autoPlay src={video} type="video/mp4" className='video' />

      </div>
    </div>
  )
}

export default Dicover;
