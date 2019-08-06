import React, { Component } from 'react'
import PropTypes from 'prop-types'

class index extends Component {
  constructor (props) {
    super (props)
  }

  render() {
    const { header, desc } = this.props

    if (!header) {
      return null
    }

    return (
      <div data-test='headline'>
        <h1 data-test='head'>{header}</h1>
        <p data-test='desc'>
          {desc}
        </p>
      </div>
    )
  }
}

index.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  // Complex example for working with PropTypes (not used in component)
  tempArr: PropTypes.arrayOf(PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool
  }))
}



export default index
