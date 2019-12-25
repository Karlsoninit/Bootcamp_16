import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "./input.module.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const Input = ({ label, handleValue, name, value }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label={label}
        onChange={handleValue}
        variant="outlined"
        name={name}
        className={styles.inputContainer}
        value={value}
      />
    </form>
  );
};

export default Input;
