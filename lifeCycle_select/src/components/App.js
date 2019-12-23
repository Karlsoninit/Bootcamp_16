import React, { Component } from "react";
import Post from "../components/post/Post";
import { DATA } from "./data";
import Form from "./form/Form";
import Default from "./default/Default";

class App extends Component {
  state = {
    data: DATA
  };

  getPost = post => {
    this.setState(prev => {
      return {
        data: [...prev.data, post]
      };
    });
  };

  deletePost = id => {
    this.setState(prevState => {
      return {
        data: prevState.data.filter(post => post.id !== id)
      };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Form getPost={this.getPost} />
        {data.length !== 0 ? (
          <>
            <Post deletePost={this.deletePost} data={data} />
          </>
        ) : (
          <Default />
        )}
      </>
    );
  }
}

export default App;
