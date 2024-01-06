
import React, { Component } from 'react'
import UserContext from '../utils/UserContext';
 class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state={
           userInfo:{
            login: "dummy name",
            avatar_url: "https://lgin"
           }
        }
    }
    async componentDidMount(){
      const data= await fetch("https://api.github.com/users/kaifzafry") 
      const json= await data.json();
      console.log(json)

      this.setState({userInfo:json});
    }
    
  render() {
    let {login,location, avatar_url}=this.state.userInfo;
    return (
      <div>
       <img src={avatar_url} alt='pic'/>
        <h2>Name: {login}</h2>
        <div>
          logedIn User : 
          <UserContext.Consumer>
            {({logedIn})=> <h1>{logedIn}</h1>}
          </UserContext.Consumer>
        </div>
        <h4>Location: {location}</h4>
      </div>
    )
  }
}

export default UserClass;
