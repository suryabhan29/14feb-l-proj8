
//Import area
import React from 'react';
import ReactDOM from 'react-dom/client';


// every component can have its own data/states

class A extends React.Component{
  //1. properties/variabal
 


  //2. constructor
  constructor(){
    super();

    this.state = {name: "suryabhan", 
                  surname: "singh",
                  address: "neemuch"}
        
    
  }


  //3. method
  // every class component must have a render method
  render(){
    this.setState({
      ...this.state,  // ... is spread operator ES6 2015
      name:"rakesh"
    })
    // every function return something
    return <>
          <h1>oklabs {this.state.name} {this.state.surname} </h1>
          <h1>oklabs {this.state.address} </h1>
          <h1>oklabs {this.props.name} {this.props.surname} </h1>
          <h1>oklabs {this.props.children}  </h1>
          </>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name="suraj" surname='singh'>neemuch</A>);


