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
      className={`flex justify-between align-middle my-1 py-2 px-3 border-2 rounded-md shadow-sm shadow-gray-300 hover:shadow-gray-400`}
    >
      <div className="flex flex-col gap-y-1">
        <p className="text-lg font-semibold">{props.item.task}</p>
        <div className="flex align-start flex-wrap w-100 gap-x-2">
          {props.item.tags !== undefined &&
            props.item.tags.slice(0, 3).map((tag, index) => {
              return (
                <span
                  key={index}
                  className={`text-sm my-1 py-1 px-2 bg-gray-300 hover:bg-gray-400 rounded-md cursor-pointer font-semibold select-none`}
                  onClick={() => props.setSelectedTag(tag)}
                >
                  {tag.toUpperCase()}
                </span>
              );
            })}
        </div>
      </div>
      <div className="btn-group flex gap-x-4 text-xl pr-2">
        {props.done !== true ? (
          <button type="button" className={`btn`} onClick={deleteTask}>
            <i className="fa-solid fa-trash text-red-600 hover:text-red-700"></i>
          </button>
        ) : (
          ""
        )}
        <button
          type="button"
          className={`btn`}
          onClick={props.done ? deleteTask : markCompleted}
        >
          {props.done === true ? (
            <i className="fa-solid fa-trash text-red-600 hover:text-red-700"></i>
          ) : (
            <i className="fa-regular fa-circle-check text-blue-400 hover:text-blue-600"></i>
          )}
        </button>
      </div>
    </li>
  );
}
