import { useState } from "react";
import { products } from "../../data/productsData";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-[420px]">
      
      <div className="flex border rounded overflow-hidden">
        <input
          type="text"
          placeholder="type to search"
          className="flex-1 px-4 py-2 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-red-600 text-white px-6">
          Search
        </button>
      </div>

      {/* LIVE SEARCH DROPDOWN */}
      {query && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50">
          {results.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default SearchBar;
