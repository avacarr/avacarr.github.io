
import React from 'react'
import './NavBar.css'

function NavBar() {
    const handleNav = (id) => {
        var el = document.getElementsByClassName(id)
        console.log(el);
    }
    return (
        <div className="nav">
            <ul>
                <li className="navHide">About</li>
                <li className="navHide">Experience</li>
                <li className="navHide">Contact</li>
                <li className="navHide">More</li>
            </ul>
        </div>
    );
}

export default NavBar