import React from 'react'

function Interiortile(props) {
    return (

        <div id className="interiors-tile">
        <a href={props.onPress}>
          <img src={props.image} />
          <div className="wrap-headline desktop-only">
            <div className="item-table">
              <h2 className="headline item-cell">{props.title}</h2>
            </div>
          </div>
          <h2 className="headline mobile-only">{props.titlemob}</h2>
          <div className="city mobile-only">{props.city}</div>
        </a>
      </div>

    )
}

export default Interiortile
