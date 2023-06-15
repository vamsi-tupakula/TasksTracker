import React from "react";

export default function Completed(props) {
  const deleteTask = () => {
    const my_tasks = [...props.tasks];
    props.setTasks(my_tasks.filter((item, index) => index !== props.index));
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
      <button type="button" className="btn btn-danger" onClick={deleteTask}>
        Delete
      </button>
    </li>
  );
}
