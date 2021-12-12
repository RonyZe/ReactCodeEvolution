import React from "react";

// function Greet() {
//     return <h1>Hello rehan</h1>
// }

const Greet = props => {
    const {name, lastName} = props
  //console.log(props);
  //props.name = "Hamza"
  return (
    <div>
      <h1>
        Hello {name} lastname is {lastName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
