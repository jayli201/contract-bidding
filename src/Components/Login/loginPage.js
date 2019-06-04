import React from 'react';
import Login from './Login.js';

export default class loginPage extends React.Component {
    
    render () {
    
        return (
        <main>
            <h1> RevTek Dashboard </h1>
            <h6> Connecting the best Students with Employers </h6>
            <Login/>
        </main>
            
        );
    }
}
