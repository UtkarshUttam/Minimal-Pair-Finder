import React, { Component } from 'react'
import GujaratiMinimalPairsFinder from './Gujrati_Minimal'
// import MinimalPairFinder from './MinimalPairFinder'

export class Gujarati extends Component {
  render() {
    return (
        <div>
            {/* <MinimalPairFinder language="Gujarati"/> */}
            <GujaratiMinimalPairsFinder/>
        </div>
    )
  }
}

export default Gujarati