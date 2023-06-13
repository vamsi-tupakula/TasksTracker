import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Todo from "./components/Todo";
import Completed from "./components/Completed";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    // if (tasks === []) {
    //   JSON.parse(localStorage.setItem("tasks"));
    // }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container pb-4 shadow rounded-4 App">
      <Header />
      <InputForm tasks={tasks} setTasks={setTasks} />
      {tasks.length === 0 ? "" : <h5 className="my-3">🐎 Tasks to Complete</h5>}
      <ul className="list-group">
        {tasks.map((item, index) => {
          if (item.status === "todo") {
            return (
              <Todo
                key={index}
                index={index}
                task={item.task}
                setTasks={setTasks}
                tasks={tasks}
              />
            );
          }
          return null;
        })}
      </ul>
      {tasks.length === 0 ? "" : <h5 className="my-3">✅ Completed tasks</h5>}
      <ul className="list-group">
        {tasks.map((item, index) => {
          if (item.status !== "todo") {
            return (
              <Completed
                key={index}
                index={index}
                task={item.task}
                setTasks={setTasks}
                tasks={tasks}
              />
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default App;
