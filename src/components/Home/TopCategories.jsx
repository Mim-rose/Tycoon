import { Link } from 'react-router-dom';

// ✅ Import images explicitly so Vite/Webpack bundles them correctly
import HM1 from '../../assets/images/HM1.png';
import KA1 from '../../assets/images/KA1.png';
import Ref1 from '../../assets/images/Ref1.jpg';
import AC1 from '../../assets/images/AC1.jpg';
import LED3 from '../../assets/images/LED3.jpg';
import HDP1 from '../../assets/images/HDP1.png'
import Banner8 from '../../assets/images/8.jpeg';

const TopCategories = () => {
  const categories = [
    { name: 'Home Appliance', type: 'home-appliance', image: HM1 },
    { name: 'Kitchen Appliance', type: 'kitchen-appliance', image: KA1 },
    { name: 'Refrigerator', type: 'refrigerator', image: Ref1 },
    { name: 'Air Conditioner', type: 'air-conditioner', image: AC1 },
    { name: 'LED TV', type: 'tv', image: LED3 },
    { name: 'Accessories', type: 'accessories', image: HDP1 }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        
        {/* ============================================
            HEADING
        ============================================ */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-red-600">Top Categories</h2>
          <p className="text-gray-600 mt-2">
            Grab the best deals on modern appliances today!
          </p>
          <button className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Explore Now →
          </button>
        </div>

        {/* ============================================
            FIRST ROW: 6 CATEGORY BOXES
            Grid: 2 columns on mobile, 3 on tablet, 6 on desktop
        ============================================ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.type}`} // Goes to: /category/refrigerator
              className="group" // For hover effects
            >
              <div className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300">
                
                {/* Category Image */}
                <div className="w-full h-32 flex items-center justify-center mb-3 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // If image not found, show placeholder
                      e.target.src = `https://via.placeholder.com/200x200?text=${category.name}`;
                    }}
                  />
                </div>
                
                {/* Category Name */}
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* ============================================
            SECOND ROW: LARGE BANNER (FULL WIDTH)
            This is a promotional banner for Google TV
        ============================================ */}
        <Link to="/category/tv" className="block">
          <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden group">
            
            {/* Banner Background Image */}
            <img
              src={Banner8}
              alt="Tycoon Google TV Banner"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // If banner image not found, show placeholder
                e.target.src = 'https://via.placeholder.com/1400x400?text=Tycoon+Google+TV';
              }}
            />
            
            {/* Dark Overlay (makes text readable) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            
            {/* Text Content on Banner */}
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <div className="text-white max-w-xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  Tycoon
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                  Google TV
                </p>
                <p className="text-sm md:text-base text-gray-200 mb-6">
                  Experience entertainment like never before with voice control and thousands of apps
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TopCategories;