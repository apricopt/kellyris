import React from "react";

import { NavLink } from 'react-router-dom'


import img1 from "../images2/HERO/HOME PAGE/interior/commercial/commercialmain.jpg";
import img2 from "../images2/HERO/HOME PAGE/interior/residential/residentialmain.jpg";

function Interiorstable() {
  return (
    <table width="100%" cellSpacing={0} cellPadding={0}>
      <tbody>
        <tr>
          <td>
           <NavLink to={"/residential"} >
              <span className="press-portal-headline">
                <span className="item-table">
                  <span className="item-cell">Residential</span>
                </span>
              </span>
              <img
                alt=""
                src={img2}
              />
            </NavLink>
          </td>
          <td>
          <NavLink to={"/commercial"} >
              <span className="press-portal-headline">
                <span className="item-table">
                  <span className="item-cell">Commercial</span>
                </span>
              </span>
              <img
                alt=""
                src={img1}
              />
          </NavLink>
          </td>
          {/* <td>
				<a title="In Progress" href="https://www.kellywearstler.com/on/demandware.store/Sites-KellyWearstler-Site/default/Page-Show?cid=interiors-inprogress">
					<span class="press-portal-headline">
						<span class="item-table">
							<span class="item-cell">In Progress</span>
						</span>
					</span>
					<img alt="" src="https://www.kellywearstler.com/on/demandware.static/-/Sites-KellyWearstler-Library/default/v1595552959579/images/02_Interiors/portal/in-progress-new2.jpg"/>
				</a>
			</td> */}
        </tr>
      </tbody>
    </table>
  );
}

export default Interiorstable;
