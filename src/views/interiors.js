import React from "react";

// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";
import Interiorstable from '../sections/interiorstable'

function Interiors() {
  return (
    <React.Fragment>
      <Navmain />
      <div
        id="main"
        role="main"
        class="page-content clearfix page-interiors-portal"
      >
        <div id="primary" class="primary-content">
        <section>
        <div class="content-asset">
        <div id="projects-landing">
          <Interiorstable />
          </div>


          </div>

        </section>



        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Interiors;
