import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

export default class CreateExcercise extends Component {
  constructor(props) {
    super(props);
    this.saveUpdate = this.saveUpdate.bind(this);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/users").then(resp => {
      this.setState({
        users: resp.data
      });
    });
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.id]: value
    });
  }
  saveUpdate() {
    let payload = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    axios.post("http://localhost:5000/excercises/add", payload).then(resp => {
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
            <select
              className="form-control"
              id="username"
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user.username} value={user.username}>
                    {user.username}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label for="username">Description:</label>
            <textarea
              className="form-control"
              id="description"
              onChange={this.handleChange.bind(this)}
            >
              {this.state.description}
            </textarea>
          </div>
          <div className="form-group">
            <label for="duration">Duration:</label>
            <input
              type="number"
              className="form-control"
              value={this.state.duration}
              id="duration"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label for="date">Date:</label>
            <input
              type="date"
              className="form-control"
              value={this.state.date}
              id="date"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <a
            href="javascript:void(0)"
            className="btn btn-primary"
            onClick={this.saveUpdate}
          >
            Submit
          </a>
        </form>
      </div>
    );
  }
}
