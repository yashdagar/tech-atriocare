import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dna, Leaf, Brain, Heart, Activity } from "lucide-react"

export default function RnDSection() {
  const areas = [
    {
      title: "AI/ML based Digital Healthcare",
      icon: Brain,
      description: "Leveraging artificial intelligence for personalized healthcare solutions",
    },
    {
      title: "Health & Wellness",
      icon: Heart,
      description: "Comprehensive wellness solutions for holistic health management",
    },
    {
      title: "Health Tech",
      icon: Activity,
      description: "Innovative technology solutions for modern healthcare challenges",
    },
    {
      title: "Biotech",
      icon: Dna,
      description: "Advancing biotechnology solutions for better health outcomes",
    },
    {
      title: "Clean Tech",
      icon: Leaf,
      description: "Sustainable technology for environmental wellness",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas of R&D</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Pioneering research in cutting-edge technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {areas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-[#88cbd4]/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-[#88cbd4]/20 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-[#328c98]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#328c98]">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
