import React, { useState } from "react";
import "./bugForm.css";
import Bugmodel from "../../../Models/bugmodel";

export default (props) => {
  const [bugObject, setBugObject] = useState(new Bugmodel(props.bug));

  function inputChanged(e) {
    setBugObject({
      ...bugObject,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="bug-create">
      {props.title === "Edit Bug" && (
        <button className="close-btn" onClick={props.close}>
          close
        </button>
      )}
      <h1>{props.title}</h1>
      <form>
        <label>Name:</label>
        <input
          type="name"
          placeholder="Bug NAME"
          required
          onChange={inputChanged}
          value={bugObject.name}
        ></input>
        <label>Details:</label>
        <textarea
          name="details"
          placeholder="detailed descriptiion on the bug"
          requiredonChange={inputChanged}
          value={bugObject.details}
        ></textarea>
        <label>Steps:</label>
        <textarea
          name="steps"
          placeholder="steps to recreate the bug"
          required
          onChange={inputChanged}
          value={bugObject.steps}
        ></textarea>
        <label>priority</label>
        <select
          name="priority"
          required
          onChange={inputChanged}
          value={bugObject.priority}
        >
          <option value="1">high</option>
          <option value="1">mid</option>
          <option value="1">low</option>
        </select>
        <label>Assigned</label>
        <select
          name="assigned"
          required
          onChange={inputChanged}
          value={bugObject.assigned}
        >
          <option value="Hriwik verma"></option>
        </select>
        <label>version</label>
        <input
          name="version"
          placeholder="application version"
          required
          onChange={inputChanged}
          value={bugObject.version}
        ></input>
        <button type="submit">{props.title}</button>
        <textarea name="data"></textarea>
      </form>
    </div>
  );
};
