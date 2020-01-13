import React from "react";
import css from "./wrapper.module.css";

const Wrapper = props => (
  <li
    style={{ ...props.style }}
    className={(props.style, css.defaultContainer)}
  >
    {props.children}
  </li>
);

export default Wrapper;
