import React, { Component } from 'react'
import { connect } from 'react-redux'

import './app.scss'
import Header from './components/header'
import Headline from './components/headline'
import Button from './components/button'
import List from './components/list'

import { fetchPost } from './store/actions/posts'

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]

class App extends Component {

  constructor(props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.fetchPost()
  }

  render () {
    const { posts } = this.props

    const configButton = {
      text: 'Get items',
      emitEvent: this.fetch
    }

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Some text. Lorem ipsum dolor" tempArr={tempArr}/>
          <Button {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, desc } = post
                const configList = { title, desc }
                return (
                  <List {...configList} key={index}/>
                )
              })}
            </div>
          }
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.reducer
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchPost: () => dispatch(fetchPost())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
