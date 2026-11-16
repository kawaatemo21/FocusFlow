import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import useTasks from "./hooks/useTasks";
import backgroundImage from "./assets/focusflow-background.png";

function App() {
  const {
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
  } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title.trim(), description.trim(), priority);

    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-fixed text-white px-6 py-10 md:px-12"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.90)), url(${backgroundImage})`,
      }}
    >
      <Header />

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">My Tasks</h2>

        <Dashboard tasks={taskList} />

        <TaskForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          priority={priority}
          setPriority={setPriority}
          handleSubmit={handleSubmit}
        />

        <FilterButtons filter={filter} setFilter={setFilter} />

        <SearchBar search={search} setSearch={setSearch} />

        {filteredTasks.length > 0 ? (
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ) : (
          <p className="text-slate-400 text-center py-8">
            {taskList.length === 0
              ? "No tasks yet. Add your first task!"
              : "No tasks match your search or filter."}
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
