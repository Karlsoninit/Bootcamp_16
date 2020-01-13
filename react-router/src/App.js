import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import "./App.css";

const App = () => {
  const router = useRoutes(true);
  return <Router>{router}</Router>;
};

export default App;
