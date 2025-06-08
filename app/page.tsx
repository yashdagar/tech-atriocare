import HeroSection from "@/components/hero"
import ProductsSection from "@/components/products"
import RnDSection from "@/components/rnd"
import BlogsSection from "@/components/blogs"
import RecognitionsSection from "@/components/recognitions"
import FAQSection from "@/components/faq"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <RnDSection />
      <BlogsSection />
      <RecognitionsSection />
      <FAQSection />
    </main>
  )
}
