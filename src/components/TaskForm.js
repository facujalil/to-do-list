import React, { useState } from "react";
import "../css/TaskForm.css";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addTask } from "../store/tasksSlice";

function TaskForm() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input !== "") {
      const newTask = {
        id: uuid(),
        text: input,
        completed: false,
      };
      dispatch(addTask(newTask));
    }
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-content">
        <input
          type="text"
          name="task"
          value={input}
          autoComplete="off"
          placeholder="Agregar tarea..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button>+</button>
      </div>
    </form>
  );
}

export default TaskForm;
