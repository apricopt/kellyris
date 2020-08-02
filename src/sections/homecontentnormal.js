import React from 'react'


import Hero from '../components/hero'
import Twocards from '../components/twocard'
import Threecards from '../components/threecards'

function Homecontentnormal() {
    return (
        <div id="home-content" className="hide-mobile">
<Hero />
<Twocards />
<Threecards />



        </div>
    )
}

export default Homecontentnormal
