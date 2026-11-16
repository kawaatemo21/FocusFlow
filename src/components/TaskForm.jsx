function TaskForm({
  title,
  setTitle,
  description,
  setDescription,
  priority,
  setPriority,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-4 sm:p-6 rounded-xl mb-8"
    >
      <h3 className="text-xl font-semibold mb-4">Add a New Task</h3>

      <input
        type="text"
        placeholder="Task title"
        className="w-full rounded-lg bg-slate-700 border border-slate-600 p-3 text-white mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded-lg bg-slate-700 border border-slate-600 p-3 text-white mb-4"
        rows="3"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full rounded-lg bg-slate-700 border border-slate-600 p-3 text-white mb-4"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button
        type="submit"
        className="w-full rounded-lg bg-cyan-500 px-4 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
