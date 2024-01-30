// rafc shortcut for create the components
import User from "./User";
import UserClass from "./UserClass";
import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parents constructor");
  }
  componentDidMount() {
    console.log("parents did mount");
  }

  render() {
    console.log("parents components ");
    return (
      <div className="user-card">
        <h1>About us</h1>
        <h3>This is about us code</h3>
        {/* <User name={"Hari Yadav (function)"} /> */}

        <UserClass name={"First"} location={"Noida class"} />
        {/* <UserClass name={"Second"} location={"second class"} />
        <UserClass name={"Third"} location={"second class"} /> */}
      </div>
    );
  }
}



// const About = () => {
//     return (
        
//       <div className="user-card">
//         <h1>About us</h1>
//         <h3>This is about us code</h3>
//         {/* <User name={"Hari Yadav (function)"} /> */}

//             <UserClass name={"Hari Yadav (class)"} location={ "Noida class"} />
//       </div>
//     );
// };

export default About;