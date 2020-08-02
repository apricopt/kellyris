import React from "react";

// importing images here
import img1 from "../images2/HERO/HOME PAGE/website/uiu.jpg";
import img2 from "../images2/HERO/HOME PAGE/website/Un.jpg";
import img3 from "../images2/HERO/HOME PAGE/website/Unti.jpg";

function Threecards() {
  return (
    <div className="bottom-homepage-content">
      <div className="bottom-homepage-content-tile1">
        <div className="html-slot-container">
          <a href="/productsgallery">
            <img className="home-main" src={img1} alt="New Book" />
          </a>
        </div>
      </div>
      <div className="bottom-homepage-content-tile2">
        <div className="html-slot-container">
          <a href="/productsgallery">
            <img className="home-main" src={img2} alt="Home Decor" />
          </a>
        </div>
      </div>
      <div className="bottom-homepage-content-tile3">
        <div className="html-slot-container">
          <a href="/productsgallery">
            <img className="home-main" src={img3} alt="In Stock Furniture" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Threecards;
