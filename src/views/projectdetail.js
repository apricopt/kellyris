import React from "react";

import saraData from "../Localdata/residentialprojects";

// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";

// importing images here

import img2 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/mobile/title.jpg";

import img3 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/screen-1.jpg";

import slide1 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/slide1.jpg";

import img4 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/screen-3.jpg";

import img5 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/screen-4.jpg";

import img6 from "../images2/02_Interiors/detail_pages/residences/hillcrest2/screen-5.jpg";

function Projectdetail(props) {
    const Data = saraData[0];
  return (
    <React.Fragment>
      <div id="wrapper" className="pt_project">
        <Navmain />
        <div id="main" role="main" class="full-width clearfix">
          <div id="primary" class="primary-content">
            <div class="content-asset">
              <div class="project-detail-page">
                {/* #TODO  section 1 */}
                <div id="project-title" className="desktop-only">
                  <img src={Data.header} />

                  <div className="project-inner-item">
                    <div className="item-table">
                      <div className="item-cell">
  <div style={{ color: "null" }}>{Data.headertitle}</div>
                        <p style={{ color: "null" }}></p>
                        <p style={{ color: "null" }}>
                          location: {Data.headerLocation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* #TODO section 1 ends */}

                {/* #TODO section 1 mobile */}

                <div id="project-title" className="mobile-only">
                  <img src={img2} alt="Hillcrest Residence" />
                  <div className="project-inner-item">
                    <div className="item-table">
                      <div className="item-cell">
                        <div>Hillcrest Residence</div>
                        <p>project: Residence</p>
                        <p>location: Beverly Hills, CA</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* #TODO section 1 mobile ends */}

                {/* #TODO section 3 starts  */}

                <div className="contentbody">
                  <div className="section1">
                    <table
                      className="project-item-table"
                      cellSpacing={0}
                      cellPadding={0}
                    >
                      <tbody>
                        <tr>
                          <td width="63%">
                            <img src={Data.img1} alt={Data.headertitle} />
                          </td>
                          <td>
                            <div className="project-desc">
                              <p>{Data.text1}</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="section2">
                    <div className="flexslider" id="project-slider">
                      <ul className="slides">
                        <li>
                          <img src={Data.slider1} alt={Data.headertitle} />
                        </li>
                        <li>
                          <img
                            src="../on/demandware.static/-/Sites-KellyWearstler-Library/default/v1595552959579/images/02_Interiors/detail_pages/residences/hillcrest2/slide2.jpg"
                            alt={Data.headertitle}
                          />
                        </li>
                        <li>
                          <img
                            src="../on/demandware.static/-/Sites-KellyWearstler-Library/default/v1595552959579/images/02_Interiors/detail_pages/residences/hillcrest2/slide3.jpg"
                            alt={Data.headertitle}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="section3">
                    <table
                      className="project-item-table"
                      cellSpacing={0}
                      cellPadding={0}
                    >
                      <tbody>
                        <tr>
                          <td className="section2">
                            <div className="project-desc">
                              <p>
                                The two-story 1934 James Dolena architectural
                                masterpiece retains many original, refined
                                details, from the intricate Georgian,
                                Neoclassical and Regency moldings, to the
                                handsome marble bathrooms and even the solid,
                                Boiserie paneled doors. The house surrounds an
                                internal courtyard that can be seen from almost
                                every room in the home.
                              </p>
                            </div>
                          </td>
                          <td width="44%">
                            <img src={Data.img2} alt={Data.headertitle} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="section4">
                    <div className="project-frame">
                      <img src={img5} alt={Data.headertitle} />
                    </div>
                  </div>
                  <div className="section5">
                    <table
                      className="project-item-table"
                      width="100%"
                      cellSpacing={0}
                      cellPadding={0}
                    >
                      <tbody>
                        <tr>
                          <td style={{ padding: "15px 0 15px 15px" }}>
                            <img src={img6} alt="hillcrest2" />
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <div className="project-desc">
                              <div className="item-table">
                                <div className="item-cell">
                                  <p>
                                    The interiors remain true to Wearstler’s
                                    belief in mixing styles, eras and mediums,
                                    bringing together the stars of the past with
                                    today’s emerging artists to create
                                    environments - indoors and out - that are at
                                    once inviting, comfortable and evocative.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* #TODO section 3 ends */}
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projectdetail;
