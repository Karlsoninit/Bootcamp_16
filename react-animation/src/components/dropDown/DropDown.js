import React from "react";
import styles from "./DropDown.module.css";
const DropDown = ({ data }) => (
  <div className={styles.container}>
    <ul>
      {data.map(elem => (
        <li key={elem.task}>{elem.task}</li>
      ))}
    </ul>
  </div>
);

export default DropDown;
