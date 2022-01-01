import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/login/login";

//import './App.css';

function App() {
  const { auth } = useSelector((state) => state);
  return <>{!auth.Loggedin ? <Login /> : <h1>hello</h1>}</>;
}

export default App;
