import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/login/login";
import Sidebar from "./Views/sidebar/sidebar";
import viewBugPage from "./Views/Pages/viewbugs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.loggedin ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Switch>
            <Route path="/viewbugs">
              <viewBugPage />
            </Route>
            <Router path="/create"></Router>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
