"use client"; // Add this directive as Swiper and motion might use client-side features

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProductCard from "./ProductCard";
import { getFeaturedProducts } from '@/lib/products'; // Import function to get products
import { motion } from 'framer-motion'; // Import motion for potential animations

// Animation variants for the slider section
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
};

const ProductSlider = () => {
  // Fetch featured products using the function from lib
  const featuredProducts = getFeaturedProducts(8); // Get, for example, 8 featured products

  if (!featuredProducts || featuredProducts.length === 0) {
    return (
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <p className="text-center text-gray-500">No featured products available at the moment.</p>
      </section>
    );
  }

  return (
    <motion.section 
      className="container mx-auto px-4 py-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={featuredProducts.length > 4} // Only loop if enough slides for breakpoints
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="pb-10" // Padding for pagination
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id} className="h-full"> {/* Ensure slide takes full height */} 
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default ProductSlider;

