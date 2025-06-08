"use client"

import { Users, Lightbulb, Target } from "lucide-react"

export default function AboutMissionSection() {
  const missionCards = [
    {
      title: "Who we are",
      content:
          "We are a 'health and wellness tech' focused R&D startup. We develop research-driven solutions for a holistic heart and lung wellness ecosystem.",
      icon: Users,
    },
    {
      title: "How we started",
      content:
          "During the pandemic lockdown, when the heart-wrenching numbers of COVID-19 related deaths were floating in every tabloids, during such gloomy days, the founder realized the healing power of simple greetings from the dear ones like 'How are you? Haal-chaal kaisa hai?' -symbolizing care and wellness.",
      icon: Lightbulb,
    },
    {
      title: "Vision",
      content: "To empower holistic wellness through 'technology & personalized therapy'.",
      icon: Target,
    },
  ]

  return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Learn more about our mission and journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                  <div
                      key={index}
                      className="bg-white rounded-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
                      style={{
                        boxShadow: `0 10px 25px rgba(50, 140, 152, 0.15), 0 4px 10px rgba(50, 140, 152, 0.1)`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 20px 40px rgba(50, 140, 152, 0.25), 0 8px 20px rgba(50, 140, 152, 0.15)`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 10px 25px rgba(50, 140, 152, 0.15), 0 4px 10px rgba(50, 140, 152, 0.1)`
                      }}
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'rgba(50, 140, 152, 0.1)'}}>
                        <IconComponent className="h-8 w-8" style={{color: '#328c98'}} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                      
                      <p className="text-gray-600 leading-relaxed flex-grow">{card.content}</p>
                    </div>
                  </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}