import React, { Component } from 'react'
import './App.css'

import Banner from './Banner'
import Content from './Content'
import Footer from './Footer'


class App extends Component {

  render() {
    return (
      <div>
        <Banner/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

export default App;
