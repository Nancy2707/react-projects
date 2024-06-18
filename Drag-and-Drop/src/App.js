import './Components/index.css';
import React, { Component } from 'react';
import List from './Components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["Red", "Blue", "Green", "Navy", "GreenYellow","Pink","Salmon"]
    };
  }

  render() {
    return (
      <>
      <div className='mainhead'>

      <h1>Drag and Drop Functionality</h1>
      <p>This Functionality is implemented using simple color example</p>
      </div>
        <List colors={this.state.colors} />
      </>
    );
  }
}

export default App;
