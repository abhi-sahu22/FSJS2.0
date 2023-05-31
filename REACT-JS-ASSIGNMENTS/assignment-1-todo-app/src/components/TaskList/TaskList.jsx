import React from 'react'
import Task from '../Task/Task'
import "./TaskList.css"



const TaskList = ({ p, r, s, onEditClick }) => {
  return (
    <ul className="unOrdered">
      {p.map((el) => (
        <Task
          key={el.id}
          q={el}
          removeTask={r}
          changeToggle={s}
          onEditClick={onEditClick}
        />
      ))}
    </ul>
  );
};

export default TaskList