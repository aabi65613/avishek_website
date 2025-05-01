"use client"; // Add this directive as motion components might use client-side features

import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

// Placeholder data for categories
const categories = [
  { name: 'Skincare', slug: 'skincare', image: '/images/category-skincare.jpg' }, // Placeholder image path
  { name: 'Books', slug: 'books', image: '/images/category-books.jpg' },
  { name: 'Instruments', slug: 'instruments', image: '/images/category-instruments.jpg' },
  { name: 'Gifts', slug: 'gifts', image: '/images/category-gifts.jpg' },
  { name: 'Experimental', slug: 'experimental', image: '/images/category-experimental.jpg' },
];

// Animation variants for individual category items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 1 }, // Container itself is visible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Stagger the animation of children
    }
  }
};

const CategorySection = () => {
  return (
    <motion.section 
      id="categories" 
      className="container mx-auto px-4 py-12"
      initial="hidden" // Start hidden
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
      variants={containerVariants} // Apply container variants for staggering
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Shop by Category
      </motion.h2>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        variants={containerVariants} // Ensure container variants are applied here too if needed, though applying to section might be enough
      >
        {categories.map((category) => (
          <motion.div key={category.slug} variants={itemVariants}> {/* Apply item variants to each child */}
            <Link href={`/category/${category.slug}`} legacyBehavior><a>
              <div className="border rounded-lg shadow-sm overflow-hidden text-center p-4 transition-transform duration-300 hover:scale-105 hover:shadow-md bg-white aspect-square flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-3 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7A2 2 0 0112 21H7a2 2 0 01-2-2V5a2 2 0 012-2z" /></svg>
                </div>
                <h3 className="text-md font-semibold text-gray-700">{category.name}</h3>
              </div>
            </a></Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CategorySection;

