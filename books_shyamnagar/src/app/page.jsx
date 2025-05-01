import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ProductSlider from "@/components/ProductShowcase"; // Renamed component import

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Category Section */}
      <CategorySection /> 

      {/* Featured Products Section - Now using Slider */}
      <ProductSlider /> {/* Use the ProductSlider component */} 

    </Layout>
  );
}

