import { useState } from "react";
import "./App.css";
//Custom Components
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import EditForm from "./components/EditForm/EditForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          text: todo.trim(),
          checked: false,
          id: Date.now(),
        },
      ]);
    }
    setTodo("");
  };
  //&==================================
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  //^==================================

  function deleteTask(id) {
    setTodos(todos.filter((t) => t.id !== id));
    setIsEditing(false)
  }

  function toggleCheck(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  }

  //&==================================
  //Editing form-input change in edit form
  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }
  //Editing form-submit in edit form
  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }
  //Editing and updating
  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      console.log(updatedTodo);
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }
  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
    console.log({currentTodo})
  }
  //^==================================

  return (
    <div className="app">
      <div className="container">
        <h1>Todo App</h1>
        <p>Add something! (Maximum 8)</p>
        <p>Add, Read, Edit & Delete</p>
        {isEditing ? (
          <EditForm
            currentTodo={currentTodo}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
        ) : (
          <AddTask
            changeHandler={changeHandler}
            onSubmitHandler={submitHandler}
            todo={todo}
          />
        )}
        {todos && (
          <TaskList
            p={todos}
            r={deleteTask}
            s={toggleCheck}
            onEditClick={handleEditClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
