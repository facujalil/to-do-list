import React from "react";
import "./App.css";
import CurrentDate from "./components/CurrentDate";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="app">
      <h1>To Do List</h1>

      <main>
        <section lang="es">
          <CurrentDate />
          <TaskList />
        </section>
      </main>

      <footer>
        <p>
          &copy; Coded by{" "}
          <a
            href="https://github.com/facujalil"
            target="_blank"
            rel="noreferrer"
          >
            Facundo Jalil
            <i className="fab fa-github-square" aria-hidden="true"></i>
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
