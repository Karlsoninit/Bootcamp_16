import React from "react";
import styled from "./postList.module.css";

const PostList = ({ post: { text, id, img }, deletePost }) => {
  return (
    <>
      <h2>{text}</h2>
      <img className={styled.image} src={img} alt={id} />
      <button
        onClick={() => {
          console.log(id);
          deletePost(id);
        }}
      >
        DELETE
      </button>
    </>
  );
};

export default PostList;
