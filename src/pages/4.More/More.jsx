
import React from 'react'
import './More.css'

const More = ({view}) => {
  var hold, test;
  if (view === 'more') {
    test = true;
  } else {
    test = false;
  }
  hold = test;
  return (
    <div className={"page " + (hold ? (test ? 'fadeIn ' : 'fadeOut ') : 'hidden')}>
      <div className="Panel">
          <div className="pCard">
            <img src=""/>
            <h3>BattleShip</h3>
            <h5>DOM Manipulation based code</h5>
          </div>
          <div className="pCard">
            <img src=""/>
            <h3>Mixology App</h3>
            <h5>Express based App</h5>
          </div>
          <div className="pCard">
            <img src=""/>
            <h3>Marvel-Wiki</h3>
            <h5>MERN Stack App</h5>
          </div>
          <div className="pCard">
            <img src=""/>
            <h3>Indeed Scraper</h3>
            <h5>MERN Stack App</h5>
          </div>
      </div>
    </div>
    
  )
}

export default More