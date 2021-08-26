import React from 'react'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
// import './App.css';
import Home from './components/pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/pages/AboutMe/About'
import Resume from './components/pages/Resume/Resume'
import Projects from './components/pages/Projects/Projects'
import NetflixCopyProject from './components/pages/Projects/NetflixCopy'
import CrudProject from './components/pages/Projects/Crud'
// import CronometroEstudosProject from './components/pages/Projects/study-timer/CronometroEstudos'
import StudyTimer from './components/pages/Projects/study-timer/CronometroEstudos'
import StudyTimerRender from './components/pages/Projects/study-timer/StudyTimerRender'
import Pomodoro from './components/pages/Projects/study-timer/Pomodoro'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Profile' component={About} />
          <Route path='/Resume' component={Resume} />
          <Route path='/Projects' component={Projects} />
          <Route path='/NetflixCopy' component={NetflixCopyProject} />
          <Route path='/Crud' component={CrudProject} />
          <Route path='/CronometroEstudos' component={StudyTimer} />
          <Route path='/StudyTimerRender' component={StudyTimerRender} />
          <Route path='/Pomodoro' component={Pomodoro} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
