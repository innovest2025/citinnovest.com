import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      details: ["citbif@citchennai.net", "citil@citchennai.net"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      details: ["+91 99946 91313", "+91 99424 09311 "],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about Innovest 2025? We're here to help! Reach out to
            us through any of the channels below or send us a message using the
            contact form.
          </p>
        </div>

        {/* Get in Touch Boxes */}
        <div className="max-w-6xl mx-auto w-full flex flex-col space-y-6">
          {/* Row 1: Email Us & Call Us */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 w-full">
            {/* Email Us */}
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md flex-1 text-center">
              <div className="text-orange-500">{contactInfo[0].icon}</div>
              <div>
                {contactInfo[0].details.map((detail, index) => (
                  <p key={index} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
            </div>

            {/* Call Us */}
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md flex-1 text-center">
              <div className="text-orange-500">{contactInfo[1].icon}</div>
              <div>
                {contactInfo[1].details.map((detail, index) => (
                  <p key={index} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Visit Us with Map on Left and Address on Right */}
          <div className="flex justify-center w-full">
            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6 p-6 bg-white rounded-lg shadow-md w-full max-w-4xl">
              {/* Map on Left */}
              <div className="w-full sm:w-1/2">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0146562515687!2d80.0410!3d12.9708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE1LjEiTiA4MMKwMDInMzUuMyJF!5e0!3m2!1sen!2sin!4v1690800000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow"
                ></iframe>
              </div>

              {/* Address on Right (Centered) */}
              <div className="w-full sm:w-1/2 flex flex-col items-center justify-center text-center">
                <div className="text-orange-500 mb-2">
                  <MapPin className="h-6 w-6" />
                </div>
                <p className="text-gray-800 text-lg font-semibold">
                  Sarathy Nagar, Kundrathur
                </p>
                <p className="text-gray-600 text-md">Chennai - 600069</p>
                <a
                  href="https://maps.google.com/maps?q=12.970856%2C80.0431647&z=17&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
