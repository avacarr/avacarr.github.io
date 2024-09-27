import React, { useEffect, useState } from 'react';
import './More.css';

const More = ({ nView, oView, setOView }) => {
  const [hold, setHold] = useState(false);
  const [test, setTest] = useState(false);

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleDelay = async () => {
    await delay(1500);
    setOView('');
  };

  useEffect(() => {
    if (nView === 'more') {
      setHold(true);
      setTest(true);
    } else if (oView === 'more') {
      setTest(false);
      handleDelay();
    } else if (oView === '') {
      setHold(test);
    }
  }, [nView, oView, test, setOView]);

  return (
    <div className={"page " + (hold ? (test ? 'fadeIn ' : 'fadeOut ') : 'hidden')}>
      <div className="Panel">
        <div className="pCard">
          <img src="" alt="Project 1" />
          <h3>BattleShip</h3>
          <h5>DOM Manipulation based code</h5>
        </div>
        <div className="pCard">
          <img src="" alt="Project 2" />
          <h3>Mixology App</h3>
          <h5>Express based App</h5>
        </div>
        <div className="pCard">
          <img src="" alt="Project 3" />
          <h3>Marvel-Wiki</h3>
          <h5>MERN Stack App</h5>
        </div>
        <div className="pCard">
          <img src="" alt="Project 4" />
          <h3>Indeed Scraper</h3>
          <h5>MERN Stack App</h5>
        </div>
      </div>
    </div>
  );
};

export default More;
