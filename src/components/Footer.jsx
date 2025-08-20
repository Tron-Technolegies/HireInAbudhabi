import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// Import SVG icons from /assets/icons
import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "http://Wa.me/971568145866", external: true },
  ];

  const socialLinks = [
    { icon: FacebookIcon, url: "https://www.facebook.com/HireinAbudhabi" },
    { icon: TwitterIcon, url: "https://x.com/HireinAbuDhabi" },
    { icon: InstagramIcon, url: "https://www.instagram.com/hireinabudhabi/" },
    { icon: LinkedinIcon, url: "#" },
  ];

  return (
    <footer id="contact" className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center sm:justify-start mb-8">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 text-2xl md:text-3xl font-bold">
            <img
              src="/Hirein-footer.jpg"
              className="h-16 w-auto object-contain"
              alt="Hire in Abu Dhabi Logo | Outsourcing Services"
            />
          </h3>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition-colors duration-200 text-gray-600"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="hover:text-green-600 transition-colors duration-200 text-gray-600"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="flex place-items-start">
                  <MapPin className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 " />
                  <span className="text-gray-600">
                    Plot 122, Ad Doja 1st St, M-40 Mussafah, Abu Dhabi, United Arab Emirates
                  </span>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
                  <a
                    href="mailto:hireinabudhabi@gmail.com"
                    className="hover:text-green-600 transition-colors duration-200 text-gray-600"
                  >
                    Hireinmarketing@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
                  <a
                    href="tel:+971123456789"
                    className="hover:text-green-600 transition-colors duration-200 text-gray-600"
                  >
                    +971 56 814 5866
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
                  aria-label={`${social.icon} link`}
                >
                  <img src={social.icon} alt="" className="w-7 h-7 sm:w-7 sm:h-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="mb-3 text-gray-600">Subscribe for updates and offers</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-xs mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 text-sm w-full"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} HireInAbuDhabi. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Link
                to="/privacy-policy"
                className="hover:text-green-600 text-sm transition-colors duration-200 text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-green-600 text-sm transition-colors duration-200 text-gray-600"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
