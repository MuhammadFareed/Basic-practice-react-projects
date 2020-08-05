import React, {Component, PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>This is props number : {this.props.propNumber}</h1>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  propObject: React.PropTypes.object,
  propString : React.PropTypes.string,
  propNumber : React.PropTypes.number
}

App.defaultProps = {
  propNumber : 7,
  propString : "This props string.",
  propObject : {
    propObj1 : 'This is porps object 1',
    propObj2 : 'This is porps object 2',
    propObj3 : 'This is porps object 3'
  }
}

export default App;
