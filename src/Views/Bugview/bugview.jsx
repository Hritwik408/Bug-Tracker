import React, { useState } from "react";

import viewsection from "./component/bugviewsection";
import Bugmodel from "../../Models/bugmodel";
import { useDispatch } from "react-redux";
import { markcomplete } from "../../Controllers/Redux/bugslice";
import editpanel from "../editdelete/editpanel";
import editBug from "../bugcreate/edit/bugForm";
import "./bugview.css";

export default (props) => {
  const dispatch = useDispatch();
  const bug = new Bugmodel(props.bug);
  const [displayEdit, setdisplayEdit] = useState(false);
  function editClicked() {
    setdisplayEdit(!displayEdit);
  }
  function deleteClicked() {}

  return (
    <>
      <div className="bug-view">
        <editpanel editClicked={editClicked} deleteclicked={deleteClicked} />
        <button onclick={props.clicked} className="close-btn">
          Close
        </button>
        <h1>{bug.name}</h1>
        <viewsection title="Details" info={bug.details} />
        <viewsection title="Steps" info={bug.steps} />
        <viewsection title="Priority" info={bug.priority} />
        <viewsection title="Creator" info={bug.cretaor} />
        <viewsection title="App Version" info={bug.version} />
        <viewsection title="Time Created" info={bug.time} />
        <button
          onclick={() => {
            dispatch(markcomplete());
          }}
        >
          Mark Complete
        </button>
      </div>
      {displayEdit && (
        <editBug title="Edit Bug" bug={bug} close={editClicked} />
      )}
    </>
  );
};
