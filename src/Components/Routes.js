import React from 'react';
import {Switch, Route} from "react-router-dom";
import Company from './Company.js';
import Login from './Login/Login.js';
import Student from './Student.js';

export default class Routes extends React.Component {
    
    render () {
    
        return (
        <main>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/company' component = {Company}/>
                <Route exact path='/student' component = {Student}/>
            </Switch>
        </main>
            
        );
    }

}