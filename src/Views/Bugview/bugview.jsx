import React from "react";
import viewsection from "./component/bugviewsection";
import Bugmodel from "../../Models/bugmodel";
import "./bugview.css";
export default (props) => {
  const bug = new Bugmodel(props.bug);
  return (
    <div className="bug-view">
      <h1>{props.bug.name}</h1>
      <viewsection title="Details" info={bug.details} />
      <viewsection title="Steps" info={bug.steps} />
      <viewsection title="Priority" info={bug.priority} />
      <viewsection title="Creator" info={bug.cretaor} />
      <viewsection title="App Version" info={bug.version} />
      <viewsection title="Time Created" info={bug.time} />
    </div>
  );
};
