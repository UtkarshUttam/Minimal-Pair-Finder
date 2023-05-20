import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Hindi from './components/Hindi'
import Gujarati from './components/Gujarati'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Bengali from './components/Bengali';
// import TextEntry from './components/TextEntry'
// import MinimalPairChecker from './components/MinimalPairChecker'


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hindi/>}></Route>
          <Route path="/Gujarati" element={<Gujarati/>}></Route>        
          <Route path="/Bengali" element={<Bengali/>}></Route>        
        {/* <MinimalPairChecker></MinimalPairChecker> */}
        </Routes>
        </Router>
      </div>
    )
  }
}
