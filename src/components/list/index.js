import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class index extends Component {
  static propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
  }

  render() {
    const { title, desc } = this.props

    if(!title) {
      return null
    }

    return (
      <div data-test='ListWrapper'>
        <h2 data-test='title'>{title}</h2>
        <div data-test='desc'>{desc}</div>
      </div>
    )
  }
}
