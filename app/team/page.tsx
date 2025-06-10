"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const TeamSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { src: "/team/activity1.jpg", alt: "Activity 1" },
    { src: "/team/activity2.jpg", alt: "Activity 2" },
    { src: "/team/activity3.jpg", alt: "Activity 3" }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Together, we innovate and inspire!</h2>

          {/* Row */}
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            {/* Member 1 */}
            <div className="w-full md:w-5/12 max-w-md">
              <div className="rounded-lg border border-gray-300 p-6 h-full">
                <Image 
                  src="/team/tarun.jpg" 
                  alt="Tarun Adarsh" 
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mt-3 mb-2">Tarun Adarsh</h4>
                <p className="text-blue-600 font-medium mb-4">Founder | Director of R & D | Product Innovation Strategist</p>
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Tarun Adarsh, founder of Tech Atriocare Private Limited, is a healthcare innovator with over five years of R&D experience. With expertise in microbiology, he has developed detection assays for sepsis, endotoxin, and COVID-19, as well as voice-based healthcare solutions. Collaborating with top institutions like IIT Delhi and JNU, he has authored four publications and filed two patents. Tarun has received prestigious fellowships and funding, and actively participates in events like Startup Mahakumbh and Shark Tank India. His current focus is on a voice-based personalized wellness platform. Tarun is also an experimental filmmaker with digital distribution success.
                  </p>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="w-full md:w-5/12 max-w-md">
              <div className="rounded-lg border border-gray-300 p-6 h-full">
                <Image 
                  src="/team/subhash.jpg" 
                  alt="Subhash Chandra Shrivastav" 
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mt-3 mb-2">Subhash Chandra Shrivastav</h4>
                <p className="text-blue-600 font-medium mb-4">Director (Logistics)</p>
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Mr. Subhash holds the work experience of around 34 years in the sales and service sector of electronic items. He has worked as an on-field service engineer in reputed companies like LG, Videocon, TCL, and T-series before working as a self-employed service engineer. He is currently associated with the founder&apos;s office and offers his advisory as well as support for the on-field logistical operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Member 3: Sanya */}
          <div className="flex justify-center mt-8">
            <div className="w-full md:w-1/2 max-w-lg">
              <div className="rounded-lg border border-gray-300 p-6">
                <Image 
                  src="/team/sanya.jpg" 
                  alt="Sanya Mishra" 
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mt-3 mb-2">Sanya Mishra</h4>
                <p className="text-blue-600 font-medium mb-4">R & D Associate (Tech Head)</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Sanya spearheads the technical direction of digital health projects at Tech Atriocare Pvt. Ltd. She started her journey as an intern, working on website modifications, and quickly showcased her technical expertise. Her dedication to research and development, combined with her resilience, has earned her a leadership role, overseeing the technical aspects of the company&apos;s digital health initiatives. With a strong foundation in Computer Science and areas of interest in AI/ML (Deep Learning, NLP), AWS, and full-stack web development, Sanya drives the delivery of innovative solutions. Her technical acumen ensures seamless project execution, fostering a culture of innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mentors */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">OUR MENTORS!</h2>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-8">
        {/* Mentor Cards */}
        
        {/* Mentor 1 */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
          <Image 
            src="/team/arpan.jpg" 
            alt="Dr. Arpan Gupta" 
            width={200}
            height={200}
            className="rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">Dr. Arpan Gupta</h4>
            <p className="text-blue-600 font-medium mb-3">(Technology)</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Dr. Arpan Gupta is an Associate Professor in the Department of Mechanical Engineering at IIT Delhi with research interests in metamaterials, acoustics, vibrations, and image processing for diagnostics. He has a Ph.D. from the National University of Singapore and a B. Tech in Mechanical Engineering from IIT Delhi. He has published several papers in reputed journals. His academic and industrial experience includes working as a Scientist at IHPC, Singapore, and Assistant Professor at IIT Mandi. His teaching interests include engineering visualization, vibrations, acoustics, FEM, and numerical methods.
            </p>
          </div>
        </div>

        {/* Mentor 2 */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
          <Image 
            src="/team/sarthak.jpg" 
            alt="Dr. Sarthak Chakravarty" 
            width={200}
            height={200}
            className="rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">Dr. Sarthak Chakravarty</h4>
            <p className="text-blue-600 font-medium mb-3">(Clinical Support)</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Dr. Sarthak Chakravarty is a confident and disciplined physician with 10 years of experience in hospital and clinical settings, specializing in emergency medicine and minority groups. He holds a MBBS degree and various certifications in emergency medicine, tuberculosis management, and healthcare management. He has worked in various hospitals and clinics, including Indraprastha Apollo Hospital and Oriana Hospital Pvt. Ltd. Currently, he is a Consultant at TATA 1mg Healthcare Services Pvt. Ltd and runs his own private practice at Nirmal Medical Center.
            </p>
          </div>
        </div>

        {/* Mentor 3 */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
          <Image 
            src="/team/santanu.jpg" 
            alt="Dr. Santanu Kar Mahapatra" 
            width={200}
            height={200}
            className="rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">Dr. Santanu Kar Mahapatra</h4>
            <p className="text-blue-600 font-medium mb-3">(Research)</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Dr. Santanu Kar Mahapatra is an Associate Professor and Head of the Paramedical & Allied Health Science Department at Midnapore City College. He holds an M.Sc. in Human Physiology (2005) and a Ph.D. from Vidyasagar University (2010). Dr. Mahapatra specializes in Immunology, focusing on macrophage polarization and immune metabolism, as well as Physiology related to infectious diseases like Leishmania, Tuberculosis, and Malaria. He has extensive teaching experience and has worked in research roles at SCBT, SASTRA University, and Bose Institute. He has numerous publications, serves as a Ph.D. guide, and is involved in several research projects. He is a member of various scientific societies and has received prestigious awards, including the 2024 CRS Bronze Medal and the 2022 Dr. Siddhartha Debnath Memorial Oration.
            </p>
          </div>
        </div>

        {/* Special Mention */}
        <div className="text-center mt-16 mb-20">
          <h2 className="text-3xl font-bold mb-8">SPECIAL MENTION</h2>
          <Image 
            src="/team/specialmention.jpg" 
            alt="Special mention" 
            width={450}
            height={300}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Interns Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">INTERNS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Image 
                src="/team/batch1.jpg" 
                alt="Batch 1 Interns" 
                width={200}
                height={200}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="text-center">
              <Image 
                src="/team/batch2.jpg" 
                alt="Batch 2 Interns" 
                width={200}
                height={200}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="text-center">
              <Image 
                src="/team/batch3.jpg" 
                alt="Batch 3 Interns" 
                width={200}
                height={200}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="text-center">
              <Image 
                src="/team/batch4.jpg" 
                alt="Batch 4 Interns" 
                width={200}
                height={200}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Team Activities */}
        <div className="text-center mt-12 mb-8">
          <h2 className="text-3xl font-bold">TEAM ACTIVITIES</h2>
        </div>

        <div className="relative max-w-4xl mx-auto mb-12">
          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-8 h-1 rounded-full transition-colors ${
                  activeSlide === index ? 'bg-gray-800' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image 
                    src={slide.src}
                    alt={slide.alt}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg shadow"
                  />
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-opacity z-10"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-opacity z-10"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;