import React, { Component } from 'react'
import './App.css'

import Header from './Header'
import Banner from './Banner'
import Content from './Content'
import Footer from './Footer'


class App extends Component {

  render() {
    return (
      <div className="sans-serif">
        <Header/>
        <Banner/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

export default App;
