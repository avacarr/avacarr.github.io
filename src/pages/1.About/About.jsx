import React, { useEffect, useState } from 'react';
import personalPic from '../../resources/personalPic.jpg'
import { simulateTyping } from './About.js';
import './About.css';


const string1 = [
  'Constant Achiever',
  'Analytical Thinker',
  'Code Craftsman',
  'Control Logic Engineer',
  'Logic-Driven Innovator'
];

const string2 = [
  'Apple / MacOS',
  'Microsoft Office Suite',
  'Github',
  'RSLogix 5/500/5000',
  'AutCAD',
  'Fanuc',
  'Motoman'
];

const string3 = [
  'HTML/5',
  'CSS',
  'JavaScript',
  'Python',
  'MongoDB',
  'React',
  'NodeJS/Express',
  'Typescript',
  'MySQL',
  'Postgress',
  'VBA'
];


const About = ({ nView, oView, setOView }) => {
  const [hold, setHold] = useState(false);
  const [test, setTest] = useState(false);

  useEffect(() => {
    const stopTyping1 = simulateTyping(string1, 'typingArea1');
    const stopTyping2 = simulateTyping(string2, 'typingArea2');
    const stopTyping3 = simulateTyping(string3, 'typingArea3');

    return () => {
      stopTyping1(); stopTyping2(); stopTyping3(); // Ensure typing stops on unmount
    };
  }, []);



  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleDelay = async () => {
    await delay(1500);
    setOView('');
  };

  useEffect(() => {
    if (nView === 'about') {
      setHold(true);
      setTest(true);
    } else if (oView === 'about') {
      setTest(false);
      handleDelay();
    } else if (oView === '') {
      setHold(test);
    }
  }, [nView, oView, test, setOView]);

  return (
    <div className={"page " + (hold ? (test ? 'fadeIn ' : 'fadeOut ') : 'hidden')}>
      <div className="Panel gridA">
        <img alt={personalPic} src={personalPic} className='pic'/>
        <p className="bio">Hello All,</p>
        <p className="indent bio b1">
        My name is Alex Carr, a Software Developer with a background in Controls 
        Engineering. I have been passionate about science and technology my whole 
        career, which has allowed me to continuously adapt and grow within this 
        ever-changing field.</p>
        <p className="indent bio">
        The high speed of development within this sphere is a guarantee of great 
        opportunities and difficulties. I strongly believe that information technologies 
        hold the key to a more developed and sustainable future. Data transparency and 
        user-friendly systems are critical in a bid to provide qualified decisions to 
        individual and business entities.</p>
        <p className="indent bio">
        Transitioning into the field of software development, my focus has been on 
        how to apply advanced technologies in helping to build that future. There's 
        a lot of drive and potential for me to really solve complex problems and 
        develop innovative solutions that improve how humans interact with technology 
        and benefit from it.
        </p>
        <div className='alt'>
          <div>I am a</div>
          <div id='typingArea1'>1</div>
          <div>I have experience in</div>
          <div id='typingArea2'>2</div>
          <div>I have programmed in</div>
          <div id='typingArea3'>3</div>
        </div>
      </div>
    </div>
  );
};

export default About;
