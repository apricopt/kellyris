import React from "react";

import img1 from '../images2/HERO/HOME PAGE/website/main page.jpg'

function Hero() {
  return (
    <div className="hero">
      <div className="html-slot-container">
        <div className="content-asset">
          {/* dwMarker="content" dwContentID="bcbLAiaagu6iEaaadgMUwxmhLq" dwContentName="141001-homepage-hero" */}
          <a href="/interiors">
            <img
              src={img1}
              alt="Interior"
            />
          </a>
        </div>{" "}
        {/* End content-asset */}
      </div>
    </div>
  );
}

export default Hero;
