import React, { useEffect, useState } from 'react';
import './Experience.css';

const Experience = ({ nView, oView, setOView }) => {
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
    if (nView === 'experience') {
      setHold(true);
      setTest(true);
    } else if (oView === 'experience') {
      setTest(false);
      handleDelay();
    } else if (oView === '') {
      setHold(test);
    }
  }, [nView, oView, test, setOView]);

  return (
    <div className={"page " + (hold ? (test ? 'fadeIn ' : 'fadeOut ') : 'hidden')}>
      <div className="Panel">
        <h2>Constant Learning</h2>
        <h2>Attention to Detail</h2>
        <h2>Helping Others</h2>
        <h2>Creative Solutions</h2>
      </div>
    </div>
  );
};

export default Experience;
