import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import innovestLogo from '../img/innovest.png';
import { motion } from 'framer-motion';
import SectionSquares from './SectionSquares';
import Events from './Event/Schedule';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen flex items-center overflow-hidden"
    >
      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0">
        <SectionSquares
          direction="diagonal"
          speed={0.1}
          borderColor="rgba(255, 255, 255, 0.8)"
          hoverFillColor="#F97316"
          squareSize={50}
          opacity={0.3}
          className="pointer-events-none"
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.div custom={1} variants={fadeUp} className="mb-6 flex flex-col items-start">
              <img
                src={innovestLogo}
                alt="Innovest Logo"
                className="h-28 md:h-40 w-auto mb-6 drop-shadow-lg"
              />
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Empowering Innovation, Inspiring Excellence
              </p>
              <p className="text-lg text-blue-200 mb-8 max-w-2xl">
                Join us for the most prestigious innovation and investment summit where groundbreaking
                ideas meet visionary investors. Experience the future of technology, entrepreneurship,
                and sustainable innovation.
              </p>
            </motion.div>

            {/* Event Details */}
            <motion.div custom={2} variants={fadeUp} className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-orange-400" />
                <div>
                  <p className="text-sm text-blue-200">Date</p>
                  <p className="font-semibold">August 18 - 20, 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-orange-400" />
                <div>
                  <p className="text-sm text-blue-200">Venue</p>
                  <p className="font-semibold">Chennai, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-orange-400" />
                <div>
                  <p className="text-sm text-blue-200">Expected</p>
                  <p className="font-semibold">1500+ Attendees</p>
                </div>
              </div>
            </motion.div>

            {/* CTA - Linked to Schedule */}
            <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#schedule"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Register Now
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="lg:pl-12"
          >
            {/* Heading Added */}
            <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-center">
              Statistics of Innovest'24
            </h2>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: 'Masterclass', value: '25+' },
                { label: 'Workshops', value: '30+' },
                { label: 'Team Registered', value: '160' },
                { label: 'School Students', value: '1500+' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={4.1 + index * 0.2}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white"
                >
                  <div className="text-3xl font-bold text-orange-400 mb-2">{item.value}</div>
                  <div className="text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} custom={5}>
              <CountdownTimer />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
