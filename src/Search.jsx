function Search({ search, setSearch, searchHandler }) {
  return (
    <div className="w-[100px] flex gap-2 ml-11 mb-7">
      <input
        className="border-solid border-blue-500 border-2 p-3 rounded-md"
        type="text"
        placeholder="جستجو"
        value={search}
        onChange={(e) => setSearch(e.target.value.trim())}
      />
      <button
        onClick={searchHandler}
        className="bg-blue-500 rounded-md text-white px-4  leading-[50px] text-center "
      >
        search
      </button>
    </div>
  );
}

export default Search;
