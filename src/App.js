import React from "react";
//importing react-router for navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing styles here
import "./css/App.css";
import "./css/v1595552959579/css/style.css";
import "./css/v1595552959579/css/normalize.css";
// import "./css/v1595552959579/css/Kelly_Wearstler_._Com.css";
import "./css/v1595552959579/css/mobile-homepage.css";

import "./css/v1595552959579/images/favicon.ico";
import "./css/v1595552959579/fonts/Canela/1804-YSCJOE.css";
import "./css/v1595552959579/fonts/FuturaBaskerville/FuturaBaskerville.css";
import "./css/v1595552959579/css/style-responsive.css";
// import "./css/v1595552959579/css/flexslider.css"
import "./css/v1595552959579/lib/jquery/ui/jquery.ui.all.css";
import "./css/v1595552959579/lib/jquery/slick/slick.css";
import "./css/v1595552959579/lib/jquery/swiper/css/swiper.min.css";
import "./css/v1595552959579/lib/jquery/flyout/jquery.flyout.css";

// importing the views
import Home from "./views/home";
import Interiors from "./views/interiors";
import Thestudio from "./views/thestudio";
import Thestore from "./views/thestore";
import Thecafe from "./views/thecafe";
import About from "./views/about";
import Productsgallery from "./views/productsgallery";
import Productdetail from "./views/productdetail";
import Projectdetail from "./views/projectdetail"

import Underconstruction from "./views/underconstruction"

// importing subpages
import Residential from './views/residential'
import Commercial from './views/commercial'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/interiors"} exact component={Interiors}/>
          {/* interiors pages starts here */}
          <Route path={"/residential"} exact component={Residential} />
          <Route path={"/commercial"} exact component={Commercial} />

          <Route path={"/projectdetail"}  exact render={(props) => (
    <Projectdetail alpha="naha naha" number={"waha wah"}/>
  )} />
          

          {/* interior pages ends here */}
          <Route path={"/thestudio"} exact component={Thestudio}/>
          <Route path={"/thestore"} exact component={Thestore}/>
          <Route path={"/thecafe"} exact component={Thecafe}/>
          <Route path={"/about"} exact component={About}/>
          <Route path={"/productsgallery"} exact component={Productsgallery}/>
          <Route path={"/productdetail"} exact component={Productdetail}/>
          <Route path={"/underdevelopment"} exact component={Underconstruction}/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;