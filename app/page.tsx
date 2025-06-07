import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductsSection from "@/components/products-section"
import RnDSection from "@/components/rnd-section"
import BlogsSection from "@/components/blogs-section"
import RecognitionsSection from "@/components/recognitions-section"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RecognitionsSection />
      <ProductsSection />
      <RnDSection />
      <BlogsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
