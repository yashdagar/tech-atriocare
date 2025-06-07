import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-[#328c98] to-[#88cbd4] text-white py-20 h-[80vh] my-auto flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img
                src="/hero.webp"
                alt="Tech Atriocare Logo"
                className="mx-auto w-64 mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Tech Atriocare</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed italic">
            &#34;In the atrium of innovation, research and development craft the wonders of tomorrow&#34;
          </p>
          <button type="button"
                  className="bg-white text-[#328c98] font-semibold px-8 py-3 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-100 shadow-lg shadow-gray-200/50 rounded-lg text-sm text-center me-2 mb-2 ">
            Explore Our Innovation
          </button>
        </div>
      </div>
    </section>
  )
}
