import React from "react";
import "./bugForm.css";

export default (props) => {
  return (
    <div className="bug-create">
      <h1>{props.title}</h1>
      <form>
        <label>Name:</label>
        <input type="name" placeholder="Bug NAME" required></input>
        <label>Details:</label>
        <textarea
          name="details"
          placeholder="detailed descriptiion on the bug"
          required
        ></textarea>
        <label>Steps:</label>
        <textarea
          name="steps"
          placeholder="steps to recreate the bug"
          required
        ></textarea>
        <label>priority</label>
        <select name="priority" required>
          <option value="1">high</option>
          <option value="1">mid</option>
          <option value="1">low</option>
        </select>
        <label>Assigned</label>
        <select name="assigned" required>
          <option value="Hriwik verma"></option>
        </select>
        <label>version</label>
        <input
          name="version"
          placeholder="application version"
          required
        ></input>
        <button type="submit">{props.title}</button>
      </form>
    </div>
  );
};
