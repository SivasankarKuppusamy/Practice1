import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PropsValid extends Component {
  render() {
    return (
      <div>
      <h1>Hello,{this.props.name}</h1>
      </div>
    )
  }
 // PropsValid.defaultProps={
   // name : "Siva"
  //};
}
