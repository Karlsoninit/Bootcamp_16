import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./router";
import app from "./base";

const App = () => {
  const [auth, setAuth] = useState(null);
  console.log(auth);
  useEffect(() => {
    app.auth().onAuthStateChanged(setAuth);
  }, [auth]);

  const routing = useRouter(auth);
  return (
    <>
      <Router>{routing}</Router>
    </>
  );
};

export default App;
