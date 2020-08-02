import React from 'react'

import img1 from "../../images2/kelly_042018/studio/Studio_Desktop1.jpg"

function Thestudioslider() {
    return (
        <div className="section flexslider" id="generic-slider-with-nav">
        <ul className="slides">
          <li><img className="main-image" src={img1} /></li>
         
        </ul>
      </div>
    )
}

export default Thestudioslider
