import React, { Component } from 'react'
export default class Example extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         c:0,
         name:"Siva"
      }
    }
   
  render() {
    return (
      <div>
      <h1>
      <button onClick={
        ()=>this.setState({c:this.state.c+1})
    }>Click Me! {this.state.c}</button>
      </h1>
      </div>
    );
  }
}
