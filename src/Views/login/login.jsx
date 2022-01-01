import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../Controllers/Redux/authslice";
import "./login.css";

export default () => {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    name: "",
    password: ""
  });

  function inputchanged(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  }

  function submit(e) {
    dispatch(signIn(formInput));
    e.preventDefault();
  }

  return (
    <div className="loginbg">
      <form className="login-panel">
        <h1>login:</h1>
        <input
          name="name"
          placeholder="Name"
          onChange={inputchanged}
          value={formInput.name}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={inputchanged}
          value={formInput.password}
        ></input>
        <button type="submit" onclick={submit}>
          login
        </button>
      </form>
    </div>
  );
};
