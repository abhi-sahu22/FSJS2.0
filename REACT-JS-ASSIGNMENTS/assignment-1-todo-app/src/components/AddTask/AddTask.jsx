import React from "react";
import "./AddTask.css";

const AddTask = ({ changeHandler, onSubmitHandler, todo }) => {
  return (
    <div className="addFormDiv">
      <form onSubmit={onSubmitHandler}>
        <input
          className="addTaskInput"
          type="text"
          onChange={changeHandler}
          value={todo}
          required
          autoFocus
          maxLength={35}
          placeholder="Enter the task (Character Limit - 40)"
        />
        <button className="first">➕</button>
      </form>
    </div>
  );
};

export default AddTask;
