import React from "react";
import { User } from "../components/User";

class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {},
    };
  }

  getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ users: data });
  };

  componentDidMount() {
    this.getUsers();
  }

  getOneUser = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    this.setState({ user: data });
    console.log(id);
  };

  render() {
    return (
      <>
        <h1 style={{ color: "blue" }}>users list</h1>

        <ul>
          <li style={{ color: "red", fontSize: "30px" }}>
            id:{this.state.user.id}
          </li>
          <li>phone:{this.state.user.phone}</li>
          <li>username: {this.state.user.username}</li>
          <li>email: {this.state.user.email}</li>
          <li>website:{this.state.user.website} </li>
        </ul>
        
        <ul>
          {this.state.users.map((user) => (
            <User userInfo={user} key={user.id} getOneUser={this.getOneUser} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersPage;
