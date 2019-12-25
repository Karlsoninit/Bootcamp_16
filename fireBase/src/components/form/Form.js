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
    ...initialState
  };

  onHandleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    console.log(this.state);
    this.props.getPost(this.state);
    this.setState({
      ...initialState
    });
  };

  handleValue = e => {
    // console.log("test ---> ", e.target.value);
    const info = e.target.value;
    const name = e.target.name;
    console.log(info);
    console.log(name);
    this.setState(() => {
      const o = {
        [name]: info,
        id: shortId(),
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
    return (
      <form onSubmit={this.onHandleSubmit}>
        <div className={styles.downloadContainer}>
          <div className={styles.download}>
            <DownloadFile label="Download" getPhoto={this.getPhoto} />
          </div>
          <div className={styles.buttonGroup}>
            <Input handleValue={this.handleValue} name="text" label="Title" />
            <Input
              handleValue={this.handleValue}
              name="description"
              label="Descriptions"
            />
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              className={styles.btnSubmitForm}
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
