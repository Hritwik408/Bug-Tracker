import React from "react";
import "./bugcard.css";

export default (props) => {
  const { name, priority, version } = props.bug;
  function clicked() {
    props.clicked(props.name);
  }

  return (
    <div className="bug-card" onclick={clicked}>
      <h2 className="name">{name}</h2>
      <h4 className="priority">{priority}</h4>
      <h5 className="version">{version}</h5>
    </div>
  );
};
