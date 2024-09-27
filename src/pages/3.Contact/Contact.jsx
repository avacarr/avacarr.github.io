import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = ({ nView, oView, setOView }) => {
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
    if (nView === 'contact') {
      setHold(true);
      setTest(true);
    } else if (oView === 'contact') {
      setTest(false);
      handleDelay();
    } else if (oView === '') {
      setHold(test);
    }
  }, [nView, oView, test, setOView]);

  return (
    <div className={"page " + (hold ? (test ? 'fadeIn ' : 'fadeOut ') : 'hidden')}>
      <div className="Panel">
        <a href="https://www.linkedin.com/in/alexandertcarr/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/avacarr" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="mailto:avacarr68@gmail.com">avacarr68@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;
