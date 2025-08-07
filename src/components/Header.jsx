// No changes to imports
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("/Home");
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About Us", path: "/AboutUs" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (path, external) => {
    if (!external) {
      setActiveSection(path.replace("#", ""));
    }
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const linkStyle = (path, external) => {
    const isActive = !external && path === `#${activeSection}`;
    return isActive
      ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-semibold"
      : "text-gray-700";
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 text-3xl font-bold">
          HireInAbuDhabi
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav className="flex space-x-6 items-center relative">
            <a
              href="/"
              onClick={() => handleNavClick("/", false)}
              className="text-lg text-gray-700 hover:text-green-600 transition duration-300"
            >
              Home
            </a>

            {/* Services with dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-lg text-gray-700 hover:text-green-600 transition duration-300"
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-md z-50">
                  <a
                    href="/Digitalmarketing"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="/Coding"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Coding
                  </a>
                  <a
                    href="/Multimedia"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Multimedia
                  </a>
                </div>
              )}
            </div>

            {navLinks
              .filter((item) => item.name !== "Home")
              .map(({ name, path, external }) => (
                <a
                  key={name}
                  href={path}
                  target={external ? "_blank" : "_self"}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={() => handleNavClick(path, external)}
                  className={`${linkStyle(
                    path,
                    external
                  )} hover:text-green-600 transition duration-300 text-lg`}
                >
                  {name}
                </a>
              ))}

            <a
              href="https://wa.me/971568145866"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105"
            >
              Talk Now
            </a>
          </nav>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(true)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="relative max-w-xs w-11/12 sm:max-w-sm bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-extrabold text-green-600 tracking-wide">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 rounded-full p-1 hover:bg-green-100 transition"
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>
            <ul className="space-y-4">
              {/* Home */}
              <li>
                <a
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center font-semibold text-lg hover:bg-green-100 rounded-md px-4 py-2"
                >
                  Home
                </a>
              </li>

              {/* Services Submenu */}
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center px-4 py-2 font-semibold text-lg cursor-pointer hover:bg-green-100 rounded-md">
                    Services <ChevronDown className="w-4 h-4" />
                  </summary>
                  <div className="pl-4 mt-1 space-y-1">
                    <a
                      href="/Digitalmarketing"
                      className="block px-4 py-2 rounded-md hover:bg-green-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      Digital Marketing
                    </a>
                    <a
                      href="/Coding"
                      className="block px-4 py-2 rounded-md hover:bg-green-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      Coding
                    </a>
                    <a
                      href="/Multimedia"
                      className="block px-4 py-2 rounded-md hover:bg-green-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      Multimedia
                    </a>
                  </div>
                </details>
              </li>

              {/* Other nav items */}
              {navLinks
                .filter((item) => item.name !== "Home")
                .map(({ name, path, external }) => (
                  <li key={name}>
                    <a
                      href={path}
                      target={external ? "_blank" : "_self"}
                      rel={external ? "noopener noreferrer" : undefined}
                      onClick={() => handleNavClick(path, external)}
                      className="block rounded-md px-4 py-2 text-center font-semibold text-lg hover:bg-green-100"
                    >
                      {name}
                    </a>
                  </li>
                ))}

              {/* WhatsApp Button */}
              <li>
                <a
                  href="https://wa.me/971568145866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-center font-semibold text-white bg-green-600 rounded-md hover:bg-green-500"
                >
                  Talk Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
