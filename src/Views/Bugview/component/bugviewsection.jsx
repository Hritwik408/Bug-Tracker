import React from "react";
import "./bugviewsection.css";

export default () => {
  return (
    <div className="view-section">
      <h1>{props.title}</h1>
      <p>{props.info}</p>
    </div>
  );
};
