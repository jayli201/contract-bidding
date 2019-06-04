import React from 'react';
import {Switch, Route} from "react-router-dom";
import Company from './Company/Company.js';
import loginPage from './Login/loginPage.js';
import Student from './Student/Student.js';
import Signup from './Signup/Signup.js';

//Establishes routes between the main pages of the application using react-router-dom
export default class Routes extends React.Component {
    render () {
        return (
        <main>
            <Switch>
                <Route exact path='/' component={loginPage}/> 
                <Route exact path='/company' component = {Company}/>
                <Route exact path='/student' component = {Student}/>
                <Route exact path='/signup' component = {Signup}/>
            </Switch>
        </main>
        );
    }
}