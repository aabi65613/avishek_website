"use client"; // Add this directive as motion components are used

import { getProductsByCategory, getAllProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

// Function to generate static paths for categories if using SSG (optional but good practice)
// export async function generateStaticParams() {
//   const products = getAllProducts();
//   const categories = [...new Set(products.map(p => p.category.toLowerCase()))];
//   return categories.map(slug => ({ slug }));
// }

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05 // Stagger product card animations
    }
  }
};

// ProductCard already has its own variants, we just need a wrapper for stagger
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function CategoryPage({ params }) {
  const { slug } = params;
  const products = getProductsByCategory(slug);

  // If no products found for the category slug, show 404
  if (!products || products.length === 0) {
    // Check if the category itself exists even if empty
    const allProducts = getAllProducts();
    const validCategories = [...new Set(allProducts.map(p => p.category.toLowerCase()))];
    if (!validCategories.includes(slug.toLowerCase())) {
        notFound(); // Category slug is invalid
    }
    // Category is valid but has no products yet
  }

  // Capitalize category name for display
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {categoryName} Products
      </motion.h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found in this category yet.</p>
      ) : (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            // Wrap ProductCard in motion.div for stagger effect
            <motion.div key={product.id} variants={itemVariants}> 
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

