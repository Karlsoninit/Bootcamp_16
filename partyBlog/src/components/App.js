import React, { Component } from "react";
import axios from "axios";
import Post from "../components/post/Post";
import Form from "./form/Form";
// import Default from "./default/Default";
import Spinner from "../components/ui/spinner/Spinner";

axios.defaults.baseURL = "https://news-9cced.firebaseio.com";

const mobileContainer = () => ({
  mobile: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    alignItem: "center"
  }
});

class App extends Component {
  state = {
    data: [],
    isChange: false,
    loader: true,
    chooseLoader: null
  };

  getPost = async post => {
    try {
      this.setState({ loader: true, chooseLoader: "post" });
      await axios.post("/post.json", post);
      this.setState(prev => {
        return {
          data: [post, ...prev.data],
          loader: false
        };
      });
      this.fetchPost();
    } catch (e) {
      console.warn(e);
    }
  };

  deletePost = async id => {
    try {
      await axios.delete(`/post/${id}.json`);
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
      const response = await axios.get("/post.json");

      const post = Object.keys(response.data)
        .map(post => ({
          ...response.data[post],
          id: post
        }))
        .reverse();

      this.setState({
        data: post,
        loader: false
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = async () => {
    this.fetchPost();
  };

  onHandleShowAll = () => {
    this.setState({
      isChange: false
    });
  };

  render() {
    const { data, loader, chooseLoader } = this.state;
    // console.log("test loader", loader);
    const mobileStyles = mobileContainer();
    return (
      <div style={window.innerWidth < 768 ? mobileStyles.mobile : null}>
        <Form getPost={this.getPost} />
        {!loader ? (
          <>
            <Post deletePost={this.deletePost} data={data} />
          </>
        ) : (
          <Spinner chooseLoader={chooseLoader} />
        )}
      </div>
    );
  }
}

export default App;
