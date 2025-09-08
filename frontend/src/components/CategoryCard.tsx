import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={`/products?category=${category.slug}`}
        className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 block"
      >
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(category.name);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
          <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{category.name}</h3>
          <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center text-blue-300 group-hover:text-blue-200 transition-colors">
            <span className="text-xs sm:text-sm font-medium">Explore Collection</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;


