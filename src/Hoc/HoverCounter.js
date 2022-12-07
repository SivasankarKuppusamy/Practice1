import React, { Component } from 'react'
import EnComponent from './EnComponent'
class HoverCounter extends Component {
render() {
    return (
      <div>
      <h1 onMouseEnter={this.props.inc}>Hover me! {this.props.count}</h1>
      </div>
    )
  }
}
export default EnComponent(HoverCounter)
