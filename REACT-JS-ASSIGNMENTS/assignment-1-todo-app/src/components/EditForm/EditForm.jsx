import React from 'react'
import "./EditForm.css"

function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit
}) {
  return (
    <form className="editForm" onSubmit={onEditFormSubmit}>
      <label htmlFor="updateTodo"></label>
      <input
        name="updateTodo"
        type="text"
        placeholder="Update todo"
        value={currentTodo.text}
        onChange={onEditInputChange}
        autoFocus
      />
      <div className="editButtonDiv">
        <button type="submit" onClick={onEditFormSubmit}>
          📝
        </button>
        <button onClick={() => setIsEditing(false)}>❌</button>
      </div>
    </form>
  );
}

export default EditForm