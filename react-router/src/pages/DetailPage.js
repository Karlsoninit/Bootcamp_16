import React, { Component } from "react";

const data = props => props.history.location.state.data;

const articleId = props => props.history.location.state.id;

class DetailPage extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const news = data(this.props);
    const id = articleId(this.props);

    const d = news.find(({ publishedAt }) => publishedAt === id);
    console.log(d);
    this.setState({ article: d });
  }

  back = () => {
    this.props.history.push("/news");
  };

  render() {
    const {
      article: { author, title, description }
    } = this.state;
    return (
      <div>
        <h2>{author}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={this.back}>Back</button>
      </div>
    );
  }
}

export default DetailPage;
