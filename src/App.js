import React, { Component } from 'react';

import Navbar from './components/Navbar'
import EverythingElse from './components/EverythingElse'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <EverythingElse /> */}
      </div>
    );
  }
}

export default App;
