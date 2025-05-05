
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoriesSection from "@/components/home/CategoriesSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import { featuredProducts, categories } from "@/data/productData";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <CategoriesSection categories={categories} />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
