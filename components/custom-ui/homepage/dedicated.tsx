"use client";

import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface InfoItemProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const InfoItem = ({ Icon, title, description }: InfoItemProps) => (
  <div className="flex items-center gap-3 w-full sm:w-auto">
    <Icon className="text-gray-800 flex-shrink-0" />
    <div>
      <p className="font-semibold text-gray-800">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <section className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <InfoItem
            Icon={Clock}
            title="Opening Hours"
            description="Mon to Sat: 9.00am to 6.00pm"
          />
          <InfoItem
            Icon={MapPin}
            title="Our Location"
            description="23 Jump St, PH, NG 2025"
          />
          <button
            aria-label="Make an Appointment"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition w-full sm:w-auto text-center"
          >
            Make an Appointment
          </button>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/assets/hero.webp"
              alt="Physiotherapist"
              width={500}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
            <div className="absolute bottom-4 left-4 bg-white shadow-lg px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="bg-sky-100 text-gray-600 px-3 py-1 rounded-md font-bold text-sm sm:text-base">
                15+
              </span>
              <p className="text-sm text-gray-700">Years of Experience</p>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="uppercase text-gray-600 font-semibold tracking-wide">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug">
              Dedicated to Your Health, <br /> Committed to Your Recovery
            </h2>
            <p className="text-gray-600">
              Massage Alchemy is more than just a clinic—it’s a space where your health and comfort
              are prioritized. Our expert chiropractors and physiotherapists are dedicated
              to providing treatment plans tailored to your individual needs.
            </p>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="font-semibold text-gray-800">Our Mission</h3>
                <p className="text-sm text-gray-800 mt-2">
                  To enhance lives through compassionate, comprehensive care.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="font-semibold text-gray-700">Our Vision</h3>
                <p className="text-sm text-gray-700 mt-2">
                  To be a leading provider of innovative and patient-centered chiropractic care.
                </p>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                aria-label="Learn More"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition w-full sm:w-auto text-center"
              >
                Learn More
              </button>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="text-gray-600" />
                <p className="font-medium">+123 9061767896</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
