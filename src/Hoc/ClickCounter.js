import React, { Component } from 'react'
import EnComponent from './EnComponent'
class ClickCounter extends Component {
render() {
    const{count,inc}=this.props
    return (
      <div>
      <button onClick={inc}>click me! {count}</button>
      </div>
    )
  }
}
export default EnComponent(ClickCounter)
