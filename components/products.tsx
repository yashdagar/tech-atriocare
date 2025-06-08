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
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Vsync",
      description: "Relationship Wellness",
      image: '/vsync.webp',
      buttonText: "Get Started",
      color: "bg-pink-100 text-pink-600",
    },
    {
      name: "Novicule TA",
      description: "Personalized Wellness Companion",
      image: '/novicule.webp',
      buttonText: "Buy Now",
      color: "bg-blue-100 text-blue-600",
    },
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Innovative solutions for wellness and healthcare</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center my-auto">
                  <div
                    className={`w-64 h-64 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Image src={product.image} width="256" height="128" alt={product.name} />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#328c98]">{product.name}</CardTitle>
                  <CardDescription className="text-lg font-medium">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="bg-[#328c98] hover:bg-[#2a7580] text-white group">
                    {product.buttonText} 
                    <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-transform"/>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
