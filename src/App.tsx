import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import InnovestHackPage from "./pages/InnovestHackPage.tsx";
import Gallery_Header from "./components/GalleryHeader";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/innovesthack" element={<InnovestHackPage />} />
      <Route path="/gallery_header" element={<Gallery_Header />} />
    </Routes>
  );
}

export default App;
