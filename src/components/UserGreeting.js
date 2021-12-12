import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    
    //By using Short Circuit Operator    
return this.state.isLoggedIn && <div>Welcome Ali</div>

    //By usin ternary operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Ali</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // ); 


    //By using Element Variables
    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Ali</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome User Greeting File</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return (
    //     <div>
    //         <div>Welcome UserGreeting File</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
