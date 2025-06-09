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
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#88cbd4]">Products</h3>
            <ul className="space-y-2">
              {
                products.map((product) => (
                  <li key={product.name}>
                <Link href={product.link} className="hover:text-[#88cbd4] transition-colors group flex" aria-label={product.name}>
                  {product.name}
                  <ArrowUpRight className="h-4 w-4 ml-2 -translate-x-0.5 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0 transition-transform"/>
                </Link>
              </li>
                ))
              }
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#88cbd4]">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/tech.atriocare/" aria-label="Instagram" className="hover:text-[#88cbd4] transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/tech-atriocare/" aria-label="Linkedin" className="hover:text-[#88cbd4] transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#88cbd4]">Address</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>
                  Plot No. - 2a, First Floor, Kh No 294 Kehar Singh State, Saidulajab Village, South West Delhi, India -
                  110030
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>
                  208, 2nd Floor Nagarjuna Block, Vignan University, Guntur - Tenali Rd, Vadlamudi, Andhra Pradesh -
                  522213
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>CIIE, Jamia Hamdard, Hamdard Nagar, New Delhi - 110062</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#88cbd4]">Email</h3>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <Link
                aria-label="mail to service.techatriocare@gmail.com"
                href="mailto:service.techatriocare@gmail.com"
                className="hover:text-[#88cbd4] transition-colors text-sm"
              >
                service.techatriocare@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2025 TECH ATRIOCARE PVT. LTD. | Made with ❤️ in IIT Delhi</p>
        </div>
      </div>
    </footer>
  )
}
