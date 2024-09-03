import React from 'react';
import "../styles/about.css";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";

function About() {
  return (
    <div className='about-page'>
        <div className="cointainer">
            <div className="data">
                <h2>More Information <br></br> About The Best Beaches</h2>
                <p>You can find the most beautiful and pleasant places at the best 
                    prices with special discounts, you choose the place we will guide you all the way to wait, get your 
                    place now.
                </p>
                <button id="btn">Reserve a place</button>
            </div>

             <div class="images">
                     <div class="left">
                         <img src={about1} alt="" id="about1" />
                     </div>

                    <div class="right">
                     <img src={about2} alt="" id="about2" />
                     </div>
                
            </div> 
        </div>
      
    </div>
  );
}

export default About;
