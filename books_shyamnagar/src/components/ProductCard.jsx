"use client"; // Add this directive as motion components and useCart hook are used

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext'; // Import useCart hook
import { motion } from 'framer-motion'; // Import motion for potential item animations

// Animation for the card itself (slide from right)
const cardVariants = {
  hidden: { opacity: 0, x: 50 }, // Start off-screen to the right and invisible
  visible: { 
    opacity: 1, 
    x: 0, // Slide to original position
    transition: { duration: 0.5 } // Adjust duration as needed
  }
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Get addToCart function from context

  if (!product) {
    return <div className="border rounded-lg shadow-lg p-4 text-center text-red-500">Product data missing!</div>;
  }

  const { id, name, price, image, description, category } = product;
  const imageUrl = image || '/images/placeholder.png';

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent link navigation when clicking button
    e.stopPropagation(); // Stop event bubbling
    addToCart(product); // Add the product to the cart
    // Optional: Add user feedback (e.g., toast notification)
    console.log(`${name} added to cart`);
    alert(`${name} added to cart!`); // Simple alert for feedback
  };

  return (
    <motion.div 
      className="border rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-white flex flex-col h-full"
      variants={cardVariants} // Apply animation variants
      // These props are needed if the parent container doesn't handle the animation trigger
      // If the parent uses staggerChildren, these might not be needed here, but let's keep them for flexibility
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is visible
    >
      <Link href={`/product/${id || 'default'}`} legacyBehavior><a>
        <div className="relative w-full h-56 md:h-64"> {/* Fixed height for image container */}
          <Image 
            src={imageUrl} 
            alt={name || 'Product Image'} 
            layout="fill" 
            objectFit="cover" 
            className="transition-opacity duration-300 hover:opacity-90"
            // Add placeholder blur if using Next.js image optimization features
            // placeholder="blur"
            // blurDataURL="/images/placeholder-blur.png" 
          />
        </div>
        <div className="p-4 flex flex-col flex-grow"> {/* Use flex-grow to push button down */}
          <h3 className="text-lg font-semibold text-gray-800 truncate mb-1" title={name}>{name || 'Unnamed Product'}</h3>
          <p className="text-sm text-gray-500 mb-2 capitalize">{category || 'Uncategorized'}</p>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{description || 'No description available.'}</p> {/* flex-grow on description */}
          <div className="mt-auto"> {/* Push price and button to bottom */}
            <p className="text-xl font-bold text-blue-600 mb-3">${price !== undefined ? price.toFixed(2) : 'N/A'}</p>
            <button 
              onClick={handleAddToCart} 
              className="w-full bg-blue-500 text-white py-1.5 px-3 rounded hover:bg-blue-600 transition duration-200 text-sm font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </a></Link>
    </motion.div>
  );
};

export default ProductCard;

