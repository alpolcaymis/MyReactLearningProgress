import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  //I put these numbers to understand when useEffect function is run.
  //When App start, useEffect will run after and only once will run.
  //When Re-evaluation, useEffect won't run cause dependencies not changed.
  //But first time it will run regardless of dependencies.
  //And we know; useState triggers re-evaluation.
  console.log("1");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    console.log("4");
    if (storedUserLoggedInInformation === "1") {
      console.log("2");
      setIsLoggedIn(true);
      console.log("3");
    }
  }, []);

  console.log("5");

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
