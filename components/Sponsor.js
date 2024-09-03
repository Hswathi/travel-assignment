import React from 'react'
import  sponsors1 from "../images/sponsors1.png";
import  sponsors2 from "../images/sponsors2.png";
import  sponsors3 from "../images/sponsors3.png";
import  sponsors4 from "../images/sponsors4.png";
import  sponsors5 from "../images/sponsors5.png";
import '../styles/sponsor.css';


const Sponsor = () => {
  return (
    <div  className='logo-main'>
        <img src={sponsors1} alt="" />
        <img src={sponsors2} alt="" />
        <img src={sponsors3} alt="" />
        <img src={sponsors4} alt="" />
        <img src={sponsors5} alt="" />

      
    </div>
  )
}

export default Sponsor;
