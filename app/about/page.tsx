
import CardList from "@/components/custom-ui/cardspro";
import React from "react";

// WRITE EVERYTHING ABOUT  THE ABOUT PAGE HERE

const AboutPage = () => {
  return (
    <>
      <div className="min-h-[70vh] bg-gray-900 flex justify-center items-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-gray-200">
            We believe that every step toward recovery matters. Our mission is
            to help you move better, heal faster, and live pain-free through
            personalized physiotherapy care.
          </p>
        </div>
      </div>

      <div className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              About Company
            </h2>
            <p className="text-gray-600 mb-4">
              At alchemy, we believe that every step toward recovery matters. Our mission is to help you move better, heal faster, and live pain-free through personalized physiotherapy care.With a team of licensed and experienced physiotherapists, we provide hands-on treatment, tailored exercise programs, and evidence-based therapies designed to restore strength, improve mobility, and prevent future injuries.
            </p>
            <p className="text-gray-600">
             Whether you’re recovering from surgery, managing a sports injury, dealing with chronic pain, or simply seeking to improve your physical well-being, we are here to guide you on your journey to better health.We pride ourselves on creating a welcoming and supportive environment where patients of all ages feel heard, cared for, and motivated. Your health and comfort are our top priorities, and together, we’ll work toward restoring not just your movement, but also your confidence and quality of life
            </p>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center">
            {/* Blue Accent Shapes */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-800 rounded-tl-3xl rounded-br-3xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gray-800 rounded-tr-3xl rounded-bl-3xl z-0"></div>

            {/* Image */}
            <img
              src="assets/hero.webp"
              alt="About Company"
              className="relative rounded-lg shadow-lg w-full max-w-md z-10"
            />
          </div>
        </div>
      </div>
          
          <CardList/>
      
    </>
  );
};

export default AboutPage;
