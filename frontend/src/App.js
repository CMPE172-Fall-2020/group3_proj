import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import UserInfo from "./Components/UserInfo";
import UserManagement from "./Components/UserManagement";
import Statistics from "./Components/Statistics";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={UserLogin} />
        <Route exact path="/UserInformation" component={UserInfo} />
        <Route exact path="/UserEditInfo" component={UserManagement} />
        <Route exact path="/Statistics" component={Statistics} />
      </Router>
    );
  }
}

export default App;
