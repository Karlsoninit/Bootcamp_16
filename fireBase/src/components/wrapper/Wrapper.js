import React from "react";
import css from "./wrapper.module.css";

const Wrapper = props => {
  // console.log("props in Wrapper --> ", props);
  // const defaultStyle = {
  //   color: props.style ? "white" : "black"
  // };

  return (
    <li
      style={{ ...props.style }}
      className={(props.style, css.defaultContainer)}
    >
      {props.children}
    </li>
  );
};

export default Wrapper;
