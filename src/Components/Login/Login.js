import React, { Component } from "react";
import firebase from "./firebase.js";
import { Redirect } from 'react-router-dom';
/* var provider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  }); */

class Login extends Component{
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.signup=this.signup.bind(this);
        this.state ={
            email: "",
            password: "",
            type : { }
        }
    }

    login(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
        }).catch((error) => {console.log(error);})
        //pass email and password user enters in form
        console.log("user put in email and password");

        const usersRef = firebase.database().ref('users');
        const user = (firebase.auth().currentUser ? firebase.auth().currentUser : "Reload the Page"); //specific user id for logged in user
        console.log("User id: " + user.uid)

        usersRef.on('value', (snapshot) => {
       // console.log(snapshot.val())
        let items = snapshot.val() || [];
         
        const entries = Object.entries(items)
        console.log(entries)
        for (const [id, tasks] of entries) {
            if(id === user.uid) {
            const taskArray = Object.values(tasks)
            console.log(taskArray)
            //const entries3 = Object.entries(entries2)
           this.setState({type : taskArray})
            }
          } 
        });
        
    }
  
    signup(e){
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
        })
    }

    render(){
      console.log(this.state.type)

      if(this.state.type[0] === true) {
        return <Redirect to = '/company'/>
      }
      else if (this.state.type[1] === true) {
        return <Redirect to = '/company' />
      }
      else if (this.state.type[3] === true) {
        return <Redirect to = '/student' />
      }

        return(
            <div class="login">
                <form onSubmit={this.login}>
                    <input value={this.state.email} onChange={e => this.setState({email: e.target.value})} type="email" name="email" placeholder="enter email"/> <br/>
                    <input value={this.state.password} onChange={e => this.setState({password: e.target.value})} type="password" name="password" placeholder="enter password"/> <br/>
                    <div class="loginbutton">
                        <button onClick={this.login}> Login </button>
                        <button onClick={this.signup}> Sign up </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
