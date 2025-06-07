import { Instagram, Linkedin, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#88cbd4]">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#88cbd4] transition-colors">
                  V-sync
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#88cbd4] transition-colors">
                  Haal-Chaal Pravartak
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#88cbd4] transition-colors">
                  Novicule-TA
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#88cbd4]">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#88cbd4] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#88cbd4] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
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
              <a
                href="mailto:service.techatriocare@gmail.com"
                className="hover:text-[#88cbd4] transition-colors text-sm"
              >
                service.techatriocare@gmail.com
              </a>
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
