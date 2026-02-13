const SearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white border px-4 py-2 rounded-md w-64"
      />
      <button className="bg-black text-white px-4 py-2 rounded-md">Search</button>
    </div>
  );
};

export default SearchBar;
