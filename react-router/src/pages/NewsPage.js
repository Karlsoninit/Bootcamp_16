import React, { Component } from "react";
import axios from "axios";
import { Articles } from "../components/Articles/Articles";
class NewsPage extends Component {
  state = { news: [] };
  async componentDidMount() {
    try {
      const data = await axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7"
      );
      this.setState({ news: data.data.articles });
    } catch (e) {
      console.log("что-то пошло не так ...", e);
    }
  }
  render() {
    const { news } = this.state;
    return news.length !== 0 ? <Articles data={news} /> : <h2>loading ...</h2>;
  }
}

export default NewsPage;
