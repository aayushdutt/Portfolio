import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
// import About from './pages/About'
// import Awards from './pages/Awards'
// import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Route path="/" exact={true} component={Landing} />
            <Route path="/experience" exact={true} component={Experience} />
            <Route path="/projects" exact={true} component={Projects} />
            <Route path="/skills" exact={true} component={Skills} />
            <Route path="/education" exact={true} component={Education} />
            {/* <Route path='/about' exact={true}  component={About} /> */}
            {/* <Route path="/contact" exact={true} component={Contact} /> */}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
