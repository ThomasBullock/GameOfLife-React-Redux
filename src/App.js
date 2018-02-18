import React, { Component } from 'react';

import BoardContainer from './containers/BoardContainer'; 
import ControlContainer from './containers/ControlContainer'; 
import FooterContainer from './containers/FooterContainer'; 

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="container">
          <ControlContainer />
          <BoardContainer />
          <FooterContainer />
        </div>
      </div>
    );
  }
}

export default App;