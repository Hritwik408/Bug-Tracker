import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/login/login";
import Sidebar from "./Views/sidebar/sidebar";
import viewBugPage from "./Views/Pages/viewbugs";
import createBug from "./Views/bugcreate/edit/bugForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboard from "./Views/Pages/Dashboard/dashboard";

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
            <Route path="/" exact>
              <dashboard />
            </Route>
            <Route path="/viewbugs">
              <viewBugPage />
            </Route>
            <Router path="/create">
              <div className="page-container">
                <createBug title="Create Bug" />
              </div>
            </Router>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
