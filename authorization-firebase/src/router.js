import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const useRouter = isAthorization => {
  console.log(isAthorization);
  if (isAthorization) {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" component={Register} />

      <Redirect to="/login" />
    </Switch>
  );
};
