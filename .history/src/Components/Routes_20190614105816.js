import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login.js";
import SignupS from "./Signup/SignupS.js";
import Signup from "./Signup/Signup.js";
import ComContractSubmit from "./Company/ComContractSubmit.js";
import ViewContracts from "./Admin/ViewContracts.js";
import Challenge from "./Admin/Challenge.js";
import StudentProfile from "./Student/StudentProfile.js";
import StudentMarket from "./Student/StudentMarket.js";
import AllStudents from "./Admin/AllStudents.js";
import Profiles from "./Company/Profiles.js";
import CompanyMarket from "./Company/CompanyMarket.js";
import Welcome from "./Login/Welcome.js";
import AdminMarket from "./Admin/AdminMarket.js";
import DailyChallengeView from "./Student/DailyChallengeView.js";
import TaskManager from "./Student/TaskManager.js";
import TaskStatus from "./Company/TaskStatus.js";
import About from "./Login/About.js";

export default class Routes extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signups" component={SignupS} />
          <Route exact path="/contract" component={ComContractSubmit} />
          <Route exact path="/approve" component={ViewContracts} />
          <Route exact path="/subchallenge" component={Challenge} />
          <Route exact path="/profile" component={StudentProfile} />
          <Route exact path="/allstudents" component={AllStudents} />
          <Route exact path="/students" component={Profiles} />
          <Route exact path="/smarket" component={StudentMarket} />
          <Route exact path="/cmarket" component={CompanyMarket} />
          <Route exact path="/amarket" component={AdminMarket} />
          <Route exact path="/challenge" component={DailyChallengeView} />
          <Route exact path="/task" component={TaskManager} />
          <Route exact path="/taskstatus" component={TaskStatus} />
          <Route exact path="/About" component={About} />

        </Switch>
      </main>
    );
  }
}
