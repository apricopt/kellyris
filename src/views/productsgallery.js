
import React from 'react'


// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";
import Productsgallerynav from "../components/productsgallerynav";
import Producttile from '../components/microcomponents/producttile';



function Productgallery() {
    return (
        <React.Fragment>
            <div id="wrapper" class="pt_account">
            <Navmain />
            <div id="main" class="main">
                <Productsgallerynav />
                <div class="search-result-content">	
                <ul id="search-result-items" class="search-result-items tiles-container clearfix hide-compare ">

                <Producttile />
                <Producttile />
                <Producttile />
                <Producttile />
                <Producttile />
                <Producttile />



                </ul>
                
                </div>


            </div>


            </div>


<Footer />
        </React.Fragment>
    )
}

export default Productgallery
