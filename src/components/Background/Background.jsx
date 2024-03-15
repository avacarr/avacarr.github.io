
import React from 'react';
import './Background.css';
import bgimg from '../../resources/Sand.jpg'

function Background() {

    return (
        <div className="background">
           <img className="background" alt={bgimg} src={bgimg}/>
        </div>
    );
}

export default Background