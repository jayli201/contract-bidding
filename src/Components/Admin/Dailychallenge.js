import React from 'react'
import axios from 'axios'

export default class Dailychallenge extends React.Component {
    state = {
        challenges=[]
    }
    onChange(e) {
        let files = e.target.files
        console.warn("Data File", files);

        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            console.warn("File Data", e.target.result)

            const url = "https://contract-bidding.firebaseio.com/"
            const formData = { file: e.target.result }
            return postMessage(url, formData)
                .then(response => console.warn("Result", response))
        }

    }
    render() {
        return (
            <div onSubmit={this.onFormSubmit}>
                <h1> Daily Challenge Submission Page</h1>
                <label class="upload-group">
                    <input type="file" name="file" onChange={(e) => this.onChange(e)} />

                </label>
                <button type="butn btn-primary" onClick="uploadFile()"> </button>

            </div>



        )


    }




}