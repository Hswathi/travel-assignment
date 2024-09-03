import React from "react";
import "../styles/video.css";
import video1 from "../videos/video.mp4";
function Video() {
  return (
    <div className="video-player">
      <h2 className="video-title">Video Tour</h2>

      <div class="video-container">
        <p>
          Find out more with our video of the most beautiful and pleasant places
          for you and your family.
        </p>

        <div class="video__content">
          <video id="video-file">
            <source src={video1} type="video/mp4" />
            YOur browser does not support video tag
          </video>
        </div>
      </div>
    </div>
  );
}

export default Video;
