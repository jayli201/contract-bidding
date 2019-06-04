import React, { Component } from "react";
import firebase from "../firebase.js";
import { Redirect, withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

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

    //login button press takes in email and password
    login(e){
        e.preventDefault();

        //email and password from state is entered into firebase authentication
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
        }).catch((error) => {console.log(error);})

        //pass email and password user enters in form
      
        //gets database of users
        const usersRef = firebase.database().ref('users');

        //gets user currently logged in
        const user = (firebase.auth().currentUser ? firebase.auth().currentUser : "Reload the Page"); 

        //on the values of the database of users, get the matching user id to currently logged in user
        usersRef.on('value', (snapshot) => {
        
        let items = snapshot.val() || []; //get values of database entry
         
        const entries = Object.entries(items) //entries gets [uid, array of items]
        //console.log(entries)

        //finds if current user id matches any id, if so, appends
        //true/false array of type (admin, student, company)
        for (const [id, fields] of entries) {
            if(id === user.uid) {
            const fieldArray = Object.values(fields)
            console.log(fieldArray)
           this.setState({type : fieldArray}) //sets state to equal true/false array
            }
          } 
        });
        
    }

    googleSignIn(){
      var provider = new firebase.auth.GoogleAuthProvider();

      //firebase.auth().currentUser.linkWithRedirect(provider);
     firebase.auth().signInWithRedirect(provider);

     firebase.auth().getRedirectResult().then(function(result) {
       console.log(result)
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log(result.user)
        console.log(token)
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
      
    }
    //pushes path if signup button is pressed to lead user to signup page
    signup(){ 
      let path = `signup`;
      this.props.history.push(path);
        
    }

    handleSubmit (e) {
      e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
   }

    render(){
      console.log(this.state.type)
      
      //redirects user if current logged in user fits below criteria
      if(this.state.type[0] === true) { //if company
        return <Redirect to = '/company'/>
      }
      else if (this.state.type[1] === true) { //if admin
        return <Redirect to = '/company' />
      }
      else if (this.state.type[3] === true) { //if student
        return <Redirect to = '/student' />
      }

      //normal rendering for login page
      return(
            <div class="login">
                <Form onSubmit={this.login}>
                    <Input value={this.state.email} onChange={e => this.setState({email: e.target.value})} type="email" name="email" placeholder="enter email"/> <br/>
                    <Input value={this.state.password} onChange={e => this.setState({password: e.target.value})} type="password" name="password" placeholder="enter password"/> <br/>
                    <div class="loginbutton">
                        <Button onClick={this.login}> Login </Button>
                        <Button onClick={this.googleSignIn.bind(this)}> Google Sign-In </Button>
                        <Button onClick={this.signup}> Sign up </Button>
                    </div>
                </Form> 
               
            </div>
        )
    }
}

export default Login;

/* handleSearchChange (e) {
        this.setState({response: e.target.value});
     };

    render() {
        return (
        <div>
        <form> 
            <input type="text" id="input1" onChange={evt => this.handleSearchChange(evt)}/>
           {/*  <button onClick={evt => this.getAuthor(evt)}>Search</button> */
           
       /*  </form>
        <button onClick={this.getAuthor.bind(this)}>Search</button>  */

//uses withRouter for changing urls if signup page is clicked
//</div>export default withRouter(Login)