import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Domains from "../components/Domains";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TiledGallery from "../components/TiledGallery";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Events />
      <TiledGallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
