import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Controllers/Redux/authslice";

export default () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  function SignOut() {
    dispatch(signOut());
  }
  return (
    <div className="sidebars">
      <link className="nav-link" to="/">
        <h1 className="brand">Bug-Tracker</h1>
      </link>
      <ul>
        <li>
          <link to="/" className="nav-link">
            Dashboard
          </link>
        </li>
        <li>
          <link to="/viewbugs" className="nav-link">
            View Bugs
          </link>
        </li>
        {auth.admin && (
          <li>
            <link to="/create" className="nav-link">
              Create Bug
            </link>
          </li>
        )}
      </ul>
      <button classname="nav-link logout" onclick={SignOut}>
        Logout
      </button>
    </div>
  );
};
