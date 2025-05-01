// This file contains the demo product data for the Books.shyamnagar website.
// To edit products, modify the entries in this array.
// Ensure image paths correspond to files in the /public/images/products/ directory.

export const products = [
  // Skincare Category
  {
    id: "skincare001",
    name: "Hydrating Face Cream",
    price: 29.99,
    description: "A light yet deeply hydrating face cream suitable for all skin types. Enriched with natural extracts.",
    category: "Skincare",
    image: "/images/products/skincare1.jpg", // Replace with actual image path
  },
  {
    id: "skincare002",
    name: "Vitamin C Brightening Serum",
    price: 45.50,
    description: "Boost your skin\s radiance with this potent Vitamin C serum. Fights dullness and uneven tone.",
    category: "Skincare",
    image: "/images/products/skincare2.jpg", // Replace with actual image path
  },

  // Books Category
  {
    id: "book001",
    name: "The Midnight Library",
    price: 18.99,
    description: "A novel about choices, regrets, and the infinite possibilities of life.",
    category: "Books",
    image: "/images/products/book1.jpg", // Replace with actual image path
  },
  {
    id: "book002",
    name: "Sapiens: A Brief History of Humankind",
    price: 22.00,
    description: "Explore the history of humankind from the Stone Age up to the present day.",
    category: "Books",
    image: "/images/products/book2.jpg", // Replace with actual image path
  },
  {
    id: "book003",
    name: "Atomic Habits",
    price: 20.50,
    description: "An easy & proven way to build good habits & break bad ones.",
    category: "Books",
    image: "/images/products/book3.jpg", // Replace with actual image path
  },

  // Instruments Category
  {
    id: "instrument001",
    name: "Beginner Acoustic Guitar",
    price: 129.99,
    description: "A perfect starter guitar with a comfortable neck and warm tone. Includes basic accessories.",
    category: "Instruments",
    image: "/images/products/instrument1.jpg", // Replace with actual image path
  },
  {
    id: "instrument002",
    name: "Portable Digital Piano",
    price: 349.00,
    description: "88-key digital piano with weighted keys, great for learning and practice.",
    category: "Instruments",
    image: "/images/products/instrument2.jpg", // Replace with actual image path
  },

  // Gifts Category
  {
    id: "gift001",
    name: "Aromatherapy Diffuser Set",
    price: 39.95,
    description: "Create a relaxing atmosphere with this ultrasonic diffuser and essential oil set.",
    category: "Gifts",
    image: "/images/products/gift1.jpg", // Replace with actual image path
  },
  {
    id: "gift002",
    name: "Constellation Projector Lamp",
    price: 25.00,
    description: "Project stars and constellations onto your ceiling. A magical gift for all ages.",
    category: "Gifts",
    image: "/images/products/gift2.jpg", // Replace with actual image path
  },

  // Experimental Items Category
  {
    id: "exp001",
    name: "DIY Terrarium Kit",
    price: 35.00,
    description: "Build your own miniature ecosystem in a glass container. Fun and educational.",
    category: "Experimental",
    image: "/images/products/exp1.jpg", // Replace with actual image path
  },
  {
    id: "exp002",
    name: "Levitating Plant Pot",
    price: 89.99,
    description: "A unique pot that floats and rotates in mid-air using magnetic levitation.",
    category: "Experimental",
    image: "/images/products/exp2.jpg", // Replace with actual image path
  },
  {
    id: "exp003",
    name: "Circuit Building Blocks",
    price: 55.00,
    description: "Learn electronics by snapping together magnetic blocks to build functional circuits.",
    category: "Experimental",
    image: "/images/products/exp3.jpg", // Replace with actual image path
  },
];

// Function to get all products
export const getAllProducts = () => {
  return products;
};

// Function to get products by category slug
export const getProductsByCategory = (categorySlug) => {
  const categoryName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
  return products.filter(product => product.category.toLowerCase() === categorySlug.toLowerCase());
};

// Function to get a single product by ID
export const getProductById = (productId) => {
  return products.find(product => product.id === productId);
};

// Function to get featured products (e.g., first 6)
export const getFeaturedProducts = (count = 6) => {
  // Simple logic: return the first 'count' products. Can be randomized or based on flags later.
  return products.slice(0, count);
};

