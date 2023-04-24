import React from "react";

export default function Todo(props) {
  const markCompleted = () => {
    const lists = [...props.tasks];
    lists[props.index].status = "done";
    props.setTasks(lists);
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
      <button type="button" className="btn btn-success" onClick={markCompleted}>
        Done
      </button>
    </li>
  );
}
