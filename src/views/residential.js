import React from 'react'


// importing components here

import Interiortile from '../components/interiortile';


// importing sections here
import Navmain from "../sections/navmain";
import Footer from "../components/footer";





// importing images here
import img1 from "../images2/HERO/HOME PAGE/interior/residential/privatepalaceAMS/thumbnail.jpg"
import img2 from "../images2/HERO/HOME PAGE/interior/residential/privatepenthouseAMK/thumbnail.jpg"
import img3 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaABR/thumnail.jpg"
import img4 from "../images2/HERO/HOME PAGE/interior/residential/privatepenthouseSAK/thumnail.jpg"
import img5 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaAND/thumbnail.jpg"
import img6 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaDNS/thumbnail.jpg"
import img7 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaFRH/thumbnail.jpg"
import img8 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaFRR/thumbnail.jpg"
import img9 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaLAJ/thumbnail.jpg"
import img10 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaMMS/thmbnail.jpg"
import img11 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaNRK/thumbnail.jpg"
import img12 from "../images2/HERO/HOME PAGE/interior/residential/privatevillaRAJ/thumbnail.jpg"
import img13 from "../images2/HERO/HOME PAGE/interior/residential/risvilla/thumbnail.jpg"



function Residential() {
    return (
        <React.Fragment>
            <Navmain />
            


<div id="wrapper" class="pt_customer-service">

<div id="main" role="main" class="page-content clearfix page-interiors-residence">
			
			<div id="primary" class="primary-content">
				<section>
                <div class="content-asset">
                     <Interiortile image={img1} /> 
                     <Interiortile image={img2} /> 
                     <Interiortile image={img3} /> 
                     <Interiortile image={img4} /> 
                     <Interiortile image={img5} /> 
                     <Interiortile image={img6} /> 
                     <Interiortile image={img7} /> 
                     <Interiortile image={img8} /> 
                     <Interiortile image={img9} /> 
                     <Interiortile image={img10} /> 
                     <Interiortile image={img11} /> 
                     <Interiortile image={img12} /> 
                     <Interiortile image={img13} /> 

                    </div>




                </section>

                </div>
                </div>



</div>

<Footer />


        </React.Fragment>
        
    )
}

export default Residential
