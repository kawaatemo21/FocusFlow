function TaskItem({ task, onToggle, onDelete }) {
  return (
    <article
      className={`border rounded-xl p-4 sm:p-6 shadow-lg transition duration-300 ${
        task.status === "Completed"
          ? "bg-slate-900 border-green-800 opacity-70"
          : "bg-slate-800 border-slate-700 hover:border-cyan-400 hover:shadow-cyan-400/10"
      }`}
    >
      <h3 className="text-lg font-semibold text-white mb-2">{task.title}</h3>

      <p className="text-slate-400 mb-3">{task.description}</p>

      <p className="text-sm font-medium text-amber-400 mb-2">
        Priority: {task.priority}
      </p>

      <p className="text-sm text-slate-300">Status: {task.status}</p>
      <button
        onClick={onToggle}
        className="mt-4 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
      >
        {task.status === "Open" ? "Complete" : "Reopen"}
      </button>
      <button
        onClick={onDelete}
        className="mt-4 ml-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-400"
      >
        Delete
      </button>
    </article>
  );
}
export default TaskItem;
