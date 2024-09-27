
import { Transition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import { NavBar, Background, Signature, ContactBar } from './components';
import { About, Experience, Contact, More } from './pages';
import './App.css';

function App() {
  const [ nView, setNView ] = useState('');
  const [ oView, setOView ] = useState('');

  useEffect(() => {
    console.log('App useEffect active')
  },[]);

  return (
    <>
      <Background/>
      <NavBar nView={nView} setNView={setNView} oView={oView} setOView={setOView}/>
      <ContactBar/>
      <Signature/>
      <About nView={nView} oView={oView} setOView={setOView}/>
      <Experience nView={nView} oView={oView} setOView={setOView}/>
      <Contact nView={nView} oView={oView} setOView={setOView}/>
      <More nView={nView} oView={oView} setOView={setOView}/>
    </>
  );
}

export default App;


