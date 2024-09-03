import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/home.css";
import home2 from "../images/home2.jpg";
function Home() {
  return (
    <div className="home-container">
      <div className="home-desc">
        <h1 id="home-desc-head">
          Explore the <br></br>Best <span id="home-span">Beautiful Beaches</span>
        </h1>
        <button id="explore">Explore</button>
        <div className="home-social-icons">
          <FontAwesomeIcon icon={faFacebookF} id="social"/>
          <FontAwesomeIcon icon={faTwitter} id="social"/>
          <FontAwesomeIcon icon={faInstagram} id="social"/>
        </div>
      </div>
      <div className="home-image">
        <div className="img-div">
          <div className="img-div-left">
            <p>5 places to visit</p>
            <p>More</p>
          </div>
          <div className="img-div-right">
            <img src={home2} alt="" id="home2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
