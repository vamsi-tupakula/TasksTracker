import React, { useState } from "react";
import Tags from "./Tags";

export default function InputForm(props) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo.length === 0) {
      return;
    }
    var arr = todo.split("@")[1];
    if (arr !== undefined) {
      arr = arr.split(",").map((item, index) => {
        return item.trim().toLowerCase();
      });
    }
    setTodo(todo.split("@")[0]);
    var new_task = {
      task: todo.split("@")[0].trim(),
      status: "todo",
      tags: arr === undefined ? [] : arr,
    };

    props.setTasks([...props.tasks, new_task]);
    setTodo("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <input
          type="text"
          className={`outline-none border-2 border-green-400 text-lg pl-3 rounded-tl-md rounded-bl-md w-4/5 sm:w-4/5`}
          placeholder="Type something to add......"
          aria-label="todo"
          aria-describedby="button-addon2"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          className="py-2 px-3 bg-green-400 hover:bg-green-500 w-1/5 sm:w-1/5 rounded-tr-md rounded-br-md text-lg font-bold"
          type="button"
          id="button-addon2"
          onClick={addTodo}
        >
          ADD
        </button>
      </div>
      <div className="mt-3">
        <p className="info">
          type @ to add tags i.e. @node will add tag as node
        </p>
        <div className="tags-container ml-1 my-2 flex gap-2 overflow-x-auto py-2">
          <Tags
            allTags={props.allTags}
            selectedTag={props.selectedTag}
            setSelectedTag={props.setSelectedTag}
            length={props.tasks.length}
          />
        </div>
      </div>
    </>
  );
}
