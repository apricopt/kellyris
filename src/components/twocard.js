import React from "react";

// importing images
import img1 from "../images2/HERO/HOME PAGE/website/ottomons.jpg";
import img2 from "../images2/HERO/HOME PAGE/website/newarrivals0429.jpg";

function Twocard() {
  return (
    <div className="secondary-homepage-content">
      <div className="secondary-homepage-content-tile1">
        <div className="html-slot-container">
          <a href="/productsgallery">
            <img className="home-main" src={img1} alt="Fabric and Wallpaper" />
          </a>
        </div>
      </div>
      <div className="secondary-homepage-content-tile2">
        <div className="html-slot-container">
          <a href="/productsgallery">
            <img className="home-main" src={img2} alt="Tile" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Twocard;
