import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { products } from '../data/products';
import AnimatedText from '../components/AnimatedText';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { dispatch } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_ITEM', payload: product });
    }
    toast.success(
      `${quantity} x ${product.name} added to cart! 🛒`,
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.info(
        `${product.name} removed from wishlist`,
        {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } else {
      addToWishlist(product);
      toast.success(
        `${product.name} added to wishlist! ❤️`,
        {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const wishlisted = isInWishlist(product.id);
  const images = product.images ?? [];
  const safeSelected = Math.min(Math.max(0, selectedImage), Math.max(0, images.length - 1));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Breadcrumb */}
        <motion.nav
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 overflow-x-auto">
            <li>
              <button
                onClick={() => navigate('/')}
                className="hover:text-primary-600 whitespace-nowrap transition-colors"
              >
                Home
              </button>
            </li>
            <li>/</li>
            <li>
              <button
                onClick={() => navigate('/products')}
                className="hover:text-primary-600 whitespace-nowrap transition-colors"
              >
                Products
              </button>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white truncate">{product.name}</li>
          </ol>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Product Info */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <motion.div
                className="flex items-center space-x-2 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {product.brand}
                </span>
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-800 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                    Save ${ (product.originalPrice - product.price).toFixed(0) }
                  </span>
                )}
              </motion.div>

              <AnimatedText
                text={product.name}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4"
                delay={0.4}
              />

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg sm:text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Quantity:</span>
                <div className="flex items-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-md">
                  <motion.button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 sm:px-4 py-2 sm:py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-l-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.button>

                  <span className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold text-gray-900 dark:text-white min-w-[3rem] text-center bg-gray-50 dark:bg-gray-700">
                    {quantity}
                  </span>

                  <motion.button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 sm:px-4 py-2 sm:py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-r-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Add to Cart & Wishlist */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <motion.button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Add to Cart</span>
                </motion.button>

                <motion.button
                  onClick={handleWishlistToggle}
                  className={`px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                    wishlisted
                      ? 'bg-red-50 border-red-300 text-red-600 hover:bg-red-100'
                      : 'border-gray-300 text-gray-600 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart className={`h-5 w-5 sm:h-6 sm:w-6 ${wishlisted ? 'fill-current' : ''}`} />
                </motion.button>
              </motion.div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Free Shipping</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">On orders over $500</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">2-Year Warranty</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Full coverage</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">30-Day Returns</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">No questions asked</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Images */}
          <motion.div
            className="space-y-3 sm:space-y-4 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={images[safeSelected] ?? 'https://via.placeholder.com/600x600?text=No+Image'}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/600x600?text=No+Image';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg ${
                    safeSelected === index
                      ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 scale-105'
                      : 'hover:scale-105'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  aria-label={`Show image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/150x150?text=No+Image';
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AnimatedText
            text="Specifications"
            className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8"
            delay={0.6}
          />

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-5">
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Processor</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {product.specifications?.processor}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Memory</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {product.specifications?.memory}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Storage</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {product.specifications?.storage}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Graphics</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {product.specifications?.graphics}
                  </span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Display</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {product.specifications?.display}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Operating System</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {product.specifications?.operatingSystem}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Weight</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {product.specifications?.weight}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Battery</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {product.specifications?.battery}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
