
import React from 'react'



// importing microcomponents from here
import Interiornav from '../components/microcomponents/thestudionav';
import Thestudioslider from '../components/microcomponents/thestudioslider'


// importing sections here
import Footer from "../components/footer";
import Navmain from "../sections/navmain";
import Thestudiocontent from '../sections/thestudiocontent'


// importing the styles
 import '../css/thestudio.css';


function Thestudio() {
    return (
        <React.Fragment>

<div id="wrapper" class="pt_customer-service">
<Navmain />
<div id="main" role="main" class="page-content clearfix page-kw_studio_page">
<div id="primary" class="primary-content">
    <section>
    <div class="content-asset"> 
    <Interiornav />
    <div>
        <Thestudioslider />
        <Thestudiocontent />
        
    </div>

    
    
    
    </div>



    </section>



</div>



</div>

</div>

<Footer />
        </React.Fragment>
    )
}

export default Thestudio
