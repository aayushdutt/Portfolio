import React, { Component } from 'react';

import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Awards from './pages/Awards'
import Education from './pages/Education'
// import EverythingElse from './components/EverythingElse'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Landing />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Awards />
          <Education />
        </main>
        {/* <EverythingElse /> */}
      </div>
    );
  }
}

export default App;
