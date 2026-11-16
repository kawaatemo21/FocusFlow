function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-lg bg-slate-700 border border-slate-600 p-3 text-white mb-6"
    />
  );
}

export default SearchBar;
