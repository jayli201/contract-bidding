import React from 'react';
import {Switch, Route} from "react-router-dom";
import Company from './Company/Company.js';
import Login from './Login/Login.js';
import Student from './Student/Student.js';
import Signup from './Signup/Signup.js';

export default class Routes extends React.Component {
    
    render () {
    
        return (
        <main>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/company' component = {Company}/>
                <Route exact path='/student' component = {Student}/>
                <Route exact path='/signup' component = {Signup}/>
            </Switch>
        </main>
            
        );
    }

}