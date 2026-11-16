function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
      <button
        onClick={() => setFilter("All")}
        className={
          filter === "All"
            ? "bg-cyan-500 text-slate-950 px-4 py-2 rounded-lg"
            : "bg-slate-700 text-white px-4 py-2 rounded-lg"
        }
      >
        All
      </button>

      <button
        onClick={() => setFilter("Open")}
        className={
          filter === "Open"
            ? "bg-cyan-500 text-slate-950 px-4 py-2 rounded-lg"
            : "bg-slate-700 text-white px-4 py-2 rounded-lg"
        }
      >
        Open
      </button>

      <button
        onClick={() => setFilter("Completed")}
        className={
          filter === "Completed"
            ? "bg-cyan-500 text-slate-950 px-4 py-2 rounded-lg"
            : "bg-slate-700 text-white px-4 py-2 rounded-lg"
        }
      >
        Completed
      </button>
    </div>
  );
}
export default FilterButtons;
