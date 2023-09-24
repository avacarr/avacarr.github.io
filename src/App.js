
import { NavBar, Background } from './components';
import { About, Experience, Contact, More } from './pages';
import './App.css';

function App() {
  return (
    <div className="container">
      <Background/>
      <NavBar/>
      <About/>
      <Experience/>
      <Contact/>
      <More/>
    </div>
  );
}

export default App;


