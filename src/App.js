import React from 'react'

import './app.scss'
import Header from './components/header'
import Headline from './components/headline'

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Some text. Lorem ipsum dolor" tempArr={tempArr}/>
      </section>
    </div>
  )
}

export default App
