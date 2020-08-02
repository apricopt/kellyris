import React from 'react'

function NavBanner() {
    return (
      <header id="header-container" className="clearfix">
      <div className="header-banner">
      </div>
      <div className="menu-utility-user1" style={{float: 'left', fontSize: '14px'}}>
      </div>
      {/*  branding logo */}
      <div className="primary-logo2 desktop-only">
        <a title="Kelly Wearstler" href="home.html">
          <img src="on/demandware.static/Sites-KellyWearstler-Site/-/default/v1595552959579/images/KellyWearstlerLogo.jpg" alt="Kelly Wearstler" width="153px" height="61px" />  
        </a>
        <div id="account-menu" className="account-menu">
          <a title="Log-In" href="account.html">
            Account
          </a>
        </div>
      </div>
      <div className="primary-logo2 mobile-only">		 
        <a title="Kelly Wearstler" href="home.html">
          <img src="on/demandware.static/Sites-KellyWearstler-Site/-/default/v1595552959579/images/KellyWearstlerLogo.jpg" alt="Kelly Wearstler" width="75%" height="75%" />  
        </a>
      </div>


      
      {/*  utility user menu */}
      <div className="nav-toggle mobile-only">
        <i className="fas fa-bars" style={{color:"green"}} >Open</i>
        
      </div>




      <div className="mobile-header-search-container mobile-only">
        <div className="search-toggle">
          <i className="fa fa-search" />
        </div>
        <div className="mini-cart">
          {/* Report any requested source code */}
          {/* Report the active source code */}
          <span className="mobile-only"><a href="cart.html" title="View Cart" className="mini-cart-btn" /></span>
          <span className="hide-mobile"><a href="cart.html" title="View Cart">Cart</a></span>
        </div>
      </div>
      <div className="header-search hide-desktop hide-tablet">
        <form role="search" action="https://www.kellywearstler.com/search" method="get" name="simpleSearch">
          <fieldset>
            <legend className="visually-hidden">Search Catalog</legend>
            <label className="visually-hidden" htmlFor="q">Search</label>
            <input type="text" id="q" name="q" defaultValue />		
            <fieldset className="search-submit">
              <input type="submit" defaultValue />
            </fieldset>
          </fieldset>
        </form>
      </div>
      <div className="search-toggle-nonmob desktop-only">
        <i className="fa fa-search" />Search
      </div>
      <div className="header-search-expanded header-search-container desktop-only">
        <form role="search" action="https://www.kellywearstler.com/search" method="get" name="simpleSearch">
          <fieldset>
            <legend className="visually-hidden">Search Catalog</legend>
            <label className="visually-hidden" htmlFor="q">Search</label>
            <input type="text" id="q" name="q" defaultValue />		
            <fieldset className="search-submit">
              <input type="submit" defaultValue />
            </fieldset>
          </fieldset>
        </form>
      </div>
    </header>
       
    )
}

export default NavBanner
