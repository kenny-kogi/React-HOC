import React, { Component } from "react";
import withCounter from "./withCounter";

class ButtonHover extends Component {
  render() {
    return (
      <div>
        <button onMouseEnter={this.props.incrementCounter}>
          Hover {this.props.count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ButtonHover);
