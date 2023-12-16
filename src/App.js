import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Todo from "./components/Todo";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [allTags, setAllTags] = useState(
    JSON.parse(localStorage.getItem("allTags")) || []
  );
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const updateTags = async () => {
      let tags = [];
      tasks.forEach((task) => {
        task.tags.forEach((tag) => {
          if (!tags.includes(tag.toLowerCase())) tags.push(tag.toLowerCase());
        });
      });
      setAllTags(tags);
      localStorage.setItem("allTags", JSON.stringify(tags));
    };
    updateTags();
  }, [tasks]);

  return (
    <div
      className={`App container mx-auto shadow-lg shadow-gray-400 rounded-lg px-4 py-2 mt-3`}
    >
      <Header />
      <InputForm
        tasks={tasks}
        setTasks={setTasks}
        allTags={allTags}
        setAllTags={setAllTags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <React.Fragment>
        <h5 className="my-3 text-lg sm:text-xl font-bold text-center bg-green-300 py-1 rounded-md">
          🐎 Tasks to Complete
        </h5>
        {
          (tasks.filter(item => item.status === "todo").length === 0)
            ? <h2 className="text-sm my-1 py-1 px-2 font-semibold select-none" align="center">No Tasks Found</h2>
            : (
              <ul className="list-none max-h-96 overflow-auto scrollbar-hide">
                {tasks.map((item, index) => {
                  if (
                    item.status === "todo" &&
                    (selectedTag === "" || item.tags.includes(selectedTag))
                  ) {
                    return (
                      <Todo
                        key={index}
                        index={index}
                        item={item}
                        setTasks={setTasks}
                        tasks={tasks}
                        done={false}
                        setSelectedTag={setSelectedTag}
                      />
                    );
                  }
                  return null;
                })}
              </ul>
            )
        }

        <h5 className="my-3 text-lg sm:text-xl font-bold text-center bg-green-300 py-1 rounded-md">
          ✅ Completed tasks
        </h5>
        {
          (tasks.filter(item => item.status !== "todo").length === 0)
            ? <h2 className="text-sm my-1 py-1 px-2 font-semibold select-none" align="center">No Tasks Found</h2>
            : (
              <ul className="list-none max-h-96 overflow-auto scrollbar-hide">
                {tasks.map((item, index) => {
                  if (
                    item.status !== "todo" &&
                    (selectedTag === "" || item.tags.includes(selectedTag))
                  ) {
                    return (
                      <Todo
                        key={index}
                        index={index}
                        item={item}
                        setTasks={setTasks}
                        tasks={tasks}
                        done={true}
                        setSelectedTag={setSelectedTag}
                      />
                    );
                  }
                  return null;
                })}
              </ul>
            )
        }
      </React.Fragment>
    </div>
  );
}

export default App;
