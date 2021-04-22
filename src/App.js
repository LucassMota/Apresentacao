import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/AboutMe/About';
import Resume from './components/pages/Resume/Resume';
import Projects from './components/pages/Projects/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" component={About} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Projects" component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
