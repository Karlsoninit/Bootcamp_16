import React, { Component } from "react";
import shortId from "shortid";

const initialState = {
  img: "",
  text: ""
};

class Form extends Component {
  state = {
    ...initialState
  };

  onHandleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    this.props.getPost(this.state);
    this.setState({
      ...initialState
    });
  };

  onHandleGetValue = e => {
    const info = e.target.value;
    const name = e.target.name;
    this.setState(() => {
      const o = {
        [name]: info,
        id: shortId(),
        date: new Date().toJSON()
      };
      console.log(o);
      return o;
    });
  };

  render() {
    // console.log("rerender");
    const { img, text } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <input
          value={img}
          name="img"
          onChange={this.onHandleGetValue}
          type="text"
          placeholder="download image"
        />
        <input
          value={text}
          name="text"
          onChange={this.onHandleGetValue}
          type="text"
          placeholder="enter description ..."
        />
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default Form;
