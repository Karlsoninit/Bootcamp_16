import React, { Component } from "react";
import axios from "axios";
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
    isChange: false,
    rend: false
  };

  getPost = post => {
    this.setState(prev => {
      return {
        data: [post, ...prev.data]
      };
    });
  };

  getNews = () => {
    return axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7"
      )
      .then(data => {
        this.setState({
          news: data.data.articles
        });
      });
  };

  deletePost = id => {
    this.setState(prevState => {
      return {
        data: prevState.data.filter(post => post.id !== id),
        change: prevState.change.filter(post => post.id !== id)
      };
    });
  };

  componentDidMount() {
    console.log("componentDidMount");

    this.setState({
      data: DATA
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props, "<- props ->", prevProps);
    console.log(this.state, "<- state ->", prevState);
    if (this.state.select !== prevState.select) {
      this.getNews();
      console.log("response");
      this.setState({
        change: this.state.data.filter(post => post.text === this.state.select),
        isChange: true,
        rend: true
      });
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
