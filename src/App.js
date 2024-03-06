
import { NavBar, Background, Signature, ContactBar } from './components';
import { About, Experience, Contact, More } from './pages';
import './App.css';

function App() {
  return (
    <div className="container">
      <Background/>
      <NavBar/>
      <ContactBar/>
      <Signature/>
      <About/>
      <Experience/>
      <Contact/>
      <More/>
    </div>
  );
}

export default App;


