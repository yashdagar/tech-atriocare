import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      name: "Haal Chaal Pravartak",
      description: "World's first digital gym for heart and lung wellness",
      image: '/haal_chaal_pravartak.webp',
      buttonText: "View More",
      link: "https://wa.me/message/BBU6IKOD66DHK1?src=qr",
      accent: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-50",
    },
    {
      name: "V-sync",
      description: "Relationship Wellness",
      image: '/vsync.webp',
      buttonText: "Get Started",
      link: "https://vsync.techatriocare.com/",
      accent: "from-fuchsia-500 to-purple-600",
      iconBg: "bg-pink-50",
    },
    {
      name: "NOVICULE-TA",
      description: "Personalized Wellness Companion",
      image: '/novicule.webp',
      buttonText: "Buy Now",
      link: "https://noviculeta-16.mini.site/products/674bb0f8-169f-4537-9d25-94c3f51cf3fb",
      accent: "from-blue-700 to-indigo-500",
      iconBg: "bg-blue-50",
    },
  ]

  return (
    <section id="products">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-20">
          <h2>
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions designed to transform wellness and healthcare through cutting-edge technology
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border-0 border border-gray-200 shadow-xl/5 hover:shadow-2xl/7 transition-all duration-500 transform hover:-translate-y-1 hover:scale-104 rounded-2xl overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${product.accent} rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="h-full w-full bg-white rounded-2xl"></div>
              </div>

              <CardHeader className="relative text-center p-8">
                {/* Product image container */}
                <div className={`relative w-48 h-48 ${product.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <Image 
                    src={product.image} 
                    width="200" 
                    height="150" 
                    alt={product.name}
                    className="relative z-10 max-w-full max-h-full object-contain drop-shadow-lg"
                  />
                </div>

                {/* Product title */}
                <CardTitle className={`text-2xl font-bold text-secondary mb-3 group-hover:bg-gradient-to-r group-hover:${product.accent} group-hover:bg-clip-text group-hover:text-[#0006] transition-all duration-300`}>
                  {product.name}
                </CardTitle>

                {/* Product description */}
                <CardDescription className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative text-center pb-8 px-8 mt-auto">
                {/* CTA Button */}
                <Button 
                  className="bg-secondary hover:bg-secondary/90 text-white group/btn relative overflow-hidden px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300" 
                  aria-label={product.buttonText}
                >
                  <span className="relative z-10 flex items-center">
                    {product.buttonText} 
                    <ArrowUpRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"/>
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.accent} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                </Button>

                {/* Hover indicator line */}
                <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${product.accent} rounded-full mx-auto group-hover:w-20 transition-all duration-500 ease-out`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-secondary/60">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
            </div>
            <span className="text-sm font-medium">Empowering wellness through innovation</span>
          </div>
        </div>
      </div>
    </section>
  )
}