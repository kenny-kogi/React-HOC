import React, { Component } from "react";

const withCounter = (WrapperComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevstate) => {
        return { count: prevstate.count + 1 };
      });
    };
    render() {
      return (
        <WrapperComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
        />
      );
    }
  }

  return NewComponent;
};

export default withCounter;
