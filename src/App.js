
import { Transition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import { NavBar, Background, Signature, ContactBar } from './components';
import { About, Experience, Contact, More } from './pages';
import './App.css';

function App() {
  const [ view, setView ] = useState('');

  useEffect(() => {
    console.log('App useEffect active')
  },[]);

  return (
    <>
      <Background/>
      <NavBar setView={setView}/>
      <ContactBar/>
      <Signature/>
      <About view={view}/>
      <Experience view={view}/>
      <Contact view={view}/>
      <More view={view}/>
    </>
  );
}

export default App;


