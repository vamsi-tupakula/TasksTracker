import React, { useState } from "react";

export default function InputForm(props) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    var new_task = {
      task: todo,
      status: "todo",
    };

    props.setTasks([...props.tasks, new_task]);
    setTodo("");
  };

  return (
    <div className="input-group mb-3 w-4">
      <input
        type="text"
        className="form-control"
        placeholder="Water the plants......"
        aria-label="todo"
        aria-describedby="button-addon2"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={addTodo}
      >
        Add Todo
      </button>
    </div>
  );
}
