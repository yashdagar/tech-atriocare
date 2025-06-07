import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero"
import ProductsSection from "@/components/products"
import RnDSection from "@/components/rnd"
import BlogsSection from "@/components/blogs"
import RecognitionsSection from "@/components/recognitions"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq"

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
