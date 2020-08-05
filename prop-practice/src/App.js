import React, {Component} from 'react';
import logo from './logo.svg';
import Footer from './another'
import './App.css';

class App extends Component {

  sayHello() {
    return "This is a function calling"
}

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />



          <p>{this.sayHello()}</p>



          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Footer/>

          <h3>This is prop number : {this.props.propNumber}</h3>
          <NewClass ms='This is props message!!!' model='234'/>
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

class NewClass extends Component {
  render(){
    console.log(this.props.numberz)
    const name = "abc"
    return(
      <div>
        <p>Hello {name} <br/> Hi </p>
        <p>{this.props.ms,
            this.props.model}</p>
          <AnotherNewClass  coolNumberz = {this.props.numberz}/>
      </div>
    );
  }
}

NewClass.defaultProps = {
  numberz : ['1','2','3','4','5','6','7','8','9','10']
}

App.propTypes = {
  propObject : React.PropTypes.object,
  propString : React.PropTypes.string,
  propNumber : React.PropTypes.number
}

App.defaultProps = {
  propNumber : 5,
  propString : "This is prop string",
  propObject : {
    obj1 : 'This is First Object',
    obj2 :  'This is Second Object',
    obj3 : 'This is Third Object'
  }
}

class AnotherNewClass extends Component {
  render(){
    return(
      <div>
        <h1>{this.props.coolNumberz.map(item => {
            return " "+item;
          })}</h1>
      </div>
    );
  }
}
export default App;
