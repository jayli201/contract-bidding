import React from "react";
import { Switch, Route } from "react-router-dom";
import Company from "./Company/Company.js";
import Login from "./Login/Login.js";
import Admin from "./Admin/Admin.js";
import Student from "./Student/Student.js";
import SignupC from "./Signup/SignupC.js";
import SignupA from "./Signup/SignupA.js";
import SignupS from "./Signup/SignupS.js";

export default class Routes extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/signupa" component={SignupA} />
          <Route exact path="/signupc" component={SignupC} />
          <Route exact path="/signups" component={SignupS} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </main>
    );
  }
}
