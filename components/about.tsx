import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const missionCards = [
  {
    title: "Who we are",
    content:
        "We are a 'health and wellness tech' focused R&D startup. We develop research-driven solutions for a holistic heart and lung wellness ecosystem.",
    image: "/about1.png",
    gradient: "from-teal-500 to-slate-400",
    iconBg: "bg-slate-50",
  },
  {
    title: "How we started",
    content:
        "During the pandemic lockdown, when the heart-wrenching numbers of COVID-19 related deaths were floating in every tabloids, during such gloomy days, the founder realized the healing power of simple greetings from the dear ones like 'How are you? Haal-chaal kaisa hai?' -symbolizing care and wellness.",
    image: "/about2.png",
    gradient: "from-amber-500 to-yellow-400",
    iconBg: "bg-amber-50",
  },
  {
    title: "Vision",
    content: "To empower holistic wellness through 'technology & personalized therapy'.",
    image: "/about3.png",
    gradient: "from-emerald-400 to-teal-400",
    iconBg: "bg-emerald-50",
  },
]

const features = [
  {
    icon: "R&D",
    title: "Research Driven",
    description: "Evidence-based solutions for real-world impact",
    gradient: "from-teal-400 to-teal-600"
  },
  {
    icon: "AI",
    title: "AI Powered", 
    description: "Intelligent technology for personalized care",
    gradient: "from-amber-400 to-yellow-400"
  },
  {
    icon: "♥",
    title: "Holistic Care",
    description: "Complete wellness ecosystem for heart & lung health",
    gradient: "from-teal-400 to-emerald-400"
  }
]

export default function AboutMissionSection() {
  return (
    <section id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-8">
          <h2>About Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the journey that drives our commitment to revolutionizing health and wellness through technology
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-amber-500 to-emerald-400 rounded-full transform -translate-y-1/2 hidden lg:block"></div>
          
          {/* Timeline items */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-4">
            {missionCards.map((card, index) => {
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
                  <Card className={`relative gap-y-0 bg-white/80 backdrop-blur-sm border-0 border border-gray-200 shadow-xl/5 rounded-2xl overflow-hidden w-full max-w-xs ${isEven ? 'lg:mb-8' : 'lg:mt-8'}`}>
                    <CardHeader className="relative text-center px-6">
                      {/* Image container */}
                      <div className={`relative w-28 h-28 ${card.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5`}></div>
                        <Image 
                          className="w-24 h-24 object-contain rounded-xl overflow-clip relative z-10 drop-shadow-sm"
                          width="48"
                          height="48"
                          src={card.image}
                          alt={card.title}
                        />
                      </div>

                      {/* Title */}
                      <CardTitle className="text-lg font-bold text-secondary">
                        {card.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative text-center px-6">
                      {/* Content */}
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {card.content}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Timeline dot */}
                  <div className="hidden lg:block relative">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${card.gradient} shadow-lg border-4 border-white z-10 relative`}>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${card.gradient} animate-pulse opacity-50`}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Features section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center backdrop-blur-sm rounded-2xl">
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{feature.icon}</span>
              </div>
              <h4 className="text-lg font-semibold text-secondary mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-secondary/60">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce animation-delay-400"></div>
            </div>
            <span className="text-sm font-medium">Transforming wellness, one innovation at a time</span>
          </div>
        </div>
      </div>
    </section>
  )
}