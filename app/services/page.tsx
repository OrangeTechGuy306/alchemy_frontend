import React from 'react'
import { FaCheck, FaHome } from 'react-icons/fa'
import { PiGreaterThan } from 'react-icons/pi'

const services = [
  {
    title: "Body Work",
    description: "Experience therapeutic treatments to relieve muscle tension, correct posture, and reduce physical stress."
  },

  {
    title: "Body Management",
    description:
      "Manage chronic conditions and enhance performance through tailored wellness and recovery programs."
  },

  {
    title: "Physiotherapy",
    description:
      "Expert physiotherapy for injuries like shoulder dislocation, knee pain, and sprains. Personalized rehab programs."
  }
]

const ServicesPage = () => {
  return (
    <div className='pt-[150px]'>

      <div className='w-full shadow bg-white h-full flex flex-col items-center justify-center py-10'>


        <h1 className='text-5xl text-center font-bold text-gray-900 mb-4'>
          Services
        </h1>


        <h3 className="flex items-center text-gray-700 text-lg gap-2">
          <FaHome className="text-2xl text-gray-300" />
          Home
          <span className="text-sm">
            <PiGreaterThan />
          </span>
          <span className="text-gray-900 font-semibold">Services</span>
        </h3>

      </div>

      <div className='mt-12 bg-white py-12'>
        <div className='max-w-6xl mx-auto px-4'>


          <div className="mb-10 text-center">
            <h1 className='text-4xl text-gray-900 font-bold mb-3'>
              Featured Services
            </h1>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Discover a wide range of services designed to help you feel better,
              look better, and live healthier. From personalized consultations
              to professional treatments, we focus on delivering solutions that
              match your unique needs and goals.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="mt-16 bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


          <div className="flex justify-center">
            <img
              src="/assets/image.jpg"
              alt="About Services"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>


          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are committed to providing exceptional care and personalized
              solutions that improve your health, fitness, and overall well-being.
              Our experienced team combines modern techniques with a compassionate
              approach, ensuring every client receives the attention they deserve.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
              <FaCheck className="text-gray-600 font-bold"/>
                <span>High-quality and reliable service tailored to your needs</span>
              </li>
              <li className="flex items-center gap-3">
              <FaCheck className="text-gray-600 font-bold"/>
                <span>Affordable pricing with excellent value</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-gray-600 font-bold"/>
                <span>Friendly support team always ready to help</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>





  )
}

export default ServicesPage