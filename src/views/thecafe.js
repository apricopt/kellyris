import React from "react";

// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";

import Interiornav from "../components/microcomponents/thestudionav";

function Thecafe() {
  return (
    <React.Fragment>
      <div id="wrapper" class="pt_customer-service">
        <Navmain />
        <div
          id="main"
          role="main"
          class="page-content clearfix page-kw_studio_page"
        >
          <div id="primary" class="primary-content">
            <section>
              <div class="content-asset">
                <Interiornav />
                <div>
                  <h1> i am the cafe page</h1>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Thecafe;
