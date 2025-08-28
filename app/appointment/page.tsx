import { Clock, Video } from 'lucide-react'
import React from 'react'

const services = [

  {
    id: 1,
    title: "Virtual Consultation",
    description: "Get professional consultation to discuss your health concerns and receive expert advice.",
    price: "10,000",
    duration: "30 minutes",
  },

  {
    id: 2,
    title: "Virtual Consultation",
    description: "Get professional consultation to discuss your health concerns and receive expert advice.",
    price: "10,000",
    duration: "30 minutes",
  },

  {
    id: 3,
    title: "Physical Consultation",
    description: "Targeted sessions to improve posture, relieve pain, and enhance physical wellness.",
    price: "30,000",
    duration: "40 minutes",
  },

  {
    id: 4,
    title: "Physical Consultation",
    description: "Specialized physiotherapy sessions for rehabilitation, pain management, and recovery.",
    price: "50,000",
    duration: "1 hour",
  }

]
const AppointmentPage = () => {

  return (
    <div className="pt-[150px]">
      <div className="w-full h-full flex flex-col justify-center text-center items-center py-10">
        <h1 className="text-6xl text-gray-900 font-bold mb-4">
          Book an Appointment
        </h1>
        <p className="max-w-3xl text-gray-600 text-lg">
          Schedule a personal consultation to discuss your health needs and goals.
          Our specialists will work with you to create a personalized plan for your
          well-being.
        </p>
      </div>


      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className='flex flex-col'>
              <label htmlFor="" className='text-xl font-medium mb-2'>Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-500 outline-none"
              />

            </div>

            <div className='flex flex-col'>
              <label htmlFor="" className='text-xl font-medium mb-2'>Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='flex flex-col'>
              <label htmlFor="" className='text-xl font-medium mb-2'>Phone</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="" className='text-xl font-medium mb-2'>Services</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-500 outline-none">
                <option>Select Service</option>
                <option>General Consultation</option>
                <option>Body Work</option>
                <option>Physiotherapy</option>
                <option>Body Management</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='flex flex-col'>
              <label htmlFor="" className='text-xl font-medium mb-2'>Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="" className='text-xl font-medium mb-2'>Time</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-500 outline-none">
                <option>Select Time</option>
                <option>09:00 AM</option>
                <option>11:00 AM</option>
                <option>01:00 PM</option>
                <option>03:00 PM</option>
              </select>
            </div>
          </div>


          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl font-medium mb-2'>Addtional Information</label>
            <textarea
              placeholder="Additional Information (symptoms, concerns, or requests)"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:ring-2 focus:ring-gray-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-400 text-white font-semibold py-3 rounded-lg transition"
          >
            Book Appointment
          </button>
        </form>

        <div className='flex flex-col gap-6'>


          <div className="bg-red-50 border-red-200 dark:border-red-900 dark:bg-red-900 border shadow-md rounded-xl p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">Pre-Consultation</h2>
            <p className="text-gray-600 mb-4">
              To make the most of your consultation, please come prepared with details about your health
              history, current symptoms, and any concerns you would like to address.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Bring previous medical records if available</li>
              <li>Note any ongoing medications or treatments</li>
              <li>Write down specific questions for the specialist</li>
              <li>Arrive 10 minutes early for check-in</li>
            </ul>
            <p className="text-gray-600 mt-6">
              Our goal is to ensure your consultation is productive, comfortable, and tailored to your
              health needs.
            </p>
          </div>
          <div className='bg-gradient-to-br from-red-100 to-red-50 dark:from-red-950/40 dark:to-transparent rounded-lg border border-red-200 dark:border-red-900/50 flex items-center justify-center hiddden lg:block mt-8 h-60'>
            <div className='text-center p-6'>
              <p className='text-red-600 dark:text-red-400 font-serif italic text-xl'></p>
              <p> “Your health, our priority”</p>

              <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mt-2">
                Compassionate Care
              </h2>
            </div>

          </div>
        </div>

      </div>

      <div className="w-full h-full flex flex-col justify-center text-center items-center py-10">
        <h1 className="text-6xl text-gray-900 font-bold mb-4">
          Consultation Options

        </h1>
        <p className="max-w-3xl text-gray-600 text-lg">
          Choose the consultation type that best suits your needs and preferences
        </p>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-200">
                <Video className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                <p className="text-xl font-normal text-gray-500">(with Mr.Ibrahim)</p>
              </div>
            </div>
            <div className="flex items-center gap-6 mb-5">
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5 text-gray-500" />
                <span>Duration- {service.duration}</span>
              </div>
              <span className="text-red-600 font-semibold">
                ₦{service.price.toLocaleString()}
              </span>
            </div>
            <p className="text-xl mb-2">{service.description}</p>
            <p className="text-sm text-muted-foreground italic">
              Please note that all consultations are<span className="font-medium">Non-refundable</span>,
              <span className="font-medium"> non-transferable</span>, and do not count toward future treatment payments.
              Please review our consultation policy carefully before proceeding with payment.
              Web conferencing details will be provided upon confirmation (if applicable).

            </p>
          </div>
        ))}
      </div>
    </div>


  )
}

export default AppointmentPage