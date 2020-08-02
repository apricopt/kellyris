import React from "react";

import NavBanner from "../components/navbanner";
import Navigation from "../components/navigation";

function Navmain() {

  function openNav() {
     document.getElementById('navigation').style.display = "block";
    console.log("bava g mai hogya call")
  }

  return (
    <div id="header" role="banner">
   
      <Navigation  openNav={openNav}/>
    </div>
  );
}

export default Navmain;
