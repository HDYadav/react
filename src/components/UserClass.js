
import React from "react";


class UserClass extends React.Component {
    constructor(props) {

        super(props);
      //  console.log(props)
        this.state = {
          UserInfo: {
            name: "Dummy",
            location: "Default"
          }
        };    
        
       // console.log(this.props.name + "chiled constructor");
    }
   async componentDidMount() {
       // console.log(this.props.name +  "chiled did mount");
       const data = await fetch("https://api.github.com/users/HDYadav");
       const json = await data.json();
       console.log(json);

       this.setState({
         UserInfo: json,
       });
    }
    render() {
       // const { name, location } = this.props;
        // console.log(this.props.name +  "chiled  components ");
        
        const { name, location, avatar_url } = this.state.UserInfo;
      //  debugger;
        
    return (
      <div className="card-items"> 
            <h2>Name: {name}</h2>
            <h3><img src={avatar_url}></img></h3>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;