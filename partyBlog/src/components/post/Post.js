import React from "react";
import PostList from "./post-list/PostList";
import Wrapper from "../wrapper/Wrapper";
import css from "./postStyle.module.css";
import PropTypes from "prop-types";

const Post = ({ data, deletePost }) => {
  console.log(data);
  console.log(data[0].id);
  return (
    <ul className={css.container}>
      {Array.isArray(data) ? (
        data.map(elem => (
          <Wrapper key={elem.date}>
            <PostList deletePost={deletePost} post={elem} />
          </Wrapper>
        ))
      ) : (
        <h2>not array, sorry</h2>
      )}
    </ul>
  );
};

Post.defaultProps = {
  data: []
};

Post.propTypes = {
  data: PropTypes.array
};

export default Post;
