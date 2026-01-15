import { Link } from 'react-router-dom';
import { products } from '../data/products';
import TopCategories from '../components/home/TopCategories';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  // Get latest products (last 8)
  const newArrivals = products.slice(-8);

  // Get products by category
  const refrigerators = products.filter(p => p.type === 'refrigerator').slice(0, 4);
  const fans = products.filter(p => p.type === 'fan').slice(0, 4);
  const tvs = products.filter(p => p.type === 'tv').slice(0, 4);

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Product Card Component
  const ProductCard = ({ product }) => (
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
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View Details →
          </button>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Tycoon Electronics
          </h1>
          <p className="text-lg md:text-xl mb-6">
            World Class Electronics at Your Fingertips
          </p>
          <Link
            to="/category/refrigerator"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Shop Now <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* TOP CATEGORIES - 6 boxes + 1 large banner */}
      <TopCategories />

      {/* NEW ARRIVALS */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">New Arrivals</h2>
          <Link
            to="/category/home-appliance"
            className="text-red-600 font-medium hover:underline flex items-center gap-1"
          >
            View All <FiArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* FEATURED REFRIGERATORS */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Refrigerators</h2>
            <Link
              to="/category/refrigerator"
              className="text-red-600 font-medium hover:underline flex items-center gap-1"
            >
              View All <FiArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {refrigerators.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TVs */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Smart Televisions</h2>
          <Link
            to="/category/tv"
            className="text-red-600 font-medium hover:underline flex items-center gap-1"
          >
            View All <FiArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tvs.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎉 Special Offer! Get Up to 30% OFF
          </h2>
          <p className="text-lg mb-6">
            On selected home appliances and kitchen items
          </p>
          <Link
            to="/category/kitchen-appliance"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Shop Offers Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;