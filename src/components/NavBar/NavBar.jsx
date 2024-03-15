
import {React, useState, useEffect} from 'react'
import './NavBar.css'
import icon from '../../resources/icon_new.png'

const delayTime = 1200;

const NavBar = ({setView}) => {
    const [nav1Beam, set1navBeam] = useState(false)
    const [nav2Beam, set2navBeam] = useState(false)
    const [nav3Beam, set3navBeam] = useState(false)
    const [nav4Beam, set4navBeam] = useState(false)

    useEffect(() => {
      beamWave()
    },[])

    const delay = async (ms) => {
      return new Promise((resolve) => 
          setTimeout(resolve, ms));
  };

    const handleClick = (page) => {
      console.log("Request page: ", page);
      setView(page);
    }

    const beamWave = async () => {
      set1navBeam(true);
      // set2navBeam(true);
      // set3navBeam(true);
      // set4navBeam(true);
      await delay(delayTime);
      set1navBeam(false);
      set2navBeam(true);
      await delay(delayTime);
      set2navBeam(false);
      set3navBeam(true);
      await delay(delayTime);  
      set3navBeam(false);
      set4navBeam(true);
      await delay(delayTime);
      set4navBeam(false);
    }
    
    return (
        <>
        <div className="navbar">
        <img alt={icon} src={icon}/>
            <ul>
                <li>
                  <button onMouseEnter={() => {set1navBeam(true)}} onMouseLeave={() => {set1navBeam(false)}} onClick={() => {handleClick('about')}}>About</button>
                </li>
                <div id={"about"} className={"about navItemBorder " + (nav1Beam ? 'open' : 'closed')}>
                  <h2>About</h2>
                </div>
                <li>
                  <button onMouseEnter={() => {set2navBeam(true)}} onMouseLeave={() => {set2navBeam(false)}} onClick={() => {handleClick('experience')}}>Experience</button>
                </li>
                <div id={"experience"} className={"experience navItemBorder " + (nav2Beam ? 'open' : 'closed')}>
                  <h2>Experience</h2>
                </div>
                <li>
                  <button onMouseEnter={() => {set3navBeam(true)}} onMouseLeave={() => {set3navBeam(false)}} onClick={() => {handleClick('contact')}}>Contact</button>
                </li>
                <div id={"contact"} className={"contact navItemBorder " + (nav3Beam ? 'open' : 'closed')}>
                  <h2>Contact</h2>
                </div>
                <li>
                  <button onMouseEnter={() => {set4navBeam(true)}} onMouseLeave={() => {set4navBeam(false)}} onClick={() => {handleClick('more')}}>More</button>
                </li>
                <div id={"more"} className={"more navItemBorder " + (nav4Beam ? 'open' : 'closed')}>
                  <h2>More</h2>
                </div>
            </ul>
        </div>
        <div className="border"></div>
        </>
    );
}

export default NavBar