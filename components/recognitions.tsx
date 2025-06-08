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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recognitions & Partnerships</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by leading organizations and institutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recognitions.map((recognition, index) => (
            <div key={index} className="text-center">
              <div className="p-6">
                <div className="h-32 flex justify-center">
                  <img
                    src={recognition.logo || "/placeholder.svg"}
                    alt={recognition.name}
                    className="max-w-32 h-fit mx-auto my-auto! mb-4 brightness-10 saturate-100 hover:brightness-100 hover:saturate-50 transition-all"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">{recognition.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
