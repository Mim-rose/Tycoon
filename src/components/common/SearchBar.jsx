import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/productsData";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Handle search button click → goes to SearchResultsPage
  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery(""); // optional: clear after navigation
    }
  };

  // Handle clicking a dropdown item → goes to ProductDetailsPage
  const handleSelect = (id) => {
    navigate(`/product/${id}`);
    setQuery(""); // clear search after navigation
  };

  // Live suggestions (optional)
  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-[420px]">
      {/* Input + Button */}
      <div className="flex border rounded overflow-hidden">
        <input
          type="text"
          placeholder="Type to search"
          className="flex-1 px-4 py-2 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-red-600 text-white px-6"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Live Search Dropdown */}
      {query && results.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50">
          {results.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(item.id)}
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