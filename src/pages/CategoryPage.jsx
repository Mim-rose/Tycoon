import { useParams, Link } from 'react-router-dom';
import { products } from '../data/productsData';
const CategoryPage = () => {
  const { type } = useParams();
  
  // Filter products by type OR by categories array
  const categoryProducts = products.filter(p => {
    // Match by type directly
    if (p.type === type) return true;
    
    // Match by categories array (for home-appliance, kitchen-appliance)
    if (type === 'home-appliance' && p.categories.includes('Home Appliance')) return true;
    if (type === 'kitchen-appliance' && p.categories.includes('Kitchen Appliance')) return true;
    
    return false;
  });

  // Get category display name
  const getCategoryName = () => {
    if (type === 'home-appliance') return 'Home Appliance';
    if (type === 'kitchen-appliance') return 'Kitchen Appliance';
    if (type === 'refrigerator') return 'Refrigerator';
    if (type === 'tv') return 'Television';
    if (type === 'fan') return 'Fans';
    if (type === 'rice-cooker') return 'Rice Cookers';
    if (type === 'mixer-grinder') return 'Mixer Grinders';
    if (type === 'pressure-cooker') return 'Pressure Cookers';
    if (type === 'air-conditioner') return 'Air Conditioner';
    if (type === 'accessories') return 'Accessories';
    
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (categoryProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          No products found in "{getCategoryName()}"
        </h2>
        <p className="text-gray-600 mb-6">
          Check back later or browse other categories
        </p>
        <Link to="/" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
          Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-3 opacity-90">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>{getCategoryName()}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">{getCategoryName()}</h1>
          <p className="text-lg mt-2">{categoryProducts.length} products available</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden bg-gray-50">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                {!product.inStock && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Out of Stock
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-10">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-red-600">{formatPrice(product.price)}</p>
                  <span className="text-xs text-blue-600 font-medium group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;