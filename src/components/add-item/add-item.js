import React from "react";

import "./add-item.css";

const AddItem = ({ todos, onAdd }) => {

  return (
    <div className="add-wrapper">
      <input className="form-control search-input" id="input-add-item"></input>
      <button
        className="btn btn-link btn-sm float-right"
        onClick={() => onAdd(`${document.getElementById("input-add-item").value}`)}
      >
        <i className="fa fa-2x fa-plus-circle"></i>
      </button>
    </div>
  );
};

export default AddItem;
