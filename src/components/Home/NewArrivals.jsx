import { Link } from 'react-router-dom';
import { products } from '../../data/productsData';
/**
 * NewArrivals Component
 * 
 * Shows 2 products from each of 6 categories (12 total)
 * More appealing design than regular category cards
 */
const NewArrivals = () => {
  
  // ============================================
  // GET 2 PRODUCTS FROM EACH CATEGORY
  // ============================================
  const getNewArrivals = () => {
    const categories = ['refrigerator', 'tv', 'fan', 'rice-cooker', 'mixer-grinder', 'pressure-cooker'];
    const newArrivals = [];
    
    categories.forEach(category => {
      const categoryProducts = products
        .filter(p => p.type === category)
        .slice(0, 2);  // Take first 2 products
      newArrivals.push(...categoryProducts);
    });
    
    return newArrivals;
  };

  const newArrivals = getNewArrivals();

  // ============================================
  // FORMAT PRICE
  // ============================================
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-3">
            New Arrival
          </h2>
          <p className="text-gray-600">
            Discover our latest collection of premium appliances
          </p>
        </div>

        {/* ============================================
            PRODUCTS GRID - 12 CARDS
            More appealing design with animations
        ============================================ */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* ============================================
                  PRODUCT IMAGE
              ============================================ */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Out of Stock Badge */}
                {!product.inStock && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">
                      Out Of Stock
                    </span>
                  </div>
                )}
                
                {/* Product Image */}
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* ============================================
                  PRODUCT INFO
              ============================================ */}
              <div className="p-4">
                {/* Product Name */}
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-10 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>

                {/* Price & Button */}
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Call for Price</p>
                    <p className="text-lg font-bold text-red-600">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  
                  {/* Read More Button */}
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors transform group-hover:scale-105">
                    Read more
                  </button>
                </div>

                {/* Category Badge */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {product.categories[0]}
                  </span>
                </div>
              </div>

              {/* ============================================
                  QUICK VIEW OVERLAY (appears on hover)
              ============================================ */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-600 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs text-center font-medium">
                  Click to view details →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* ============================================
            VIEW ALL BUTTON
        ============================================ */}
        <div className="text-center mt-10">
          <Link
            to="/category/home-appliance"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;