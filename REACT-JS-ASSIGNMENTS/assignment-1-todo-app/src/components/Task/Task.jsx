import React, { useState } from "react";
import "./Task.css";


const Task = ({ q, removeTask, changeToggle, onEditClick }) => {
  const [isChecked, setIsChecked] = useState(q.checked);
  function checkHandler(e) {
    setIsChecked(!isChecked);
    changeToggle(q.id);
  }
  return (
    <li style={{ listStyleType: "none" }}>
      <div
        className="taskPanel"
        style={
          isChecked == false
            ? { marginBottom: "3px", position: "relative" }
            : {
                marginBottom: "3px",
                position: "relative",
                color: "#000000",
                background: "grey",
              }
        }
      >
        <div className="check-label">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={checkHandler}
            name={q.text}
            id={q.id}
          />
          <label
            style={
              isChecked == false
                ? { position: "relative" }
                : { color: "pink" }
            }
            htmlFor={q.id}
          >
            {q.text}
          </label>
        </div>

        <div className="task-button-div">
          <button onClick={() => onEditClick(q)}>📝</button>
          <button onClick={() => removeTask(q.id)}>🗑️</button>
        </div>
      </div>
    </li>
  );
};

export default Task;
