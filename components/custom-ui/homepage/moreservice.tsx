import React from "react";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Make an Appointment",
    description: "Easily schedule your visit at a convenient time.",
    icon: "📅",
  },
  {
    title: "Meet Our Specialists",
    description: "Our experts provide the best personalized care.",
    icon: "👨‍⚕️",
  },
  {
    title: "Receive Treatment",
    description: "Tailored therapy sessions for long-lasting results.",
    icon: "💆‍♀️",
  },
  {
    title: "Guide You Through",
    description: "We’ll support you at every step of your recovery.",
    icon: "🤝",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
        A Patient-Centered Approach for Effective, Long-Lasting Results
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="shadow-md rounded-2xl p-6 text-center bg-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

