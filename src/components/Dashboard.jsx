function Dashboard({ tasks }) {
  const totalTasks = tasks.length;

  const openTasks = tasks.filter((task) => task.status === "Open").length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-slate-800 p-5 rounded-xl">
        <p className="text-slate-400">Total Tasks</p>
        <h3 className="text-3xl font-bold text-white">{totalTasks}</h3>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <p className="text-slate-400">Open Tasks</p>
        <h3 className="text-3xl font-bold text-cyan-400">{openTasks}</h3>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl">
        <p className="text-slate-400">Completed Tasks</p>
        <h3 className="text-3xl font-bold text-green-400">{completedTasks}</h3>
      </div>
    </div>
  );
}

export default Dashboard;
