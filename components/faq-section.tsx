"use client"

import { useState } from "react"
import { ChevronDown, Users, Lightbulb, Target } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Who we are?",
      answer:
          "We are a 'health and wellness tech' focused R&D startup. We develop research-driven solutions for a holistic heart and lung wellness ecosystem.",
      icon: Users,
    },
    {
      question: "How we started?",
      answer:
          "During the pandemic lockdown, when the heart-wrenching numbers of COVID-19 related deaths were floating in every tabloids, during such gloomy days, the founder realized the healing power of simple greetings from the dear ones like 'How are you? Haal-chaal kaisa hai?' -symbolizing care and wellness.",
      icon: Lightbulb,
    },
    {
      question: "Vision",
      answer: "To empower holistic wellness through 'technology & personalized therapy'.",
      icon: Target,
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Learn more about our mission and journey</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon
              const isOpen = openIndex === index

              return (
                  <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
                  >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#88cbd4]/20 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-[#328c98]" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      </div>
                      <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                              isOpen ? 'transform rotate-180' : ''
                          }`}
                      />
                    </button>

                    <div className={`overflow-hidden transition-all duration-200 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 pl-20">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}