import { useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../components/context/CartContext';
import { AuthContext } from '../components/context/AuthContext';
import { products } from '../data/productsData';

import { FiShoppingCart, FiHeart, FiCheck, FiX } from 'react-icons/fi';

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.thumbnail);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Go back to homepage
        </Link>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const handleBuyNow = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    addToCart(product, quantity, selectedVariant);
    navigate('/cart');
  };

  // Related products (same type, different product)
  const relatedProducts = products
    .filter(p => p.type === product.type && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/category/${product.type}`} className="hover:text-blue-600">
              {product.categories[0]}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SIDE - IMAGES */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-96 object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500?text=No+Image';
                }}
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              <img
                src={product.thumbnail}
                alt="Main"
                onClick={() => setMainImage(product.thumbnail)}
                className={`w-full h-20 object-cover rounded cursor-pointer border-2 transition-all ${
                  mainImage === product.thumbnail ? 'border-blue-600' : 'border-gray-200 hover:border-blue-400'
                }`}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/100?text=Main';
                }}
              />
              {product.variants.map((variant, index) => (
                <img
                  key={index}
                  src={variant.img}
                  alt={variant.color}
                  onClick={() => {
                    setMainImage(variant.img);
                    setSelectedVariant(variant);
                  }}
                  className={`w-full h-20 object-cover rounded cursor-pointer border-2 transition-all ${
                    selectedVariant.color === variant.color ? 'border-blue-600' : 'border-gray-200 hover:border-blue-400'
                  }`}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/100?text=' + variant.color;
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-4">
              {product.inStock ? (
                <>
                  <FiCheck className="text-green-600 text-xl" />
                  <span className="text-green-600 font-medium">In Stock</span>
                </>
              ) : (
                <>
                  <FiX className="text-red-600 text-xl" />
                  <span className="text-red-600 font-medium">Out of Stock</span>
                </>
              )}
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-4xl font-bold text-red-600">
                {formatPrice(selectedVariant?.price || product.price)}
              </p>
            </div>

            {/* Color Variants */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">
                  Color: <span className="text-red-600">{selectedVariant.color}</span>
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 border-2 rounded-lg text-sm font-medium transition-all ${
                        selectedVariant.color === variant.color
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      {variant.color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 h-10 text-center border-2 border-gray-300 rounded-lg font-semibold focus:outline-none focus:border-blue-600"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
              >
                <FiShoppingCart /> Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Buy Now
              </button>
              <button className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors">
                <FiHeart className="text-xl" />
              </button>
            </div>

            {/* Key Features */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-lg mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FiCheck className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="bg-white rounded-lg p-6 mt-8 shadow-md">
          <h3 className="font-bold text-2xl mb-4">Specifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex border-b pb-2">
                <span className="font-semibold text-gray-700 w-1/2">{key}:</span>
                <span className="text-gray-600 w-1/2">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h3 className="font-bold text-2xl mb-6">Related Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="bg-gray-50 p-4">
                    <img
                      src={relatedProduct.thumbnail}
                      alt={relatedProduct.name}
                      className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200?text=No+Image';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 h-10">
                      {relatedProduct.name}
                    </h4>
                    <p className="text-lg font-bold text-red-600">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;