import React from "react";
import Header from "../components/Header"; // Using the main Header component
import Hero from "../components/InnovestHack/Hero";
import About from "../components/InnovestHack/About";
import Domains from "../components/InnovestHack/Domains";
import Journey from "../components/InnovestHack/Journey";
// Schedule is commented out since it's not properly exported
// import Schedule from '../components/InnovestHack/Schedule';
import Partners from "../components/InnovestHack/Partners";
import Judging from "../components/InnovestHack/Judging";
import Prizes from "../components/InnovestHack/Prizes";
import Registration from "../components/InnovestHack/Registration";
import FAQ from "../components/InnovestHack/FAQ";
import Contact from "../components/InnovestHack/Contact";
import Footer from "../components/InnovestHack/Footer";

const InnovestHackPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <About />
      <Domains />
      <Journey />
      {/* Schedule section is commented out as the component is not properly exported */}
      {/* <Schedule /> */}
      <Partners />
      <Judging />
      <Prizes />
      <Registration />
      <Contact />
    </div>
  );
};

export default InnovestHackPage;
