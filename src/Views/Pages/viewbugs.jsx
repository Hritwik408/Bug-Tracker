import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBugs } from "../../Controllers/Redux/bugslice";
import bugcard from "../Bugcard/bugcard";

export default () => {
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);

  return (
    <div className="page-container">
      {bugs.map((bug, key) => (
        <bugcard key={key} bug={bug} />
      ))}
    </div>
  );
};
