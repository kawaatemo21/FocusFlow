import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import tasks from "../data/tasks";
function useTasks() {
  const [taskList, setTaskList] = useLocalStorage("focusflow-tasks", tasks);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const addTask = (title, description, priority) => {
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      priority: priority,
      status: "Open",
    };

    setTaskList([...taskList, newTask]);
  };
  const filteredTasks = taskList.filter((task) => {
    const matchesFilter = filter === "All" || task.status === filter;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });
  const toggleTask = (id) => {
    setTaskList(
      taskList.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Open" ? "Completed" : "Open",
            }
          : item,
      ),
    );
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };
  return {
    taskList,
    title,
    setTitle,
    description,
    setDescription,
    priority,
    setPriority,
    filter,
    setFilter,
    search,
    setSearch,
    filteredTasks,
    addTask,
    toggleTask,
    deleteTask,
  };
}
export default useTasks;
