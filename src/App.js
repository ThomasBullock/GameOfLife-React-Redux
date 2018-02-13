import React, { Component } from 'react';

import BoardContainer from './containers/BoardContainer'; 
import ControlContainer from './containers/ControlContainer'; 
import Footer from './components/Footer'; 

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="container">
          <ControlContainer />
          <BoardContainer />

        </div>
      </div>
    );
  }
}

export default App;