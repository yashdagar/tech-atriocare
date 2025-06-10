import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const products = [
    {
      name: "V-sync",
      link: "https://vsync.techatriocare.com/",
    },
    {
      name: "Haal-Chaal Pravartak",
      link: "https://wa.me/message/BBU6IKOD66DHK1?src=qr",
    },
    {
      name: "Novicule-TA",
      link: "https://noviculeta-16.mini.site/products/674bb0f8-169f-4537-9d25-94c3f51cf3fb",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-secondary via-secondary to-secondary text-white py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Products */}
          <div className="relative">
            <div className="relative md:h-full xl:h-fit bg-pink-900/20 backdrop-blur-sm border border-black/10 rounded-2xl px-6 pt-4 pb-6 shadow-xl/5">
              <h3 className="relative text-lg font-bold mb-4 text-white">
                Products
              </h3>
              <ul className="relative space-y-3">
                {products.map((product, index) => (
                  <li key={product.name}>
                    <Link 
                      href={product.link} 
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1" 
                      aria-label={product.name}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="relative">
                        {product.name}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-300 group-hover:w-full transition-all duration-300"></div>
                      </span>
                      <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0 transition-all duration-300"/>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Follow Us */}
          <div className="relative">
            <div className="relative sm:h-full xl:h-fit bg-purple-900/20 backdrop-blur-sm border border-black/10 rounded-2xl px-6 pt-4 pb-6 shadow-xl/5">
              <h3 className="relative text-lg font-bold mb-4 text-white">
                Follow Us
              </h3>
              <div className="relative flex space-x-4">
                <Link 
                  href="https://www.instagram.com/tech.atriocare/" 
                  aria-label="Instagram" 
                  className="group relative p-3 bg-white/10 rounded-xl hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/tech-atriocare/" 
                  aria-label="Linkedin" 
                  className="group relative p-3 bg-white/10 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-blue-400/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="relative">
            <div className="relative bg-blue-900/20 backdrop-blur-sm border border-black/10 rounded-2xl px-6 pt-4 pb-6 shadow-xl/5">
              <h3 className="relative text-lg font-bold mb-2 text-white">
                Address
              </h3>
              <div className="relative space-y-2 text-sm">
                <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-black/50 transition-colors duration-300">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Plot No. - 2a, First Floor, Kh No 294 Kehar Singh State, Saidulajab Village, South West Delhi, India - 110030
                  </p>
                </div>
                <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-black/50 transition-colors duration-300">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    208, 2nd Floor Nagarjuna Block, Vignan University, Guntur - Tenali Rd, Vadlamudi, Andhra Pradesh - 522213
                  </p>
                </div>
                <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-black/50 transition-colors duration-300">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    CIIE, Jamia Hamdard, Hamdard Nagar, New Delhi - 110062
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <div className="relative bg-orange-900/20 backdrop-blur-sm border border-black/10 rounded-2xl px-6 pt-4 pb-6 shadow-xl/5">
              <h3 className="relative text-lg font-bold mb-4 text-white">
                Email
              </h3>
              <div className="relative group p-3 rounded-lg hover:bg-black/50 transition-colors duration-300">
                <div className="flex items-start space-x-3 min-w-0">
                  <Mail className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <Link
                    aria-label="mail to service.techatriocare@gmail.com"
                    href="mailto:service.techatriocare@gmail.com"
                    className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm relative break-all min-w-0"
                  >
                    service.techatriocare@gmail.com
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-300 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom section */}
        <div className="relative mt-4 pt-2">
          {/* Animated gradient divider */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          <div className="text-center">    
            {/* Copyright with enhanced styling */}
            <p className="text-sm bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              © 2025 TECH ATRIOCARE PVT. LTD. | Made with 
              <span className="inline-block mx-1 text-red-400">❤️</span> 
              in IIT Delhi
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}