import { useEffect, useState } from "react";
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
      {tasks.length === 0 ? (
        ""
      ) : (
        <h5 className="my-3 text-xl sm:text-2xl font-bold">
          🐎 Tasks to Complete
        </h5>
      )}
      <ul className="list-none">
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
      {tasks.length === 0 ? (
        ""
      ) : (
        <h5 className="my-3 text-xl sm:text-2xl font-bold">
          ✅ Completed tasks
        </h5>
      )}
      <ul className="list-none">
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
    </div>
  );
}

export default App;
