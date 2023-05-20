import React, { Component } from 'react'
import {Link} from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark"  data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="https://vitbhopal.ac.in/file/2020/01/logochhota.png" alt="VitB" width="170" height="70"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-1 g-1">
        <li className="nav-item mx-4">
          <Link className="nav-link fs-4" aria-current="page" to="/">Hindi</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-4" aria-current="page" to="/Gujarati">Gujarati</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link fs-4" aria-current="page" to="/Bengali">Bengali</Link>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}
