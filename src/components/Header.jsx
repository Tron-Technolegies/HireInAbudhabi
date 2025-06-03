import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("/Home");

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "How It Works", path: "#howItWorks" },
    { name: "Services", path: "#services" },
    { name: "Industries", path: "#industries" },
    // { name: "Testimonials", path: "#testimonials" },
    {
      name: "Contact",
      path: "#contact",
      external: false,
    },
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
  };

  const linkStyle = (path, external, name) => {
    if (name === "Contact") return "";
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

        {!isMobile && (
          <nav className="flex space-x-6">
            {navLinks.map(({ name, path, external }) => (
              <a
                key={name}
                href={path}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={() => handleNavClick(path, external)}
                className={`${
                  name === "Contact"
                    ? "bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                    : `${linkStyle(path, external, name)} hover:text-green-600`
                } transition duration-300 text-lg`}
              >
                {name}
              </a>
            ))}
          </nav>
        )}

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

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div
            className="relative max-w-xs w-11/12 sm:max-w-sm bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-8
            transform transition-all duration-400 ease-in-out"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-extrabold text-green-600 tracking-wide">
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 rounded-full p-1 hover:bg-green-100 transition"
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>
            <ul className="space-y-5 divide-y divide-gray-200">
              {navLinks.map(({ name, path, external }) => (
                <li key={name} className="pt-2 first:pt-0">
                  <a
                    href={path}
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : undefined}
                    onClick={() => handleNavClick(path, external)}
                    className={`block rounded-md px-4 py-3 text-center font-semibold text-lg
                      transition-colors duration-300
                      ${
                        name === "Contact"
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : `${linkStyle(
                              path,
                              external,
                              name
                            )} hover:bg-green-500 hover:text-white`
                      }
                    `}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
