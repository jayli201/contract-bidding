import React from "react";
import NavbarSt from "./NavbarSt";
import firebase from "../firebase.js";
import { Layout, Button } from "antd";

//Profile page for students in the RevTek Dashboard
//Displays individual's photo, name, skill level, skills, and contact info

//if nothing stored yet (new student), prompt to add information
//get current user --> a student object has everything stored
//store info in state
//display state
class StudentProfile extends React.Component {
  state = {
    info: [],
    userID: "",
    key: ""
  };

  componentDidMount() {
    const usersRef = firebase.database().ref("users");

    const user = firebase.auth().currentUser
      ? firebase.auth().currentUser
      : "Reload the Page";

    usersRef.on("value", snapshot => {
      let items = snapshot.val() || []; //get values of database entry

      const entries = Object.entries(items); //entries gets [uid, array of items]
      console.log(entries);
      //finds if current user id matches any id, if so, appends
      //true/false array of type (admin, student, company)
      for (const [id, fields] of entries) {
        if (id === user.uid) {
          console.log(Object.entries(fields));
          const keyHolder = Object.entries(fields);
          console.log(keyHolder[1][0]);
          const fieldArray = Object.values(fields);
          console.log(fieldArray);
          console.log(user.uid);
          this.setState({
            info: fieldArray,
            userID: user.uid,
            key: keyHolder[1][0]
          });
          /*  this.setState({userID : user.uid})
                console.log(this.state.userID)
                this.setState({key : keyHolder[1][0]}) */
        }
      }
    });
  }

  updatePhoto() {
    console.log("photo!");
    firebase
      .database()
      .ref("users/" + this.state.userID + "/" + this.state.key)
      .update({ photoID: "Poopy butthole" });
  }

  updateName() {
    console.log("name!");
    firebase
      .database()
      .ref("users/" + this.state.userID + "/" + this.state.key)
      .update({ name: "Poopy butthole" });
  }

  updateSkill() {
    console.log("skills!");
    firebase
      .database()
      .ref("users/" + this.state.userID + "/" + this.state.key)
      .child("skills")
      .push("butter");
  }

  updateskillLevel() {
    console.log("skillLevel!");
    firebase
      .database()
      .ref("users/" + this.state.userID + "/" + this.state.key)
      .update({ skillLevel: "Poopy buttskill" });
  }

  updatePhone() {
    console.log("Phone!");
    firebase
      .database()
      .ref("users/" + this.state.userID + "/" + this.state.key)
      .update({ phone: "Poopy buttphone" });
  }

  printEntries = () => {
    const entries = Object.entries(this.state.info);
    console.log(entries[1]);
    const entriesReal = entries[1];
    console.log(entriesReal);

    for (const [id, fields] of entries) {
      const fieldArray = Object.values(fields);
      console.log(id);
      console.log(fieldArray);

      return (
        <ul key={fieldArray[0]}>
          {" "}
          Photo : {fieldArray[1]}, Name: {fieldArray[0]}, Skill Level:{" "}
          {fieldArray[3]}, Phone Number: {fieldArray[2]}
        </ul>
      );
    }
  };

  /* for (const [id2, fields2] of fieldArray[4]) {
            const fieldArray2 = Object.values(fields2);
            console.log("fieldArray2 : " + fieldArray2) */

  render() {
    console.log("Below render: ");
    console.log(this.state.userID);
    console.log(this.state.key);
    console.log(this.state.info);

    const { Header } = Layout;
    return (
      <div>
        <Header style={{ background: "white", textAlign: "left" }}>
          Revtek
        </Header>
        <NavbarSt />
        {this.printEntries()}
        {/* <ul key={this.state.info.name}>Photo : {this.state.info.photo}, 
            Name: {this.state.info.name}, Skills: {this.state.info.skills}, 
            Skill Level: {this.state.info.skillLevel}, 
            Phone Number: {this.state.info.phone}</ul> */}

        <Button onClick={this.updatePhoto.bind(this)}> Update Photo </Button>
        <Button onClick={this.updateName.bind(this)}> Update Name </Button>
        <Button onClick={this.updateSkill.bind(this)}> Update Skills </Button>
        <Button onClick={this.updateskillLevel.bind(this)}>
          Update Skill Level
        </Button>
        <Button onClick={this.updatePhone.bind(this)}> Update Phone </Button>
      </div>
    );
  }
}

export default StudentProfile;
