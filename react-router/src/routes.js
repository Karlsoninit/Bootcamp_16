import React from "react";

import { Route, Switch, Redirect, Link } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NewsPage from "./pages/NewsPage";
import ErrorPage from "./pages/ErrorPage";
import ArticlesPage from "./pages/ArticlesPage";
import DetailPage from "./pages/DetailPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Navbar } from "./nav/Navbar";
export const useRoutes = isAuthorization => {
  if (isAuthorization) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/news" exact component={NewsPage} />
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/about" component={About} />
          <Route path="/contact">
            <Contact />
          </Route>

          <Redirect to="/news" />
        </Switch>
      </>
    );
  }

  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <Redirect to="/auth" />
    </Switch>
  );
};
