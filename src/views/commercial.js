import React from "react";

// importing components here

import Interiortile from "../components/interiortile";

// importing sections here
import Navmain from "../sections/navmain";
import Footer from "../components/footer";

// importing images here
import img1 from "../images2/HERO/HOME PAGE/interior/commercial/maghribidentalclinic/thumbnail.jpg";
import img2 from "../images2/HERO/HOME PAGE/interior/commercial/ministryofforeignexchange/thumbnail.jpg";
import img3 from "../images2/HERO/HOME PAGE/interior/commercial/toshibaheadquater/thumbnail.jpg";




function Commercial() {
  return (
    <React.Fragment>
      <Navmain />

      <div id="wrapper" class="pt_customer-service">
        <div
          id="main"
          role="main"
          class="page-content clearfix page-interiors-residence"
        >
          <div id="primary" class="primary-content">
            <section>
              <div class="content-asset">
                <Interiortile image={img1} />
                <Interiortile image={img2} />
                <Interiortile image={img3} />
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Commercial;
