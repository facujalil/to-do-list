import React, { useState } from "react";
import "../css/TaskForm.css";
import uuid from "react-uuid";

function TaskForm({ dispatch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input !== "") {
      const newTask = {
        id: uuid(),
        text: input,
        completed: false,
      };
      dispatch({ type: "add_task", payload: newTask });
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
