"use client"; // Directive MUST be the very first line

import { getProductById, getAllProducts } from "@/lib/products";
import Image from "next/image";
import { notFound } from 'next/navigation';
import { useCart } from "@/context/CartContext"; // Import useCart hook
import { motion } from 'framer-motion';

// Function to generate static paths for products if using SSG (optional)
// export async function generateStaticParams() {
//   const products = getAllProducts();
//   return products.map(product => ({ id: product.id }));
// }

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.1 } }
};

const detailsVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
};

// The actual page component needs to be a client component to use hooks
export default function ProductDetailPage({ params }) {
  const { id } = params;
  const product = getProductById(id);
  const { addToCart } = useCart(); // Use the hook here

  // If no product found for the ID, show 404
  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Add user feedback (e.g., toast notification)
    alert(`${product.name} added to cart!`);
  };

  const imageUrl = product.image || '/images/placeholder.png';

  return (
    <motion.div 
      className="container mx-auto px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Product Image */}
        <motion.div 
          className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg"
          variants={imageVariants}
        >
          <Image 
            src={imageUrl} 
            alt={product.name}
            layout="fill"
            objectFit="contain" // Use contain to show the whole image, or cover
            className="bg-white" // Add a background if image is transparent
          />
        </motion.div>

        {/* Product Details */}
        <motion.div variants={detailsVariants}>
          <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price.toFixed(2)}</p>
          <div className="prose prose-sm sm:prose-base mb-6 text-gray-700">
            <p>{product.description}</p>
            {/* Add more details if available, e.g., specifications */}
          </div>
          
          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className="w-full md:w-auto bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 text-lg font-medium shadow-md"
          >
            Add to Cart
          </button>
          
          {/* Optional: Add quantity selector here if needed */}

        </motion.div>
      </div>

      {/* Optional: Related Products Section */}
      {/* <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You might also like</h2>
        // Add a slider or grid of related products here
      </div> */}
    </motion.div>
  );
}

