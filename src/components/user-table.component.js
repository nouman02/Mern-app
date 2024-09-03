import React, { Component } from "react";
import UserData from "./data";
import _ from "lodash";

export default class UserTable extends Component {
  constructor(props) {
    super(props);
    this.filterTable = this.filterTable.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      users: UserData,
      allUsers: UserData,
      search: "",
      currentPage: 1,
      usersPerPage: 3,
      perPage: null,
      sort: {
        column: null,
        direction: "desc"
      }
    };
  }
  handleEvent(e) {
    const value = e.target.value;
    const id = e.target.id;
    this.setState({
      ...this.state,
      [e.target.id]: value
    });
    if (id == "perPage") {
      this.setState({ usersPerPage: Number(value) });
    }
    this.filterTable();
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event)
    });
  }
  filterTable() {
    var search = this.state.search;
    const filteredEmail = _.filter(this.state.allUsers, function(o) {
      return o.email.toLowerCase().indexOf(search) > -1;
    });
    const filteredfirstName = _.filter(this.state.allUsers, function(o) {
      return o.first_name.toLowerCase().indexOf(search) > -1;
    });
    const filteredlastName = _.filter(this.state.allUsers, function(o) {
      return o.last_name.toLowerCase().indexOf(search) > -1;
    });
    const filteredcompany = _.filter(this.state.allUsers, function(o) {
      return o.company_name.toLowerCase().indexOf(search) > -1;
    });
    this.setState({
      users:
        filteredEmail.length > 0
          ? filteredEmail
          : filteredfirstName.length > 0
          ? filteredfirstName
          : filteredlastName.length > 0
          ? filteredlastName
          : filteredcompany.length > 0
          ? filteredcompany
          : this.state.allUsers
    });
  }

  onSort(e, sortKey) {
    const direction = this.state.sort.column
      ? this.state.sort.direction === "asc"
        ? "desc"
        : "asc"
      : "desc";
    const sortedData = this.state.users.sort((a, b) => {
      let nameA = "";
      let nameB = "";
      if (sortKey == "email") {
        nameA = a.email.toUpperCase();
        nameB = b.email.toUpperCase();
      } else if (sortKey == "first_name") {
        nameA = a.first_name.toUpperCase();
        nameB = b.first_name.toUpperCase();
      } else if (sortKey == "last_name") {
        nameA = a.last_name.toUpperCase();
        nameB = b.last_name.toUpperCase();
      } else if (sortKey == "company_name") {
        nameA = a.last_name.toUpperCase();
        nameB = b.last_name.toUpperCase();
      } else {
        return a.last_log_in - b.last_log_in;
      }
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    if (direction === "desc") {
      sortedData.reverse();
    }
    this.setState({
      users: sortedData,
      sort: {
        sortKey,
        direction
      }
    });
  }
  setArrow = column => {
    let className = "sort-direction";
    if (this.state.sort.column === column) {
      className += this.state.sort.direction === "asc" ? " asc" : " desc";
    }
    return className;
  };
  render() {
    const { users, currentPage, usersPerPage } = this.state;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const renderUsers = currentUsers.map((eachUser, index) => {
      return (
        <tr key={index}>
          <td>{eachUser.email}</td>
          <td>{eachUser.first_name}</td>
          <td>{eachUser.last_name}</td>
          <td>{eachUser.company_name}</td>
          <td>{eachUser.last_log_in}</td>
        </tr>
      );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          className="page-item"
          id={number}
          onClick={e => {
            this.handleClick(number);
          }}
        >
          <a className="page-link" href="javascript:void(0)">
            {number}
          </a>
        </li>
      );
    });

    return (
      <div className="container">
        <input
          type="text"
          id="search"
          value={this.state.search}
          onChange={this.handleEvent.bind(this)}
          placeholder="search"
        />
        <select id="perPage" onChange={this.handleEvent.bind(this)}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <table className="table table-striped">
          <thead>
            <tr>
              <td onClick={e => this.onSort(e, "email")}>
                <span className={this.setArrow("email")}></span>Email
              </td>
              <td onClick={e => this.onSort(e, "first_name")}>
                <span className={this.setArrow("first_name")}></span>First name
              </td>
              <td onClick={e => this.onSort(e, "last_name")}>
                <span className={this.setArrow("last_name")}></span>Last name
              </td>
              <td onClick={e => this.onSort(e, "company_name")}>
                <span className={this.setArrow("company_name")}></span>Company
              </td>
              <td onClick={e => this.onSort(e, "last_log_in")}>
                <span className={this.setArrow("last_log_in")}></span>last login
              </td>
            </tr>
          </thead>
          <tbody>{renderUsers}</tbody>
        </table>
        <ul
          id="page-numbers"
          className="pagination"
          style={{ "list-style": "none", display: "flex" }}
        >
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}
