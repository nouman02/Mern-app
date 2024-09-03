import React, { Component } from "react";
import UserData from "./data";
import _ from "lodash";

export default class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   intialArray: null
      //   popped: false
    };
  }
  handleSearch = () => {};

  render() {
    let intialArray = null;
    if (this.props.userarray) {
      intialArray = this.props.userarray;
      console.log(intialArray, "intialarray from custom table");
    }

    return (
      <div>
        {/* <input
          type="text"
          id="search"
          value={this.state.search}
          onChange={() => {
            this.handleSearch();
          }}
          placeholder="search"
        /> */}
        <div></div>
        <table className="table">
          <h1>hjhjhh</h1>
          {//   () => {
          //     if (this.state.pagesNumber && this.state.intialArray.length > 0) {
          //       if (this.state.popped) {
          //         this.state.intialArray.map(value => {
          //           <td>{value.id}</td>;
          //         });
          //       } else {
          //         () => {
          //           const subUserArray = [];
          //           for (let i = 0; i < this.state.pagesNumber; i++) {
          //             const user = this.state.intialArray.pop();
          //             subUserArray.push(user);
          //           }
          //           subUserArray.map(value => {
          //             <td>{value.id}</td>;
          //           });
          //         };
          //       }
          //     }
          //   }
          intialArray
            ? intialArray.map(value => {
                return <td>{value.id}</td>;
              })
            : ""}
        </table>
        {/* // <button */}
        {/* //     onClick={()=>{ */}
        {/* //         <customTa */}
        {/* //     }} */}
        {/* // >nextPage</button> */}
      </div>
    );
  }
}
