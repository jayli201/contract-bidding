import React, { Component } from "react";
import filepic from "./filepic.svg";
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import { Progress, Button, Layout } from "antd";
import NavbarAd from "./NavbarAd.js";
import "./Challenge.css";

class Challenge extends Component {
  state = {
    file: "",
    fileURL: "",
    percent: 0
  };

  handleUploadStart = () => {
    this.setState({
      percent: 0
    });
  };
  handleProgress = percent => {
    this.setState({
      percent: percent
    });
  };

  handleUploadSuccess = filename => {
    this.setState({
      file: filename,
      percent: 100
    });
    firebase
      .storage()
      .ref("Files")
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState({
          imageURL: url
        })
      )
      .then(url => console.log(url));
  };

  render() {
    console.log(this.state);
    const { Header } = Layout;

    return (
      <div className="dc">
        <Header style={{ background: "white", textAlign: "left" }}>
          Revtek
        </Header>
        <NavbarAd />
        <label className="submitPage"> Daily Challenge Submission </label>
        <p className="progress">
          <Progress type="circle" percent={this.state.percent} />
        </p>

        <br />
        <br />
        <br />
        <label
          style={{
            backgroundColor: "#17dd77",
            color: "white",
            padding: 20,
            borderRadius: 8,
            pointer: "cursor"
          }}
        >
          {this.state.file && <embed src={this.state.fileURL} />}
          <CustomUploadButton
            className="button"
            hidden
            name="File"
            storageRef={firebase.storage().ref("Files")}
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            style={{
              backgroundColor: "#17dd77",
              color: "black",
              padding: 20,
              borderRadius: 8
            }}
          >
            Browse Files
          </CustomUploadButton>
        </label>
      </div>
    );
  }
}
export default Challenge;
