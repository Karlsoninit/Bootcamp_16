import React from "react";
import { connect } from "react-redux";
import Input from "./components/input/inputContainer";
import ListItem from "./components/listItem/ListItem";
import { logout } from "./redux/taskActions";

function App(props) {
  return (
    <>
      <button type="button" onClick={() => props.logout()}>
        LogOut
      </button>
      <Input />
      <ListItem />
    </>
  );
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  logout
};

export default connect(null, mapDispatchToProps)(App);
