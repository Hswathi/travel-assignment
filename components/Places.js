import React from 'react'
import "../styles/places.css";
import place1 from "../images/place1.jpg";
import place2 from "../images/place2.jpg";
import place3 from "../images/place3.jpg";
import place4 from "../images/place4.jpg";
import place5 from "../images/place5.jpg";
function Places() {
  return (
    <div id="choose-places">
        <h2 className='place-title'>Choose Your Places</h2>
        <div className="choose">
      <div className="image-grid">
        {/* Image 1 with Text */}
        <div className="image-container">
          <img src={place1} alt="Place 1" className="place-image" />
          <div className="image-text">
            Bali<br />
            Indonesia<br />
            $2499
          </div>
        </div>
        {/* Image 2 with Text */}
        <div className="image-container">
          <img src={place2} alt="Place 2" className="place-image" />
          <div className="image-text">
            Bora Bora<br />
            Polinesia<br />
            $1599
          </div>
        </div>
        {/* Image 3 with Text */}
        <div className="image-container">
          <img src={place3} alt="Place 3" className="place-image" />
          <div className="image-text">
            Hawaii<br />
            EE.UU<br />
            $3499
          </div>
        </div>
        {/* Image 4 with Text */}
        <div className="image-container">
          <img src={place4} alt="Place 4" className="place-image" />
          <div className="image-text">
            Whitehaven<br />
            Australia<br />
            $2499
          </div>
        </div>
        {/* Image 5 with Text */}
        <div className="image-container">
          <img src={place5} alt="Place 5" className="place-image" />
          <div className="image-text">
           Hvar<br />
            Croacia<br />
            $1999
          </div>
        </div>
     </div>
     </div> 
    </div>
  )
}

export default Places
