import React, { Component } from "react";
import axios from "axios";
import shortId from "shortid";
import Post from "../components/post/Post";
import { DATA } from "./data";
import Form from "./form/Form";
import Default from "./default/Default";
import Select from "../components/select/Select";

class App extends Component {
  state = {
    data: [],
    news: [],
    select: null,
    change: [],
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
  };

  getNews = async (param = "Tokio") => {
    const data = await axios.get(
      `https://newsapi.org/v2/everything?q=${param}&apiKey=86efb1d9e5074721b8f151f282c7bcf7`
    );

    console.log("----", data.data.articles);

    const newData = data.data.articles.map(elem => ({
      id: shortId.generate(),
      text: elem.title,
      img: elem.urlToImage
    }));

    console.log("newData --->", newData);

    this.setState({
      news: data.data.articles,
      data: newData
    });

    return newData;
  };

  deletePost = async id => {
    const del = await axios.delete(
      `https://news-9cced.firebaseio.com/post/${id}.json`
    );

    console.log(del);
    this.setState(prevState => {
      return {
        data: prevState.data.filter(post => post.id !== id),
        change: prevState.change.filter(post => post.id !== id)
      };
    });
  };

  componentDidMount = async () => {
    try {
      console.log("componentDidMount first");

      const response = await axios.get(
        "https://news-9cced.firebaseio.com/post.json"
      );

      console.log("response --> ", response.data);

      const post = Object.keys(response.data).map(post => ({
        ...response.data[post],
        id: post
      }));

      console.log("post -->", post);

      // localStorage.setItem("data", JSON.stringify(DATA));

      // const data = await this.getNews();
      this.setState({
        data: post
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props, "<- props ->", prevProps);
    if (this.state.select !== prevState.select) {
      console.log(this.state.select, "<- state ->", prevState.select);
      // console.log("in componentDidUpdate", this.state.news);
      this.getNews(this.state.select);
      // console.log("response");
      // this.setState({
      //   change: this.state.data.filter(post => post.text === this.state.select),
      //   isChange: true
      // });
    }
  }

  options = () => {
    return DATA.map(elem => ({
      value: elem.text,
      label: elem.text
    }));
  };

  onHandleChange = value => {
    console.log(value);
    this.setState({
      select: value
    });
  };

  onHandleShowAll = () => {
    this.setState({
      isChange: false
    });
  };

  render() {
    console.log("re-render");
    const { data, news, change, isChange } = this.state;
    console.log(news);
    return (
      <>
        <Form getPost={this.getPost} />
        <button type="button" onClick={this.onHandleShowAll}>
          ALL
        </button>
        <Select onHandleChange={this.onHandleChange} options={this.options()} />
        {data.length !== 0 ? (
          <>
            <Post
              deletePost={this.deletePost}
              data={isChange ? change : data}
            />
          </>
        ) : (
          <Default />
        )}
      </>
    );
  }
}

export default App;
