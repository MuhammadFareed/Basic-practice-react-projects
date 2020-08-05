import React, {Component} from 'react';
import logo from './logo.svg';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main msg = 'abcd' cars={this.props.carNames} />
      <Header ms='Hey there, I am props message'/>

    </div>
  );
}

// eslint-disable-next-line

class Main extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
        <header className="App-header">
            <Image/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
    );
  }
}

Main.defaultProps = {
  carNames : ['City', 'Audi', 'BMW', 'Toyota']
}


class Image extends Component {
  render(){
    return(
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
