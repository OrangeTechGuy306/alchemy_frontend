"use client";
import Image from "next/image";

interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    number: "01",
    title: "Personalized Treatment Plans",
    description:
      "We create treatment plans tailored to your unique needs, medical history, and goals. This ensures more effective results, faster recovery, and a better overall experience.",
  },
  {
    number: "02",
    title: "Experienced Professionals",
    description:
      "Our team consists of highly skilled and experienced professionals who deliver quality care, accurate guidance, and proven results you can trust.",
  },
  {
    number: "03",
    title: "Comprehensive Services",
    description:
      "We offer a full range of services, ensuring every aspect of your care — from assessment to treatment and follow-up — is seamless and effective.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Our Values
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          {values.map((value) => (
            <div
              key={value.number}
              className="flex gap-4 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <div className="text-sky-600 font-bold text-2xl">
                {value.number}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-600 leading-snug">
            Our Core Values: Guiding Principles of Quality Care
          </h2>
          <div className="relative w-full h-62 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/hero.webp"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
