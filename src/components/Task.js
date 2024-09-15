import React from "react";
import "../css/Task.css";

function Task({ task, dispatch }) {
  return (
    <li>
      <button
        className="toggle-completion-button"
        onClick={() =>
          dispatch({ type: "toggle_task_completion", payload: task.id })
        }
      >
        {task.completed ? "✓" : null}
      </button>
      <p className={task.completed ? "completed" : null}>{task.text}</p>
      <button
        className="delete-button"
        onClick={() => dispatch({ type: "delete_task", payload: task.id })}
      >
        <i className="material-symbols-outlined">delete</i>
      </button>
    </li>
  );
}

export default Task;
