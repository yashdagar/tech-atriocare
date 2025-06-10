import Link from 'next/link';
import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Prathyusha Meesala",
      timeAgo: "2 months ago",
      content: "I wasn't expecting much when I first tried Novicule TA, but wow—it really works! I came down with the flu and felt completely drained, but after taking it, I started feeling better way faster than usual. My congestion eased, the fatigue reduced, and within a day or two, I was back on my feet. It's definitely a must-have for flu season! Super convenient, effective, and something I'll be keeping stocked from now on. Highly recommend it to anyone who wants quick and reliable relief!",
      rotation: "rotate-2",
      color: "bg-emerald-50 border-emerald-200",
      accent: "from-emerald-500 to-teal-500"
    },
    {
      name: "Siddhartha Chandra",
      timeAgo: "a month ago",
      content: "Never before have I come across any flu fighting option to cut through the root cause in as little as one day! I had a 10k race to pace on Sunday, and I got my hands on Novicule-TA on Friday. On Friday I was down with a severe throat congestion and weakness and felt unsure about being able to run. All it took was 1 sachet on Friday night to restore my health and confidence. Not only did I run the race in prime conditions, but also honored the time commitment of completing in 70 mins. My utmost gratitude to the creators of Novicule-TA. I would highly recommend keeping a few packets handy in your medical box.",
      rotation: "-rotate-1",
      color: "bg-pink-50 border-pink-200",
      accent: "from-fuchsia-500 to-purple-600"
    },
    {
      name: "Lasya N",
      timeAgo: "2 months ago",
      content: "I recently used Novicule TA when I caught a flu, and I was impressed with how quickly it worked! My fever dropped, body aches eased, and I felt more energetic in no time. What I loved most is how easy it is to use and how well it keeps symptoms under control. I've tried other remedies before, but Novicule TA truly delivers both fast relief and lasting benefits. Definitely keeping this on hand—highly recommend it!",
      rotation: "rotate-3",
      color: "bg-blue-50 border-blue-200",
      accent: "from-blue-700 to-indigo-500"
    },
    {
      name: "Eakta Kandpal",
      timeAgo: "3 months ago",
      content: "I had been having a cough for many days, and it would get worse at night as soon as I tried to sleep. I tried cough syrup, but it didn't have any effect. Then I started taking these sachets before bedtime. After taking 6 sachets, my cough completely disappeared. I am also highly allergic to cold weather and dust, which causes me to cough frequently. But after taking these sachets, I feel much better, and my nighttime cough completely stopped. I will definitely recommend this product. If you have a persistent cough problem, please try it.",
      rotation: "-rotate-2",
      color: "bg-orange-50 border-orange-200",
      accent: "from-orange-500 to-red-500"
    },
    {
      name: "Tanushree Shrivastav",
      timeAgo: "2 months ago",
      content: "I've struggled with recurring colds and coughs due to weather changes for years. However, I've always avoided antibiotics. Luckily, Tarun Adarsh introduced me to Novicule, and I saw instant results after trying it. For the past 6 months, I've stopped relying on medicines and instead opt for Novicule. Simply tearing open a sachet and consuming it helps me recover overnight – it's truly a remarkable solution!",
      rotation: "rotate-1",
      color: "bg-green-50 border-green-200",
      accent: "from-green-500 to-lime-500"
    }
  ];

  return (
    <section id='testimonials' className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who&apos;ve tried Novicule TA
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transform ${testimonial.rotation} hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-10 relative`}
            >
              <div className={`${testimonial.color} p-6 rounded-lg border-4 border-dashed shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm`}>
                {/* Stamp perforations effect */}
                <div className="absolute -top-1 left-4 right-4 h-2 bg-white opacity-50 rounded-full"></div>
                <div className="absolute -bottom-1 left-4 right-4 h-2 bg-white opacity-50 rounded-full"></div>
                <div className="absolute -left-1 top-4 bottom-4 w-2 bg-white opacity-50 rounded-full"></div>
                <div className="absolute -right-1 top-4 bottom-4 w-2 bg-white opacity-50 rounded-full"></div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {testimonial.timeAgo}
                    </p>
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed text-sm">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Star rating */}
                  <div className="flex mt-4 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L0 6.91l6.564-.954L10 0l3.436 5.956L20 6.91l-5.245 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-lg shadow-lg p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Experience Novicule TA?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who&apos;ve found relief with Novicule TA
            </p>
            <Link href="https://noviculeta-16.mini.site/products/674bb0f8-169f-4537-9d25-94c3f51cf3fb" aria-label="Order Now">
              <button aria-label="Order Now" className="bg-secondary cursor-pointer text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}