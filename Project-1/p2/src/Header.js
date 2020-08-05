import React, {Component} from 'react';


class Header extends Component {
  constructor(props){
    super(props);
    this.yourName = "abc";
    this.state = {};
  }

  sayHello(){
    return "Hi";
  }
  render()
  {
    const myName = "Fareed";

    console.log(this.props);
    return(
      <div>
        <h1>I am {myName} <br/> {this.sayHello()} <br/> Your name is {this.yourName}</h1>
        <p>{this.props.ms}</p>
      </div>
    );
  }
}


export default Header;
