import React, { Component } from "react";
import withCounter from "./withCounter";

class ButtonClick extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>
          Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ButtonClick);
