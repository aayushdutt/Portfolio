import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
// import Awards from './pages/Awards'
import Education from './pages/Education'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <main>
              <Route path='/' exact={true}  component={Landing} />
              <Route path='/about' exact={true}  component={About} />
              <Route path='/experience' exact={true}  component={Experience} />
              <Route path='/projects' exact={true}  component={Projects} />
              <Route path='/skills' exact={true}  component={Skills} />
              <Route path='/education' exact={true}  component={Education} />
            </main>
        </div>
      </Router>
    );
  }
}

export default App;
