import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/services" render={() => <Services />} />
           <Route path="/contact" render={() => <Contact />} />
       </Switch>
    </div>
  );
}

export default App;
