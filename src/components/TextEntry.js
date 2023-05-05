import React, {Component } from 'react'

export default class TextEntry extends Component {
    
    handleOnChange = (event) => {
        // console.log("On change");
        this.setState({setText: event.target.value});
      };
      constructor(){
        super();
        this.state = {
            text:"Enter your text here",
            setText: ''
        }
      }
  render() {
    
    return (
      <div><textarea
      className="form-control"
      value={this.state.setText}
    //   style={{
        // backgroundColor: props.mode === "dark" ? "grey" : "white",
        // color: props.mode === "dark" ? "white" : "#042743",
    //   }}
      onChange={this.handleOnChange}
      id="myBox"
      rows="4"
    ></textarea>
    <button className="btn btn-primary mx-2 my-1" onClick={""}>
          Find
        </button>
    </div>
    )
  }
}
