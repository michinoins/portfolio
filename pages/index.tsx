import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Header />
      <HeroSection setIsLoading={setIsLoading} />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <EducationSection id="education" />
      <ExperienceSection id="experience" />
      <ContactSection id="contact" />
    </>
  );
};

export default Home;
