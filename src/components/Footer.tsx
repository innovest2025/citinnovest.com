import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Events", href: "#events" },
    { name: "Registration", href: "#registration" },
    { name: "Contact", href: "#contact" }, // Added back 'Contact' as it was in the original image
  ];

  return (
    <footer className="bg-gray-900 text-white text-sm w-full">
      <div className="w-full px-60 py-12">
        {/*
          Using flexbox for the main layout to ensure proper justification of columns.
          'justify-between' pushes items to the ends and distributes space in between.
          'items-start' aligns items to the top of their container.
        */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Company Info - Left Column */}
          <div className="flex flex-col flex-1 space-y-4 text-left pr-8"> {/* text-left for left alignment of the section */}
            <div className="text-xl font-bold">
              INNOVEST <span className="text-orange-500">2025</span>
            </div>
            {/*
              For text justification, `text-justify` is applied.
              `max-w-xs` or a similar width constraint is often needed for `text-justify` to be effective.
            */}
            <p className="text-gray-300 leading-relaxed text-sm text-justify">
              India's premier innovation and investment summit, bringing
              together entrepreneurs, investors, and thought leaders to shape
              the future of technology and business.
            </p>
          </div>

          {/* Contact Info - Center Column */}
          <div className="flex flex-col flex-1 space-y-4 text-left px-8"> {/* text-left for left alignment of the section */}
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
              <span className="text-gray-300">
                citbif@citchennai.net<br />
                citil@citchennai.net
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
              <span className="text-gray-300">
                +91 99946 91313<br />
                +91 99424 09311
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
              <a
                href="https://maps.app.goo.gl/9J7F92jH7X7Y2Z7J7" // Example Google Maps link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition"
              >
                Chennai Institute of Technology
              </a>
            </div>
          </div>

          {/* Quick Links - Right Column */}
          <div className="flex flex-col flex-1 space-y-4 text-left pl-8"> {/* text-left for left alignment of the section */}
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="text-base font-semibold mb-3">Follow Us</h4> {/* Changed to h4 and adjusted font size */}
              <div className="flex space-x-4"> {/* Adjusted space-x for social icons */}
                <a
                  href="https://www.linkedin.com/company/citbif/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-200"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/citinnovationlabs?igsh=MW9vb2RrMDU5Y2J1Zw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;