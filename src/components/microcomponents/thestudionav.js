import React from 'react'

import { NavLink } from 'react-router-dom'

function thestudionav() {
    return (
        <div className="refinement Home category-refinement">
        <ul id="category-level-1">
          <li>
            <NavLink exact to={"/thestudio"}>
              <span className="menu-font-italic">the</span>&nbsp;<span className="menu-font-caps">studio</span></NavLink>
          </li>
          <li>
         <NavLink exact to={"/thestore"}>
              <span className="menu-font-italic">the</span>&nbsp;<span className="menu-font-caps">store</span></NavLink>
          </li>
          {/*<li>
				<a class="refinement-link" href="https://www.kellywearstler.com/on/demandware.store/Sites-KellyWearstler-Site/default/Page-Show?cid=kw_projects">
					<span class="menu-font-italic">the</span>&nbsp;<span class="menu-font-caps">Projects</span></a>
				</a>
			</li>*/}
          <li>
           <NavLink exact to={"/thecafe"}>
              <span className="menu-font-italic">the</span>&nbsp;<span className="menu-font-caps">cafe</span></NavLink>
          </li>
          <li>
          <NavLink exact to={"/about"}>
              <span className="menu-font-italic">about</span>&nbsp;<span className="menu-font-caps">Rawan</span></NavLink>
          </li>
        </ul>
      </div>

        
    )
}

export default thestudionav
