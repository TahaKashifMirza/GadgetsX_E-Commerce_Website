import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const category = searchParams.get('category') || '';
  const search = searchParams.get('search') || '';

  // Get unique brands
  const brands = useMemo(() => {
    return Array.from(new Set(products.map(product => product.brand))).sort();
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by search query
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.brand.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // featured
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }

    return filtered;
  }, [category, search, priceRange, selectedBrands, sortBy]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const currentCategory = categories.find(cat => cat.slug === category);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {search ? `Search Results for "${search}"` : 
             currentCategory ? currentCategory.name : 'All Products'}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 sticky top-20 sm:top-24">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700 text-xl"
                >
                  ×
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-2 sm:mb-3">
                  Price Range
                </h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-2 sm:mb-3">
                  Brands
                </h3>
                <div className="space-y-1 sm:space-y-2 max-h-32 sm:max-h-40 overflow-y-auto">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-3 w-3 sm:h-4 sm:w-4"
                      />
                      <span className="ml-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 truncate">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setPriceRange([0, 5000]);
                  setSelectedBrands([]);
                }}
                className="w-full text-xs sm:text-sm text-primary-600 hover:text-primary-700 font-medium py-1"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                  <button
                    onClick={() => setShowFilters(true)}
                    className="lg:hidden flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
                  >
                    <Filter className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Filters</span>
                  </button>
                  
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 sm:p-2 rounded ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <Grid className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 sm:p-2 rounded ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <List className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <SlidersHorizontal className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-xs sm:text-sm w-full sm:w-auto"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-3 sm:gap-4 lg:gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-8 w-8 sm:h-12 sm:w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No products found
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Try adjusting your filters or search terms.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;


