import React, { Component } from "react";
import axios from "axios";
import Post from "../components/post/Post";
import Form from "./form/Form";
import Default from "./default/Default";

class App extends Component {
  state = {
    data: [],
    news: [],
    isChange: false
  };

  getPost = async post => {
    const response = await axios.post(
      "https://news-9cced.firebaseio.com/post.json",
      post
    );
    console.log("response ----> ", response);

    this.setState(prev => {
      return {
        data: [post, ...prev.data]
      };
    });

    this.fetchPost();
  };

  deletePost = async id => {
    console.log("delete", id);
    try {
      const del = await axios.delete(
        `https://news-9cced.firebaseio.com/post/${id}.json`
      );
      console.log(del);
    } catch (e) {
      console.log(e);
    }

    this.setState(prevState => {
      return {
        data: prevState.data.filter(post => post.id !== id)
      };
    });
  };

  fetchPost = async () => {
    try {
      const response = await axios.get(
        "https://news-9cced.firebaseio.com/post.json"
      );

      const post = Object.keys(response.data)
        .map(post => ({
          ...response.data[post],
          id: post
        }))
        .reverse();

      this.setState({
        data: post
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = async () => {
    console.log("componentDidMount first");
    this.fetchPost();
  };

  onHandleShowAll = () => {
    this.setState({
      isChange: false
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
