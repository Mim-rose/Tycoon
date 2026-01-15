import { Link } from 'react-router-dom';

/**
 * ProductCard Component - Reusable
 * 
 * Can be used in:
 * - NewArrivals
 * - HomePage sections
 * - CategoryPage
 * - Search Results
 * 
 * @param {object} product - Product object from productsData
 * @param {string} variant - 'default' | 'featured' | 'minimal'
 */
const ProductCard = ({ product, variant = 'default' }) => {
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0
    }).format(price);
  };

  // ============================================
  // FEATURED VARIANT (for New Arrivals)
  // ============================================
  if (variant === 'featured') {
    return (
      <Link
        to={`/product/${product.slug}`}
        className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
      >
        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          {!product.inStock && (
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">
                Out Of Stock
              </span>
            </div>
          )}
          
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-10 group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mt-3">
            <div>
              <p className="text-xs text-gray-500 mb-1">Call for Price</p>
              <p className="text-lg font-bold text-red-600">
                {formatPrice(product.price)}
              </p>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors">
              Read more
            </button>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {product.categories[0]}
            </span>
          </div>
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-600 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-xs text-center font-medium">
            Click to view details →
          </p>
        </div>
      </Link>
    );
  }

  // ============================================
  // DEFAULT VARIANT (regular card)
  // ============================================
  return (
    <Link
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
          <span className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;