import Image from "next/image"

export default function RecognitionsSection() {
  const recognitions = [
    { name: "TATA 1MG", logo: "/1mg.webp" },
    { name: "CIIE Jamia Hamdard", logo: "/jamia.webp" },
    { name: "Ministry of MSME", logo: "/msme.webp" },
    { name: "DPIIT", logo: "/dpiit.webp" },
    { name: "TIDE 2.0", logo: "/tide.webp" },
    { name: "Vignan Technology Business Incubator", logo: "/vignan.png" },
    { name: "DST-NIDHI", logo: "/dst_nidhi.webp" },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2>Recognitions & Partnerships</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by leading organizations and institutions</p>
        </div>

        <div className="relative overflow-hidden mb-4">
          <div className="flex animate-[marquee_20s_linear_infinite] hover:animate-[marquee_20s_linear_infinite_paused] space-x-16 whitespace-nowrap">
            {/* First set of logos */}
            {recognitions.map((recognition, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center w-40">
                <div className="h-30 w-48 flex items-center justify-center mb-3">
                  <Image
                    src={recognition.logo || "/placeholder.svg"}
                    width="128"
                    height="80"
                    alt={recognition.name}
                    className="max-w-48 max-h-30 object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">{recognition.name}</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {recognitions.map((recognition, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 flex flex-col items-center justify-center w-40">
                <div className="h-30 w-48 flex items-center justify-center mb-3">
                  <Image
                    src={recognition.logo || "/placeholder.svg"}
                    width="128"
                    height="80"
                    alt={recognition.name}
                    className="max-w-48 max-h-30 object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">{recognition.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}