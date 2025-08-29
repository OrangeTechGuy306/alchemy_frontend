"use client";

import Link from "next/link";
import ServiceCard from "../serviceCard";

const services = [
  {
    image: "/assets/hero.webp",
    title: "Chiropractic Adjustments",
    description:
      "Personalized chiropractic adjustments to relieve pain and improve mobility.",
    link: "/services/chiropractic",
  },
  {
    image: "/assets/hero.webp",
    title: "Physiotherapy Sessions",
    description:
      "Evidence-based physiotherapy to help you recover and stay active.",
    link: "/services/physiotherapy",
  },
  {
    image: "/assets/hero.webp",
    title: "Posture Correction",
    description:
      "Posture training and corrective exercises for a healthy spine.",
    link: "/services/posture",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <p className="uppercase text-gray-800 font-semibold tracking-wide">
          Our Services
        </p>
        <h2 className="text-3xl font-bold text-gray-800">
          Move Freely, Live Fully with Our Care
        </h2>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/services"
          className="text-gray-800 font-medium hover:underline"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
