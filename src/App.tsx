import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import InnovestHackPage from "./pages/InnovestHackPage.tsx";
import EventsGallery from "./components/gallery_header.tsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/innovesthack" element={<InnovestHackPage />} />
      <Route path="/gallery_header" element={<EventsGallery />} />
    </Routes>
  );
}

export default App;
