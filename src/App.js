import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
        <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4 xl:p-10">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
