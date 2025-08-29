// components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        

        <div>
          <h2 className="text-2xl font-bold mb-3">Massage Alchemy</h2>
          <p className="text-sm text-gray-200">
            Delivering expert physiotherapy care and support to help you recover
            and thrive every day.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li>Body Work</li>
            <li>Body Management</li>
            <li>Physiotherapy</li>
            <li>Rehabilitation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">123 Wellness Avenue, Lagos, Nigeria</p>
          <p className="text-sm mt-2">Phone: +234 901 234 5678</p>
          <p className="text-sm">Email: info@massageAlchemy.com</p>
        
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} MassageAlchemy. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
