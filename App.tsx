import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import InnovestHackPage from "./pages/InnovestHackPage.tsx";
import EventsGallery2025 from "./components/EventsGallery2025/index.tsx";
import EventsGallery from "./components/gallery_header.tsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/innovesthack" element={<InnovestHackPage />} />
      <Route path="/gallery_header" element={<EventsGallery />} />
      <Route path="/gallery/2025" element={<EventsGallery2025 />} />
    </Routes>
  );
}

export default App;
