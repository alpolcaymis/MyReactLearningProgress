import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

//I put these numbers to understand when useEffect function is run.
//When App start, useEffect will run after and only once will run.
//When Re-evaluation, useEffect won't run cause dependencies not changed.
//But first time it will run regardless of dependencies.
//And we know; useState triggers re-evaluation.
