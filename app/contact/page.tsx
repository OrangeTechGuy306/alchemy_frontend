import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <div className='pt-[150px] '>
      <div className='flex flex-col w-full h-full shadow items-center justify-center py-10'>

        <h1 className='text-5xl text-gray-900 font-bold mb-4'>Contact Us</h1>

        <p className='text-gray-600 text-xl '>We would love to hear from you.</p>
      </div>

      <div className='"max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-10'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>Get in touch</h1>

          <p className='text-gray-800 mb-8'>
            Reach out to us anytime - we're here to help and answer your question
          </p>

          <div className='flex items-center gap-4 mb-6'>
            <FaMapMarkerAlt className='text-gray-800 text-xl mt-1' />
            <div>

              <h4 className='font-semibold text-gray-900 text-xl'>Location</h4>
              <p className="text-gray-600">Jalan Cempaka Wangi No 22<br />Jakarta - Indonesia</p>
            </div>
          </div>

          <div className='flex items-center gap-4 mb-6'>
            <FaEnvelope className='text-gray-800 text-xl mt-1' />
            <div>

              <h4 className='font-semibold text-gray-900 text-xl'>Email us</h4>
              <p className="text-gray-600">Alchemy@gmail.com</p>
            </div>
          </div>

          <div className='flex items-center gap-4 mb-6'>
            <FaPhone className='text-gray-800 text-xl mt-1' />
            <div>

              <h4 className='font-semibold text-gray-900 text-xl'>Call us</h4>
              <p className="text-gray-600">09067823827</p>
            </div>
          </div>
          <h4 className='font-bold text-gray-900 mb-3'>Follow our social media</h4>
          <div className='flex gap-4'>
            <a href="" className='text-gray-900 hover:text-gray-700'><FaFacebookF /></a>
            <a href="" className='text-gray-900 hover:text-gray-700'><FaTwitter /></a>
            <a href="" className='text-gray-900 hover:text-gray-700'><FaInstagram /></a>
            <a href="" className='text-gray-900 hover:text-gray-700'><FaYoutube /></a>

          </div>
        </div>
        <div className='bg-gray-50 rounded-2xl shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>Send a message</h2>
          <p className='text-gray-600 mb-6'>Fill in the form below and our team will get back to you shortly</p>

          <form action="" className='space-y-3'>
            <div className='grid grid-cols-2 gap-4'>
              <input type="text" placeholder='Name ' className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none' />

              <input type="text" placeholder='Name ' className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none' />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Phone" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none" />
              <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none" />
            </div>

            <input type="text" placeholder="Subject" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none" />


            <textarea placeholder="Message" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none"></textarea>


            <button type="submit" className="w-full bg-gray-900 cursor-pointer hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition">
              SEND MESSAGE
            </button>

          </form>
        </div>
      </div>

    

      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl flex flex-col rounded-xl shadow-md overflow-hidden mt-10">

          
          <div className="w-full h-[400px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.899381778928!2d3.3792!3d7.3775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjInMzkuMCJOIDPCsDIyJzQ1LjMiRQ!5e0!3m2!1sen!2sng!4v1616584462710!5m2!1sen!2sng"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full h-auto flex flex-col items-center justify-center p-6 bg-white">
            <h1 className="text-center text-4xl font-bold text-gray-900 mb-4">Newsletter</h1>
            <p className="text-center text-lg text-gray-900 mb-6">
              Signup for our newsletter to get updates, insights, and promotions
            </p>

            <form action="" className="w-full max-w-sm">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
                />
                <button
                  type="submit"
                  className="px-4 bg-gray-900 hover:bg-gray-700 text-white cursor-pointer font-semibold rounded-lg transition"
                >
                  SIGN UP
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>



    </div>
  )
}

export default ContactPage