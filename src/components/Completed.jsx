import React from "react";

export default function Completed(props) {
  const deleteTask = () => {
    const my_tasks = [...props.tasks];
    props.setTasks(my_tasks.filter((item, index) => index !== props.index));
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-center">
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck1"
        autoComplete="off"
      />
      <p>{props.task}</p>
      <button type="button" className="btn btn-danger" onClick={deleteTask}>
        Delete
      </button>
    </li>
  );
}
