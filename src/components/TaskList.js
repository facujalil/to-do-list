import React, { useEffect } from "react";
import "../css/TaskList.css";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../utils/localStorage";
import { clearList } from "../store/tasksSlice";
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    setItem("tasks", tasks);
  }, [tasks]);

  return (
    <>
      <TaskForm />

      {tasks.length > 0 ? (
        <>
          <ul>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </ul>

          <div className="clear-list-button-container">
            <button
              className="clear-list-button"
              onClick={() => dispatch(clearList([]))}
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
