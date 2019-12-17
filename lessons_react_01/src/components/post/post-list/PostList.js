import React from "react";
import styled from "./postList.module.css";

const PostList = ({ text, id, img }) => {
  return (
    <>
      <h2>{text}</h2>
      <img className={styled.image} src={img} alt={id} />
    </>
  );
};

export default PostList;
