import React, { useState } from "react";
import Navbar from "./NAVBAR/Navbar";
import Sidebar from "./NAVBAR/Sidebar";
import HeroSection from "./HERO/HeroSection";
const Home = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div>
      <Navbar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <HeroSection />
    </div>
  );
};

export default Home;
