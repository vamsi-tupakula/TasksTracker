import React from "react";

export default function Todo(props) {
  const markCompleted = () => {
    const lists = [...props.tasks];
    lists[props.index].status = "done";
    props.setTasks(lists);
  };

  const deleteTask = () => {
    const my_tasks = [...props.tasks];
    props.setTasks(my_tasks.filter((item, index) => index !== props.index));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center pb-3">
      <p>
        <div className="d-flex flex-column">
          <p className="task-text pl-4">{props.item.task}</p>
          <div className="tags d-flex align-items-start flex-wrap w-100">
            {props.item.tags.slice(0, 3).map((tag, index) => {
              return (
                <span
                  key={index}
                  className="tag mt-2"
                  onClick={() => props.setSelectedTag(tag)}
                >
                  {tag.toUpperCase()}
                </span>
              );
            })}
          </div>
        </div>
      </p>
      <button
        type="button"
        className={`btn btn-${props.done ? "danger" : "success"} h-75`}
        onClick={props.done ? deleteTask : markCompleted}
      >
        {props.done === true ? "Delete" : "Done"}
      </button>
    </li>
  );
}
