import HeroSection from "@/components/hero"
import ProductsSection from "@/components/products"
import RnDSection from "@/components/rnd"
import BlogsSection from "@/components/blogs"
import RecognitionsSection from "@/components/recognitions"
import AboutMissionSection from "@/components/about"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutMissionSection />
      <ProductsSection />
      <RnDSection />
      <BlogsSection />
      <RecognitionsSection />
    </main>
  )
}
