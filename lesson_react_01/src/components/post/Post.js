import React from "react";
import PostList from "./post-list/PostList";
import Wrapper from "../wrapper/Wrapper";
import { isArray } from "util";
import PropTypes from "prop-types";

const Post = ({ data }) => {
  console.log("dat ---> ", data);
  return (
    <ul>
      {Array.isArray(data) ? (
        data.map(elem => (
          <Wrapper key={elem.id}>
            <PostList {...elem} />
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
