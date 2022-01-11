import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBugs } from "../../Controllers/Redux/bugslice";
import bugcard from "../Bugcard/bugcard";
import Bugview from "../Bugview/bugview";
export default () => {
  const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
    name: "",
    isDisplayed: false
  });
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);

  function BugClicked(name) {
    SET_DISPLAY_BUG({
      isDisplayed: !DISPLAY_BUG.isdisplayed,
      name: name
    });
  }

  return (
    <div className="page-container">
      {bugs.map((bug, key) => (
        <bugcard key={key} bug={BugClicked} />
      ))}
      {DISPLAY_BUG.isDisplayed && (
        <bugview
          bug={bugs.filter((bug) => bug.name === DISPLAY_BUG.name)[0]}
          clicked={BugClicked}
        />
      )}
    </div>
  );
};
