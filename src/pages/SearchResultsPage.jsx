import { useLocation } from "react-router-dom";
import { products } from "../data/productsData";
const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Search Results for: <span className="text-red-600">{query}</span>
      </h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchResultsPage;