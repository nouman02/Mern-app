import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.saveUser = this.saveUser.bind(this);
    this.state = {
      username: "",
      user_email: ""
    };
  }
  handleEvent(e) {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.id]: value
    });
  }
  saveUser() {
    let payload = {
      username: this.state.username,
      user_email: this.state.user_email
    };
    axios.post("http://localhost:5000/users/add", payload).then(resp => {
      this.setState({
        username: "",
        user_email: ""
      });
    });
  }
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              id="username"
              onChange={this.handleEvent.bind(this)}
            />
          </div>
          <div className="form-group">
            <label for="user_email">Email:</label>
            <input
              type="email"
              className="form-control"
              value={this.state.user_email}
              id="user_email"
              onChange={this.handleEvent.bind(this)}
            />
          </div>
          <a
            href="javascript:void(0)"
            className="btn btn-primary"
            onClick={this.saveUser}
          >
            Create New User
          </a>
        </form>
      </div>
    );
  }
}
