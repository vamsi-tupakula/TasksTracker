import React from "react";

export default function Todo(props) {
  const markCompleted = () => {
    const lists = [...props.tasks];
    lists[props.index].status = "done";
    props.setTasks(lists);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-center">
      <p>
        {props.item.task} &nbsp;{" "}
        {props.item.tags.slice(0, 3).map((tag, index) => {
          return (
            <span key={index} className="tag">
              {tag.toUpperCase()}
            </span>
          );
        })}
      </p>
      <button type="button" className="btn btn-success" onClick={markCompleted}>
        Done
      </button>
    </li>
  );
}
