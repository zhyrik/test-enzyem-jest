import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class index extends Component {
  static propTypes = {
    text: PropTypes.string,
    emitEvent: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.submitEvent.bind(this)
  }

  submitEvent(){
    console.log(this)
    if(this.props.emitEvent){
        this.props.emitEvent();
    }
  }

  render() {
    const { text } = this.props
    return (
      <button data-test='button' onClick={() => this.submitEvent()}>
        {text}
      </button>
    )
  }
}
