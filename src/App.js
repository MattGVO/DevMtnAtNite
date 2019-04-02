import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './AtNite.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="neon">DevMtn @ Nite</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>With Your Host: </p>
          <h3>Matt Van Orman A.K.A "Nintendo Jones"!</h3>
          {/* <h3>Jonathan "Old" McDonald!</h3> */}
          {/* <h3>David Telford, The Thrash Master!</h3> */}
        </header>
      </div>
    );
  }
}

export default App;
