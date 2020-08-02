import React from "react";

import TopBlackBanner from "../components/topblackbanner";

import Hero from "../components/hero";
import Footer from "../components/footer";

// importing sections here
import Navmain from "../sections/navmain";
import Homecontentnormal from "../sections/homecontentnormal"
import Homecontentmobile from "../sections/homecontentmobile"


export default function Home() {
  return (
    <React.Fragment>
      <div className="homeBanner">
        <div className="html-slot-container">
          <TopBlackBanner />
          <div id="wrapper" class="pt_storefront">
            <Navmain />
            <div id="main" role="main">
              <Homecontentnormal />
              <Homecontentmobile />



              </div>
              <Footer />
            </div>
          </div>
        </div>
      
    </React.Fragment>
  );
}
