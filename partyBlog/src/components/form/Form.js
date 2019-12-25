import React, { Component } from "react";
import shortId from "shortid";
import Button from "@material-ui/core/Button";
import Input from "../ui/input/Input";
import DownloadFile from "../ui/downloadFile/DownloadFile";
import styles from "./form.module.css";
const initialState = {
  img: "",
  text: "",
  description: ""
};

class Form extends Component {
  state = {
    ...initialState,
    send: false
  };

  onHandleSubmit = e => {
    // e.preventDefault();
    //before use submit in form ? show warning 'is not valid html'
    console.log("submit");
    console.log(this.state);
    this.props.getPost(this.state);
    this.setState({
      ...initialState,
      send: true
    });
  };

  handleValue = e => {
    const info = e.target.value;
    const name = e.target.name;
    console.log(info);
    console.log(name);
    this.setState(() => {
      const o = {
        [name]: info,
        date: new Date().toJSON()
      };
      // console.log("-- o --", o);
      return o;
    });
  };

  getPhoto = img => {
    this.setState({ img });
  };

  render() {
    const { img, text, description, send } = this.state;
    return (
      <div onSubmit={this.onHandleSubmit}>
        <div className={styles.downloadContainer}>
          <div className={styles.download}>
            <DownloadFile
              label="Download"
              getPhoto={this.getPhoto}
              change={send}
            />
          </div>
          <div className={styles.buttonGroup}>
            <Input
              handleValue={this.handleValue}
              name="text"
              label="Title"
              value={text}
            />
            <Input
              handleValue={this.handleValue}
              name="description"
              label="Descriptions"
              value={description}
            />
          </div>
        </div>
        <Button
          disabled={!text || !description || !img}
          type="submit"
          variant="outlined"
          color="secondary"
          className={styles.btnSubmitForm}
          onClick={this.onHandleSubmit}
        >
          Send
        </Button>
      </div>
    );
  }
}

export default Form;
