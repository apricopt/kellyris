import React from 'react'
import hero from '../images2/HERO/HOME PAGE/mobile upload/home mob.jpg'
import img1 from '../images2/HERO/HOME PAGE/mobile upload/d-4.jpg'
import img2 from '../images2/homecontent/newarrivals0429.jpg'
import img3 from '../images2/homecontent/seating0429.jpg'
import img4 from '../images2/homecontent/homedeco0429.jpg'
import img5 from '../images2/homecontent/instock0429.jpg'


function Homecontentmobile() {
    return (
        <div className="hide-tablet hide-desktop">
        <link rel="stylesheet" href="on/demandware.static/Sites-KellyWearstler-Site/-/default/v1595552959579/css/mobile-homepage.css" />
        <div className="mobile-homepage">
          {/* BEGIN .mobile-homepage */}
          <div className="account-cart-links clearfix">
            <div className="cart-link">
              {/* Report any requested source code */}
              {/* Report the active source code */}
              <span className="mobile-only"><a href="cart.html" title="View Cart" className="mini-cart-btn" /></span>
              <span className="hide-mobile"><a href="cart.html" title="View Cart">Cart</a></span>
            </div>
          </div>
          <div className="promo-slot">
            <div className="html-slot-container">
              <div className="content-asset">
                {/* dwMarker="content" dwContentID="bcJrwiaagOQjkaaadj24cO4cRL" dwContentName="Spring_Jewelery_Promo_20150202" */}
                <style dangerouslySetInnerHTML={{__html: "\n                                       .hero-mobile, .homepage-content { margin: 10px; }\n                                    " }} />
                <div className="hero-mobile">
                  <a href="hillcrest-residence/residences_detail_Hillcrest2.html"><img src={hero} alt="Hillcrest" /></a>
                </div>
                <div className="homepage-content">
                  <a href="ottomans-stools.html"><img src={img1} alt="Ottomans and Stools" /></a>
                </div>
                <div className="homepage-content">
                  <a href="new_furniture.html"><img src={img2} alt="New Arrivals" /></a>
                </div>
                <div className="homepage-content">
                  <a href="seating.html"><img src={img3} alt="Seating" /></a>
                </div>
                <div className="homepage-content">
                  <a href="home-accessories-collection-view-all.html"><img src={img4} alt="Home Decor" /></a>
                </div>
                <div className="homepage-content">
                  <a href="instockfurniture.html"><img src={img5} alt="In Stock" /></a>
                </div>
              </div>
              {/* End content-asset */}
            </div>
          </div>
        </div>
        {/* END .mobile-homepage */}
      </div>
    )
}

export default Homecontentmobile
