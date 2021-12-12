import React, { Component } from "react";

class Welcome extends Component {
  render() {
      const{name, lastName} = this.props
      //const {state1, state2} = this.state
    return (
      <h1>
        Welcome {name} is the {lastName}
      </h1>
    );
  }
}

export default Welcome;
