
import React from 'react'


// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";


import Thestudionav from '../components/microcomponents/thestudionav'



import img1 from '../images2/HERO/HOME PAGE/about us/rawanheader.jpg'



function About() {
    return (
        <React.Fragment>
            <div id="wrapper" class="pt_customer-service">
            <Navmain />
             
		<div id="main" role="main" class="page-content clearfix page-world_of_kelly_biography">
			
			<div id="primary" class="primary-content">
				<section>
                <div class="content-asset">
                    <Thestudionav />



                    <div>
        <img className="main-image" src={img1}/>
        <div className="container">
          <div className="row">
            <div className="section flexslider image-container" id="generic-slider-with-nav">
              <ul className="slides">
                {/*<li><img class="main-image" src="https://www.kellywearstler.com/on/demandware.static/-/Sites-KellyWearstler-Library/default/v1595552959579/images/kelly_042018/kelly/kelly_hero.jpg" /></li>*/}
                <div className="main-image-text-container">
                  {/* <p className="main-image-text">
                    <span className="image-text-caps">“KELLY WEARSTLER’</span>s personal
                    <span className="image-text-caps-italic">STYLE, PRODUCT RANGES,</span>
                    <span className="image-text-italic">and</span>
                    <span className="image-text-caps">PRODUCTS</span> make her
                    <span className="image-text-italic">signature </span>
                    <span className="image-text-caps">INSTANTLY RECOGNIZABLE </span>
                    <span className="image-text-italic">and the </span>
                    <span className="image-text-caps">WOMAN </span>
                    <span className="image-text-caps">herself </span>a design
                    <span className="image-text-caps-italic">PHENOMENON.”</span><br />
                    <span className="main-image-text-quote">-VOGUE LIVING</span>
                  </p> */}
                </div>
              </ul>
            </div>
            <div className="clearfix" />
            <div className="row section">
              <div className="col-md-1 col-sm-1 col-xs-0" />
              <div className="col-md-10 col-sm-10 col-xs-12">
                <p className="sub-section-content-quote"><br />
                  "We turn ideas  <span className="sub-section-content-italic">into works </span> in of  <span className="sub-section-content-italic">constant evolution</span> art"											
                </p><br /></div>
              <div className="col-md-1 col-sm-1 col-xs-0" />
            </div>
            <div className="row section">
              <div className="col-md-3 col-sm-3 col-xs-0" />
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="center-text">
                  <div className="row section">
                    <p className="sub-section-content">
                    Rawan Alsahsah, Founder & Senior Designer brings her experience and graceful style, which has enabled her to create interiors that are sophisticated while remaining approachable and timeless. Rawan believes that interiors should naturally reflect the client personality. She has designed interiors throughout the Middle East and her clients are as diverse as their locations.
                    </p><br />
                    <p className="sub-section-content">
                    Rawan describes RIS designs as “functional, superior and elegant”. Rawan’s commitment to the environment is reflected by her creative Eco-Environmental designs.   
                    </p><br />
                    <p className="sub-section-content">
                    Her pledge in achieving a harmony between design and nature is primarily what led her to study Feng Shui. The practice of Feng Shui emphasizes the need for people to live in harmony with their environment. Feng Shui is a Chinese approach to interior design that has been practiced for thousands of years.
                    </p><br />
                    <p className="sub-section-content">
                    It is often characterized by a minimalist appearance, because of its emphasis on de-cluttering, but its principles are compatible with virtually any style of architecture or interior design.
                    </p><br />
                    <p className="sub-section-contentIG">
                      <a href="http://instagram.com/kellywearstler" target="_blank">Follow @risgroup on Instagram<br /><br /><img id="instagram-icon" src="../on/demandware.static/-/Sites-KellyWearstler-Library/default/v1595552959579/images/footer_social/footer-instagram.svg" alt="Visit Instagram" /></a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-0" />
            </div>
            <div className="clearfix" />
            <div id="instafeed" />
            <div id="pixlee_container" />
          </div>
        </div>
      </div>


                    </div>

                </section>


                </div>
                </div>

            </div>



<h1>i am the about rawan page</h1>
<Footer />
        </React.Fragment>
    )
}

export default About
