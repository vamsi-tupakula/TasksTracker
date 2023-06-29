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
    <li
      className={`list-group-item d-flex justify-content-between align-items-center pb-3 bg-${
        props.theme
      } text-${props.theme === "light" ? "dark" : "light"}`}
    >
      <p>
        <div className="d-flex flex-column">
          <p className="task-text pl-4">{props.item.task}</p>
          <div className="tags d-flex align-items-start flex-wrap w-100">
            {props.item.tags !== undefined &&
              props.item.tags.slice(0, 3).map((tag, index) => {
                return (
                  <span
                    key={index}
                    className={`tag mt-2 bg-${
                      props.theme === "light" ? "dark" : "light"
                    } text-${props.theme} fw-semibold`}
                    onClick={() => props.setSelectedTag(tag)}
                  >
                    {tag.toUpperCase()}
                  </span>
                );
              })}
          </div>
        </div>
      </p>
      <div className="btn-group">
        {props.done !== true ? (
          <button
            type="button"
            className={`btn fs-4 text-danger h-75`}
            onClick={deleteTask}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        ) : (
          ""
        )}
        <button
          type="button"
          className={`btn fs-4 text-${props.done ? "danger" : "primary"} h-75`}
          onClick={props.done ? deleteTask : markCompleted}
        >
          {props.done === true ? (
            <i className="fa-solid fa-trash"></i>
          ) : (
            <i className="fa-regular fa-circle-check"></i>
          )}
        </button>
      </div>
    </li>
  );
}
