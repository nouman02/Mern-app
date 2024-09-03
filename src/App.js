import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExcerciseList from "./components/excercise-list.component";
import EditExcercise from "./components/edit-excercise.component";
import CreateExcercise from "./components/create-excercise.component";
import CreateUser from "./components/create-user.component";
import customTableContainer from "./components/user-table.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExcerciseList} />
      <Route path="/edit/:id" component={EditExcercise} />
      <Route path="/create" component={CreateExcercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/usertable" component={customTableContainer} />
    </Router>
  );
}

export default App;
