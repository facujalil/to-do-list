import React, { useEffect, useReducer } from "react";
import "../css/TaskList.css";
import { getItem, setItem } from "../utils/localStorage";
import TaskForm from "./TaskForm";
import Task from "./Task";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_task":
      return [action.payload, ...state];
    case "toggle_task_completion":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    case "delete_task":
      return state.filter((item) => item.id !== action.payload);
    case "clear_all":
      return [];
    default:
      return state;
  }
};

const initialState = getItem("tasks") || [];

function TaskList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setItem("tasks", state);
  }, [state]);

  return (
    <>
      <TaskForm dispatch={dispatch} />

      {state.length > 0 ? (
        <>
          <ul>
            {state.map((task) => (
              <Task key={task.id} task={task} dispatch={dispatch} />
            ))}
          </ul>

          <div className="clear-list-button-container">
            <button
              className="clear-list-button"
              onClick={() => dispatch({ type: "clear_all" })}
            >
              Limpiar Todo
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default TaskList;
