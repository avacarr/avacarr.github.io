
import {React} from 'react'
import './NavBar.css'
import icon from '../../resources/icon.png'

const tabStyle = {
    border: '5px solid rgba(0, 0, 0, 0.5)',


}

function NavBar() {
    return (
        <>
        <div className="nav">
        <img alt={icon} src={icon}/>
            <ul>
                <li style={tabStyle}><span>About</span></li>
                <li style={tabStyle}><span>Experience</span></li>
                <li style={tabStyle}><span>Contact</span></li>
                <li style={tabStyle}><span>More</span></li>
            </ul>
        </div>
        <div className="border"></div>
        </>
    );
}

export default NavBar