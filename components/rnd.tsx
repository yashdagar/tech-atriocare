import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dna, Leaf, Brain, Heart, Activity } from "lucide-react"

export default function RnDSection() {
  const areas = [
    {
      title: "AI/ML based Digital Healthcare",
      icon: Brain,
      description: "Leveraging artificial intelligence for personalized healthcare solutions",
      accent: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-50",
    },
    {
      title: "Health & Wellness",
      icon: Heart,
      description: "Comprehensive wellness solutions for holistic health management",
      accent: "from-fuchsia-500 to-purple-600",
      iconBg: "bg-pink-50",
    },
    {
      title: "Health Tech",
      icon: Activity,
      description: "Innovative technology solutions for modern healthcare challenges",
      accent: "from-blue-700 to-indigo-500",
      iconBg: "bg-blue-50",
    },
    {
      title: "Biotech",
      icon: Dna,
      description: "Advancing biotechnology solutions for better health outcomes",
      accent: "from-orange-500 to-red-500",
      iconBg: "bg-orange-50",
    },
    {
      title: "Clean Tech",
      icon: Leaf,
      description: "Sustainable technology for environmental wellness",
      accent: "from-green-500 to-lime-500",
      iconBg: "bg-green-50",
    },
  ]

  return (
    <section id="rnd">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-20">
          <h2>Areas of R&D</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering research in cutting-edge technologies for next-generation healthcare solutions
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-purple-600 via-blue-500 via-orange-500 to-green-500 rounded-full transform -translate-y-1/2 hidden lg:block"></div>
          
          {/* Timeline items */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-4">
            {areas.map((area, index) => {
              const IconComponent = area.icon
              const isEven = index % 2 === 0
              
              return (
                <div 
                  key={index} 
                  className={`flex flex-col items-center lg:flex-1 ${isEven ? 'lg:flex-col' : 'lg:flex-col-reverse'}`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Card */}
                  <Card className={`relative bg-white/80 backdrop-blur-sm border-0 border border-gray-200 shadow-xl/5 rounded-2xl overflow-hidden w-full max-w-xs ${isEven ? 'lg:mb-8' : 'lg:mt-8'}`}>
                    <CardHeader className="relative text-center p-6">
                      {/* Icon container */}
                      <div className={`relative w-16 h-16 ${area.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${area.accent} opacity-20 rounded-2xl`}></div>
                        <IconComponent className="relative z-10 h-8 w-8 text-secondary drop-shadow-sm" />
                      </div>

                      {/* Title */}
                      <CardTitle className="text-lg font-bold text-secondary mb-2">
                        {area.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative text-center pb-6 px-6">
                      {/* Description */}
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Timeline dot */}
                  <div className="hidden lg:block relative">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${area.accent} shadow-lg border-4 border-white z-10 relative`}>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${area.accent} animate-pulse opacity-50`}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-secondary/60">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
            </div>
            <span className="text-sm font-medium">Innovation drives our research</span>
          </div>
        </div>
      </div>
    </section>
  )
}