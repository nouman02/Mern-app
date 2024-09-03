import React, { Component } from "react";
import UserData from "./data";
import _ from "lodash";
import CustomTable from "./customTable";

export default class customTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: UserData,
      pagesNumber: null
    };
  }
  handlePageNumSelect = async e => {
    debugger;
    await this.setState({
      pagesNumber: Number(e.target.value),
      userData: UserData
    });
    console.log(UserData, this.state.pagesNumber);
  };
  render() {
    const subUserArray = [];
    const userArray = [...this.state.userData];
    for (let i = 0; i < this.state.pagesNumber; i++) {
      const user = userArray.pop();
      subUserArray.push(user);
    }
    console.log(subUserArray, "userarray");
    return (
      <div>
        <select
          id="perPage"
          onChange={e => {
            this.handlePageNumSelect(e);
          }}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <CustomTable userarray={subUserArray}></CustomTable>
      </div>
    );
  }
}
