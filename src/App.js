import React, { Component } from 'react'
import Navbar from './components/Navbar'
// import TextEntry from './components/TextEntry'
import MinimalPairChecker from './components/MinimalPairChecker'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* <TextEntry/> */}
        <MinimalPairChecker></MinimalPairChecker>
      </div>
    )
  }
}
