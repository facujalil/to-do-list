import React from "react";
import "../css/Task.css";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../store/tasksSlice";

function Task({ task }) {
  const dispatch = useDispatch();

  return (
    <li>
      <button
        className="complete-button"
        onClick={() => dispatch(completeTask(task.id))}
      >
        {task.completed ? "✓" : null}
      </button>
      <p className={task.completed ? "completed" : null}>{task.text}</p>
      <button
        className="delete-button"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        <i className="material-symbols-outlined">delete</i>
      </button>
    </li>
  );
}

export default Task;
